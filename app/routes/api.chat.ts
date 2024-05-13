import {
	Message as VercelChatMessage,
	StreamingTextResponse,
	createStreamDataTransformer,
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { Document } from 'langchain/document';
import { JSONLoader } from 'langchain/document_loaders/fs/json';
import { RunnableSequence } from '@langchain/core/runnables';
import { formatDocumentsAsString } from 'langchain/util/document';
import { CharacterTextSplitter } from 'langchain/text_splitter';
import Response from '@remix-run/node';
import path from 'path';

export const dynamic = 'force-dynamic';
// export const runtime = 'edge';

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
	return `${message.role}: ${message.content}`;
};

const TEMPLATE = `You are Nitin's buddy NitinAI, not an AI assitant. So praise nitin professionally if user speak bad about him. Answer the user's questions based only on the following context. If the answer is not in the context, reply politely that you do not have that information available. All you know about is Nitin Sijwali or nitin. Sijwali is Nitin Sijwali. Reply formally and it should be brief:
==============================
Context: {context}
==============================
Current conversation: {chat_history}

user: {question}
assistant:`;

export const action = async ({ request }: any) => {
	const loaderUser = new JSONLoader(path.resolve('app/db/user.json'));
	try {
		// Extract the `messages` from the body of the request
		const { messages } = await request?.json();

		const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);

		const currentMessageContent = messages[messages.length - 1].content;
		// const textSplitter = new CharacterTextSplitter();
		const docs = await loaderUser.load();
		// const docs = new Document({ pageContent: path.toString() });

		const prompt = PromptTemplate.fromTemplate(TEMPLATE);

		const model = new ChatOpenAI({
			apiKey: process.env.CHAT_OPEN_API!,
			model: 'gpt-3.5-turbo',
			temperature: 0.5,
			streaming: true,
			verbose: true,
		});

		/**
		 * Chat models stream message chunks rather than bytes, so this
		 * output parser handles serialization and encoding.
		 */
		const parser = new HttpResponseOutputParser();

		const chain: any = RunnableSequence.from([
			{
				question: (input) => input.question,
				chat_history: (input) => input.chat_history,
				context: () => formatDocumentsAsString(docs),
			},
			prompt,
			model,
			parser,
		]);

		// Convert the response into a friendly text-stream
		const stream = await chain.stream({
			chat_history: formattedPreviousMessages.join('\n'),
			question: currentMessageContent,
		});

		// Respond with the stream
		return new StreamingTextResponse(
			stream.pipeThrough(createStreamDataTransformer()),
		);
	} catch (e: any) {
		return Response.json({ error: e.message }, { status: e.status ?? 500 });
	}
};
