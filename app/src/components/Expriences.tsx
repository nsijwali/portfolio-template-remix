import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CommonWrapper } from './Styles';
import { Experience } from './type';

const Expriences = ({ experience = [] }: any) => {
	return (
		<CommonWrapper className='w-full max-w-screen-2xl relative'>
			<span className='flex items-center gap-2'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
				<span className='text-gray-400 text-xs'>EXPERIENCE</span>
			</span>
			{experience?.map(({ company, summary, duration }: Experience) => (
				<div className='w-full flex gap-1 items-baseline' key={uuidv4()}>
					<div className='sm:w-1/3 w-1/2 flex gap-3 items-baseline'>
						<span className='w-1/2 text-gray-400 sm:text-sm text-xs'>
							{duration}
						</span>
						<span className='sm:text-lg text-sm sm:font-medium'>{company}</span>
					</div>
					<span className='pt-2 sm:w-2/3 w-1/2 sm:font-medium text-sm'>
						{summary}
					</span>
				</div>
			))}
		</CommonWrapper>
	);
};

export default Expriences;
