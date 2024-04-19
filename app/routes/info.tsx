import { useRouteLoaderData } from '@remix-run/react';
import React from 'react';

const Info = () => {
	const { data } = useRouteLoaderData('root');
	return (
		<div className='w-full sm:w-8/12 max-w-screen-2xl relative overflow-hidden rounded-3xl p-1 sm:p-2 xs:p-2 sm:h-96 xs:h-96 h-72'>
			<span className='flex items-center gap-1'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white' />
				<span className='text-gray-400 text-xs'>About me</span>
			</span>
			<div>{data?.summary}</div>
		</div>
	);
};

export default Info;
