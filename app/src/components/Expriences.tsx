import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chrome } from './Styles';
import { Experience } from './type';

const Expriences = ({ experience = [] }: any) => {
	return experience?.map(({ company, summary, imageURL }: Experience) => (
		<Chrome
			key={uuidv4()}
			className='w-full sm:w-8/12 max-w-screen-2xl relative overflow-hidden rounded-3xl p-1 sm:p-2 xs:p-2 sm:h-96 xs:h-96 h-72'
		>
			<div className='window-main hover:bg-sky-700 sm:rounded-2xl rounded-3xl overflow-hidden h-full rounded-small'>
				<div className='window-content h-full px-4 py-8 sm:px-16 sm:py-24 sm:h-96 xs:h-96 h-72'>
					<span className='absolute top-4 left-4 sm:text-xl text-base font-medium'>
						{company}
					</span>
					<p className='text-gray-500 font-medium'>{summary}</p>

					<img
						src={imageURL}
						className='project-thumbnail'
						alt='project_lowes'
					/>
				</div>
			</div>
		</Chrome>
	));
};

export default Expriences;
