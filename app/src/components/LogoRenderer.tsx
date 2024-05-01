import { useLoaderData } from '@remix-run/react';
import React, { useState } from 'react';

const LogoRenderer = () => {
	const { data } = useLoaderData() || [];
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleClick = () => {
		const nextIndex = (currentImageIndex + 1) % data.images.length;
		setCurrentImageIndex(nextIndex);
	};
	return (
		<div
			className='cursor-pointer w-fit'
			title='click me'
			onClick={handleClick}
		>
			<img
				src={data.images[currentImageIndex]}
				className='h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover backdrop-blur'
				alt='logo'
			/>
		</div>
	);
};

export default LogoRenderer;
