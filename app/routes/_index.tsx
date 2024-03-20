import React from 'react';
import Header from '../src/components/Header';
import { Outlet } from '@remix-run/react';
import { Box } from '../src/components/Styles';
import WorkPanel from '../src/screens/WorkPanel';

export const loader = async () => {
	const response = await fetch(`http://localhost:3000/api/getUserDetails`);

	const userData = await response.json();
	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
		data: userData,
	};
};

const Index = () => {
	return (
		<>
			<Box>
				<Header />
				<WorkPanel />
			</Box>
			<Outlet />
		</>
	);
};

export default Index;
