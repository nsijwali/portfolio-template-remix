import { useLoaderData } from '@remix-run/react';
import React from 'react';

const Header = () => {
	const { data } = useLoaderData() || [];
	return (
		<>
			<h4>{data?.name}</h4>
			<span>{data?.designation}</span>
		</>
	);
};

export default Header;
