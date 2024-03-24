import React from 'react';
import Header from '../src/components/Header';
import { Box } from '../src/components/Styles';
import WorkPanel from '../src/screens/WorkPanel';

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
