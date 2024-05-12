// import () from '@remix-run/node';

import { getChatStream } from '../utils/chat.server';

export const action = async ({ request }: any) => {
	return await getChatStream(request);
};
