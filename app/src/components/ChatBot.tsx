// 'use client';
import { useChat } from 'ai/react';
import React, { useRef, useEffect, useState } from 'react';
import { RiRobot2Line } from 'react-icons/ri';
import { IoIosClose } from 'react-icons/io';
import { BotWrapper } from './component.styles';
import { FiSend } from 'react-icons/fi';

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
					className='bot-icon rounded-full p-1 sm:p-0 cursor-pointer'
				/>
			) : (
				<main className='flex flex-col w-80 sm:w-96 h-80 sm:h-96 rounded-xl'>
					<header className='p-4 w-full max-w-3xl mx-auto flex justify-between'>
						<span className='flex gap-2 items-center'>
							<RiRobot2Line size={28} className='' />
							<label className='text-sm font-black'>NitinAI</label>
						</span>
						<IoIosClose
							onClick={toggleChat}
							size={28}
							className='cursor-pointer'
						/>
					</header>
					<div className='w-full border-t border-gray-700' />
					<section className='container px-0 pb-4 flex flex-col flex-grow gap-4 mx-auto max-w-3xl'>
						<ul
							ref={chatParent}
							className='h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4'
						>
							{messages.map((m, index) => (
								<div key={index}>
									{m.role === 'user' ? (
										<li key={m.id} className='flex flex-row'>
											<div className='rounded-xl px-4 py-2 message-bg bg-background shadow-md flex'>
												<p className='text-sm sm:text-base'>{m.content}</p>
											</div>
										</li>
									) : (
										<li key={m.id} className='flex flex-row-reverse'>
											<div className='rounded-xl px-4 py-2 message-bg bg-background shadow-md flex w-3/4'>
												<p className='text-sm sm:text-base'>{m.content}</p>
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
								className='flex-1 h-10 px-4 bg-black border-gray-300 shadow-sm focus:outline-none border rounded-3xl'
								placeholder='ask me about nitin'
								type='text'
								value={input}
								onChange={handleInputChange}
							/>

							<button className='ml-2' type='submit'>
								<FiSend size={28} />
							</button>
						</form>
					</section>
				</main>
			)}
		</BotWrapper>
	);
}
