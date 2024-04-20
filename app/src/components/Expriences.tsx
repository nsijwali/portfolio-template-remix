import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CommonWrapper } from './Styles';
import { Experience } from './type';

const Expriences = ({ experience = [] }: any) => {
	return (
		<CommonWrapper className='w-full sm:w-8/12 max-w-screen-2xl relative p-1 sm:p-2 xs:p-2 flex flex-col gap-2'>
			{/* <div className='window-main hover:bg-sky-700 sm:rounded-2xl rounded-3xl overflow-hidden h-full rounded-small'>
					<div className='window-content h-full px-4 py-8 sm:px-16 sm:py-24 sm:h-96 xs:h-96 h-72'>
						<div className='absolute top-4 left-4 flex flex-col'>
							<span className=' sm:text-xl text-base font-medium'>
								{company}{' '}
								<span className='text-gray-400 text-sm'>{duration}</span>
							</span>
							<span className='text-gray-500 text-sm'>{position}</span>
						</div>
						<p className='text-gray-500 font-medium'>{summary}</p>
					</div>
				</div> */}
			<span className='flex items-center gap-2'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
				<span className='text-gray-400 text-xs'>EXPERIENCE</span>
			</span>
			{experience?.map(({ company, summary, duration }: Experience) => (
				<div className='flex gap-1 items-baseline' key={uuidv4()}>
					<div className='sm:w-1/3 w-1/2 flex gap-3 items-baseline'>
						<span className='w-1/2 text-gray-400 sm:text-sm text-xs'>
							{duration}
						</span>
						<span className='sm:text-lg text-sm sm:font-medium'>{company}</span>
					</div>
					<span className='sm:w-2/3 w-1/2 sm:font-medium text-sm'>
						{summary}
					</span>
				</div>
			))}
		</CommonWrapper>
	);
};

export default Expriences;
