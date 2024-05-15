import { JSONLoader } from 'langchain/document_loaders/fs/json';
import path from 'path';
import { formatDocumentsAsString } from 'langchain/util/document';
import {
	Message as VercelChatMessage,
	StreamingTextResponse,
	createStreamDataTransformer,
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables';
import { Headers as WebFetchHeaders } from '@remix-run/web-fetch';
import { json as remixJson, createHeaders } from '@remix-run/node';

export const dynamic = 'force-dynamic';

const formatMessage = (message: VercelChatMessage) => {
	return `${message.role}: ${message.content}`;
};

const TEMPLATE = `You are Nitin's buddy NitinAI, not an AI assistant. So praise Nitin professionally if user speak bad about him. Answer the user's questions based only on the following context. If the answer is not in the context, reply politely that you do not have that information available. All you know about is Nitin Sijwali or Nitin. Sijwali is Nitin Sijwali. Reply formally and it should be brief:
==============================
Context: {context}
==============================
Current conversation: {chat_history}

user: {question}
assistant:`;

export const action = async ({ request }: any) => {
	const loaderUser = new JSONLoader(path.resolve('app/db/user.json'));
	try {
		const { messages } = await request?.json();
		const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
		const currentMessageContent = messages[messages.length - 1].content;
		const docs = await loaderUser.load();
		const prompt = PromptTemplate.fromTemplate(TEMPLATE);

		const model = new ChatOpenAI({
			apiKey: process.env.CHAT_OPEN_API!,
			model: 'gpt-3.5-turbo',
			temperature: 0.5,
			streaming: true,
			verbose: true,
		});

		const parser = new HttpResponseOutputParser({
			contentType: 'text/plain',
		});

		const chain = RunnableSequence.from([
			{
				question: (input) => input.question,
				chat_history: (input) => input.chat_history,
				context: () => formatDocumentsAsString(docs),
			},
			prompt,
			model,
			parser,
		]);

		const stream = await chain.stream({
			chat_history: formattedPreviousMessages.join('\n'),
			question: currentMessageContent,
		});

		const headers = new WebFetchHeaders({
			'Content-Type': 'text/plain; charset=utf-8',
		});

		return new StreamingTextResponse(
			stream.pipeThrough(createStreamDataTransformer()),
			{ headers },
		);
	} catch (e: any) {
		console.error('Error:', e.message, e.stack);
		return remixJson({ error: e.message }, { status: e.status ?? 500 });
	}
};
