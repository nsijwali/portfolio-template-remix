import React from 'react';
import Header from '../src/components/Header';
import WorkPanel from '../src/screens/WorkPanel';
import userInfo from '~/db/user.json';

export const loader = async () => {
	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
		data: userInfo,
	};
};

const Index = () => {
	return (
		<>
			<div
				className='font-sans px-2 pt-32 sm:pt-40 relative flex min-h-screen flex-col justify-center items-center gap-8 overflow-hidden font-mono'
				style={{
					backgroundImage:
						'radial-gradient(circle closest-corner at 50% 0, rgba(242, 242, 242, .15), rgba(0, 0, 0, 0)',
				}}
			>
				<Header />
				<WorkPanel />
			</div>
		</>
	);
};

export default Index;
