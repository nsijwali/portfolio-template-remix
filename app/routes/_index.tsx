import React from 'react';
import Header from '../src/components/Header';
// import { Outlet } from '@remix-run/react';
import { Box } from '../src/components/Styles';
import WorkPanel from '../src/screens/WorkPanel';

export const loader = async () => {
	const isProduction = process?.env?.NODE_ENV === 'production';

	console.log('env-->', process?.env?.NODE_ENV);
	// Set the base URL based on the environment
	const baseURL = isProduction
		? 'https://portforlio-three.vercel.app'
		: 'http://localhost:3000';

	// Construct the URL for the Express API endpoint
	const apiUrl = `${baseURL}/api/getUserDetails`;

	// Fetch data from the Express API endpoint
	const response = await fetch(apiUrl);

	// Handle response based on status
	if (!response.ok) {
		throw new Error('Failed to fetch data from the API');
	}
	const userData = await response.json();
	console.log('data-->', userData);
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
		</>
	);
};

export default Index;
