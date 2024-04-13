import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chrome } from './Styles';
import { Experience } from './type';

const Expriences = ({ experience = [] }: any) => {
	return experience?.map(({ company, summary, imageURL }: Experience) => (
		<Chrome
			key={uuidv4()}
			className='w-full sm:w-10/12 max-w-screen-2xl relative overflow-hidden rounded-3xl shadow-lg p-2 h-96'
		>
			<div className='window-main hover:bg-sky-700 rounded-2xl overflow-hidden h-full'>
				<div className='window-content h-full'>
					<p className='text-gray-500 font-medium'>{summary}</p>
					<span>{company}</span>
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
