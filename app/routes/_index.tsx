import React from 'react';
import Header from '../src/components/Header';
import { Box } from '../src/components/Styles';
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
			<Box className='p-8 relative flex min-h-screen flex-col justify-center items-center gap-8 overflow-hidden font-mono'>
				<Header />
				<WorkPanel />
			</Box>
		</>
	);
};

export default Index;
