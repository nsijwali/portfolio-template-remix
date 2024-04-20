import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CommonWrapper } from './Styles';

const Skills = ({ skills }: { skills: Array<string> }) => {
	return (
		<CommonWrapper className='w-full sm:w-8/12 max-w-screen-2xl relative p-1 sm:p-2 xs:p-2 flex flex-col gap-2'>
			<span className='flex items-center gap-2'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
				<span className='text-gray-400 text-xs'>SKILLS</span>
			</span>
			<span>
				{skills.join(', ')}
				{/* {skills.map((sk, index) => (
					<label key={sk}>{sk},</label>
				))} */}
			</span>
		</CommonWrapper>
	);
};

export default Skills;
