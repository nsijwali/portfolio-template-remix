import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chrome } from './Styles';
import { Experience } from './type';

const Expriences = ({ experience = [] }: any) => {
	return experience?.map(({ company, summary, imageURL }: Experience) => (
		<Chrome key={uuidv4()}>
			<div className='window-main hover:bg-sky-700'>
				<div className='window-content'>
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
