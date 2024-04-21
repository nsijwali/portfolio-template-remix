import React from 'react';
import { CommonWrapper } from './Styles';

const Skills = ({ skills }: { skills: Array<string> }) => {
	return (
		<CommonWrapper className='w-full max-w-screen-2xl relative'>
			<span className='flex items-center gap-2'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
				<span className='text-gray-400 text-xs'>SKILLS</span>
			</span>
			<span className='pt-2 sm:font-medium text-sm'>{skills.join(', ')}</span>
		</CommonWrapper>
	);
};

export default Skills;
