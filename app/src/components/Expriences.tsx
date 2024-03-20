import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chrome } from './Styles';
import imgLowes from '../assets/project_lowes.png';
import { Experience } from './type';

const Expriences = ({ experience = [] }: any) => {
	return experience?.map(({ company, summary }: Experience) => (
		<Chrome key={uuidv4()}>
			<div className='window-main'>
				<div className='window-content'>
					<div>{summary}</div>
					<span>{company}</span>
					<img
						src={imgLowes}
						className='project-thumbnail'
						alt='project_lowes'
					></img>
				</div>
			</div>
		</Chrome>
	));
};

export default Expriences;
