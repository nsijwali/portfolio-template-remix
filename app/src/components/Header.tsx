import { useLoaderData } from '@remix-run/react';
import React from 'react';
import { StyledHeader } from './Styles';

const Header = () => {
	const { data } = useLoaderData() || [];
	return (
		<StyledHeader className='flex w-full justify-between p-4 sm:pt-6 sm:pl-12 sm:pr-12 fixed top-0 left-0 right-0 z-10'>
			<span>
				<p className='text-xl font-medium'>{data?.name}</p>
				<span className='text-xs text-gray-400'>{data?.designation}</span>
			</span>
			<span>
				<span>LinkedIn</span>
				<span>Git</span>
			</span>
		</StyledHeader>
	);
};

export default Header;
