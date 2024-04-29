import React from 'react';
import imgURL from '/images/fly3.gif';
const Cursor = ({ x, y }: any) => {
	return (
		<>
			<img
				className='fly fixed top-0 left-0'
				src={imgURL}
				style={{ zIndex: 15, transform: 'scaleX(-1)' }}
				width={100}
				height={100}
			/>
			<img
				className='fly fixed top-0 left-0'
				src={imgURL}
				style={{ zIndex: 15, transform: 'scaleX(-1)' }}
				width={100}
				height={100}
			/>
			<img
				className='fly fixed top-0 left-0'
				src={imgURL}
				style={{ zIndex: 15, transform: 'scaleX(-1)' }}
				width={100}
				height={100}
			/>
		</>
	);
};

export default Cursor;
