import { useState } from 'react';

export const useChat = () => {
	const [messages, setMessages] = useState<any>([]);

	const addMessage = (message: any) =>
		setMessages((prevMessages: any) => [...prevMessages, message]);

	return { messages, addMessage };
};
