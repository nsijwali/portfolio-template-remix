import React from 'react';
import Header from '../src/components/Header';
// import { Outlet } from '@remix-run/react';
import { Box } from '../src/components/Styles';
import WorkPanel from '../src/screens/WorkPanel';

export const loader = async () => {
	try {
		const response = await fetch(`/api/getUserDetails`);

		const userData = await response.json();
		return {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			data: userData,
		};
	} catch (e) {
		return {
			status: 400,
			headers: {
				'Content-Type': 'application/json',
			},
			data: [],
		};
	}
};

const Index = () => {
	return (
		<>
			{/* <Outlet /> */}
			<Box>
				<Header />
				<WorkPanel />
			</Box>
		</>
	);
};

export default Index;
