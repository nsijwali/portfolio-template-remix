import React from 'react';
import WorkPanel from '../src/screens/WorkPanel';

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
				<WorkPanel />
			</div>
		</>
	);
};

export default Index;
