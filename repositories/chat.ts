export const ask = ({ messages }: any) => {
	return fetch('/api/chat', {
		method: 'POST',
		headers: { contentType: 'nosniff' },
		body: JSON.stringify({ messages }),
	});
};

export const processChatResponse = async ({ response, onChunk }: any) => {
	const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
	let string = '';

	while (true) {
		const stream = await reader.read();
		if (stream.done) break;

		const chunks = stream?.value
			.replaceAll(/^data: /gm, '')
			.split('\n')
			.filter((c: any) => Boolean(c.length) && c !== '[DONE]')
			.map((c: any) => JSON.parse(c));

		for await (let chunk of chunks) {
			const content = chunk.choices[0].delta.content;
			if (!content) continue;
			string += chunk.choices[0].delta.content;
			onChunk(string);
		}
	}
	return string;
};
