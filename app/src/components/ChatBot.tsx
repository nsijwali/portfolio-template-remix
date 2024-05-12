// 'use client';
import { useChat } from 'ai/react';
import React, { useRef, useEffect, useState } from 'react';
import { RiRobot2Line } from 'react-icons/ri';
import { IoIosClose } from 'react-icons/io';
import { BotWrapper } from './component.styles';

export function ChatBot() {
	const [showChat, setShowChat] = useState(false);

	const toggleChat = () => {
		setShowChat((prevState: boolean) => !prevState);
	};

	const { messages, input, handleInputChange, handleSubmit } = useChat({
		api: '/api/chat',
		onError: (e) => {
			console.log(e);
		},
	});
	const chatParent = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const domNode = chatParent.current;
		if (domNode) {
			domNode.scrollTop = domNode.scrollHeight;
		}
	});

	return (
		<BotWrapper>
			{!showChat ? (
				<RiRobot2Line
					size={42}
					onClick={toggleChat}
					className='bot-icon rounded-full p-1 sm:p-0'
				/>
			) : (
				<main className='flex flex-col w-80 sm:w-96 rounded-xl'>
					<header className='p-4 border-b w-full max-w-3xl mx-auto flex justify-between'>
						<h3 className='text-2xl font-bold'>Nitin Sijwali</h3>
						<IoIosClose onClick={toggleChat} size={28} />
					</header>
					<section className='container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl'>
						<ul
							ref={chatParent}
							className='h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4'
						>
							{messages.map((m, index) => (
								<div key={index}>
									{m.role === 'user' ? (
										<li key={m.id} className='flex flex-row'>
											<div className='rounded-xl p-4 bg-background shadow-md flex'>
												<p className='text-primary'>{m.content}</p>
											</div>
										</li>
									) : (
										<li key={m.id} className='flex flex-row-reverse'>
											<div className='rounded-xl p-4 bg-background shadow-md flex w-3/4'>
												<p className='text-primary'>{m.content}</p>
											</div>
										</li>
									)}
								</div>
							))}
						</ul>
					</section>
					<section className='p-4'>
						<form
							onSubmit={handleSubmit}
							className='flex w-full max-w-3xl mx-auto items-center'
						>
							<input
								className='flex-1 min-h-[40px]'
								placeholder='Type your question here...'
								type='text'
								value={input}
								onChange={handleInputChange}
							/>
							<button className='ml-2' type='submit'>
								Submit
							</button>
						</form>
					</section>
				</main>
			)}
		</BotWrapper>
	);
}
