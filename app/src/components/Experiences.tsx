import { Link } from '@remix-run/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CommonWrapper } from './component.styles';
import { Experience } from './type';

const Experiences = ({ experience = [], resumeLink }: any) => {
	return (
		<CommonWrapper
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className='w-full sm:w-8/12 max-w-screen-2xl relative p-1 sm:p-2 xs:p-2 h-70 sm:h-60'
		>
			<span className='flex items-center gap-2'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
				<span className='text-gray-400 text-xs'>EXPERIENCE</span>
			</span>
			{experience?.map(({ company, skillsUsed, duration }: Experience) => (
				<div className='w-full flex gap-1 items-baseline' key={uuidv4()}>
					<div className='sm:w-1/3 w-1/2 flex items-baseline flex-col'>
						<span className='sm:text-lg text-sm font-black'>{company}</span>
						<span className='text-gray-400 sm:text-sm text-xs font-extralight'>
							{duration}
						</span>
					</div>
					<Link
						reloadDocument={false}
						target='_blank'
						className='pt-2 sm:w-2/3 w-1/2 sm:text-base text-sm break-words hover:text-gray-400 font-extralight'
						title='resume?'
						aria-label='resume'
						to={resumeLink || ''}
					>
						{(skillsUsed || []).join(', ')}
					</Link>
				</div>
			))}
		</CommonWrapper>
	);
};

export default Experiences;
