import React from 'react';
import { CommonWrapper } from './Styles';

const About = ({ summary }: { summary: string }) => {
	return (
		<CommonWrapper className='w-full sm:w-8/12 max-w-screen-2xl relative p-1 sm:p-2 xs:p-2 h-60'>
			<span className='flex items-center gap-2'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
				<span className='text-gray-400 text-xs'>ABOUT ME</span>
			</span>
			<div className='pt-2 text-2xl sm:text-3xl xs:text-3xl'>{summary}</div>
		</CommonWrapper>
	);
};

export default About;
