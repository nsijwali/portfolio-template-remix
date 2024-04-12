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
			<Box>
				<Header />
				<WorkPanel />
			</Box>
		</>
	);
};

export default Index;
