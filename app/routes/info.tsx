import { useRouteLoaderData } from '@remix-run/react';
import React from 'react';
import { StyledInfo } from '~/src/components/Styles';

const Info = () => {
	const { data } = useRouteLoaderData('root');
	return (
		<StyledInfo className='w-full sm:w-8/12 max-w-screen-2xl relative overflow-hidden rounded-3xl p-1 sm:p-2 xs:p-2 sm:h-96 xs:h-96 h-72'>
			<span className='flex items-center gap-2'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
				<span className='text-gray-400 text-xs'>ABOUT ME</span>
			</span>
			<div className='pt-4 text-sm sm:text-base xs:text-base'>
				{data?.summary}
			</div>
		</StyledInfo>
	);
};

export default Info;
