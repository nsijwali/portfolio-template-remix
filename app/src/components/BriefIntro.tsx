import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typewriter from 'typewriter-effect';
import { Chrome, Dot } from './Styles';

const BriefIntro = ({
	tagline = '',
	role = '',
	currentOrg = '',
	area = '',
}) => {
	return (
		<Chrome key={uuidv4()} className='w-full sm:w-10/12 max-w-screen-2xl'>
			<div className='window-main'>
				<div className='window-bar'>
					<div className='window-dots-wrapper'>
						{['#f46b5d', '#f9bd4e', '#57c353'].map((clr) => (
							<Dot key={clr} $color={clr} />
						))}
					</div>
					<img
						src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/64647bd0f92c6bb858b22871_icon-plus.svg'
						loading='lazy'
						alt=''
						className='icon-windowbar-plus'
					/>
				</div>
				<div className='window-content'>
					<Typewriter
						options={{
							strings: [role, tagline],
							autoStart: true,
							loop: true,
							wrapperClassName: 'tagline',
						}}
					/>
					<label className='sub-info'>
						{role} at {currentOrg}. Based in {area}.
					</label>
				</div>
			</div>
		</Chrome>
	);
};

export default BriefIntro;
