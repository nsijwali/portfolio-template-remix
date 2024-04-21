import React from 'react';
import { CommonWrapper } from './Styles';

const About = ({ summary }: { summary: string }) => {
	return (
		<CommonWrapper>
			<span className='flex items-center gap-2'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
				<span className='text-gray-400 text-xs'>ABOUT ME</span>
			</span>
			<div className='pt-2 text-2xl sm:text-3xl xs:text-3xl'>{summary}</div>
		</CommonWrapper>
	);
};

export default About;
