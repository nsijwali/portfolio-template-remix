import React from 'react';
import axios from 'axios';
import Header from '../src/components/Header';
// import { Outlet } from '@remix-run/react';
import { Box } from '../src/components/Styles';
import WorkPanel from '../src/screens/WorkPanel';

export const loader = async () => {
	// Construct the URL for the Express API endpoint
	const apiUrl = 'http://localhost:3000/api/getUserDetails';

	// Fetch data from the Express API endpoint
	const response = await fetch(apiUrl);
	if (response.ok) {
		// Handle response based on status
		// if (!response.ok) {
		// 	throw new Error('Failed to fetch data from the API');
		// }
		// const userData = await response.json();
		return {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			data: response.json(),
		};
	}
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
