import { useLoaderData } from '@remix-run/react';
import React from 'react';

const Header = () => {
	const { data } = useLoaderData() || [];
	return (
		<>
			<p className='font-bold'>{data?.name}</p>
			<span>{data?.designation}</span>
		</>
	);
};

export default Header;
