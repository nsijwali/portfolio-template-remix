import React from 'react';
import imgURL from '/images/fly3.gif';
const Cursor = ({ x, y, isMobile }: any) => {
	if (isMobile) return <></>;
	return (
		<>
			<img
				className='fly fixed top-0 left-0'
				src={imgURL}
				style={{ zIndex: 15, transform: 'scaleX(-1)' }}
				width={100}
				height={100}
				alt='fly'
			/>
			<img
				className='fly fixed top-0 left-0'
				src={imgURL}
				style={{ zIndex: 15, transform: 'scaleX(-1)' }}
				width={100}
				height={100}
				alt='fly2'
			/>
			<img
				className='fly fixed top-0 left-0'
				src={imgURL}
				style={{ zIndex: 15, transform: 'scaleX(-1)' }}
				width={100}
				height={100}
				alt='fly3'
			/>
		</>
	);
};

export default Cursor;
