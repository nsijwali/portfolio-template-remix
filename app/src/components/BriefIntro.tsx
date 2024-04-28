import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typewriter from 'typewriter-effect';
import { Chrome, Dot } from './component.styles';

const BriefIntro = ({
	tagline = '',
	role = '',
	currentOrg = '',
	area = '',
}) => {
	return (
		<Chrome
			key={uuidv4()}
			className='w-full sm:w-8/12 max-w-screen-2xl relative overflow-hidden rounded-3xl p-1 sm:p-2 xs:p-2 sm:h-96 xs:h-96 h-72'
		>
			<div className='window-main sm:rounded-2xl rounded-3xl overflow-hidden h-full rounded-small'>
				<div className='window-bar sm:h-10 justify-between items-center pl-5 pr-3 rounded-t-2xl'>
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
				<div className='window-content px-4 py-8 sm:px-16 sm:py-24 sm:h-80 xs:h-80 h-64'>
					<Typewriter
						options={{
							strings: [role, tagline],
							autoStart: true,
							loop: true,
							wrapperClassName: 'font-extrabold text-xl sm:text-3xl',
						}}
					/>
					<label className='text-right bottom-16 right-16 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text animate-pulse'>
						{role} at {currentOrg}. Based in {area}.
					</label>
				</div>
			</div>
			{/* </div> */}
		</Chrome>
	);
};

export default BriefIntro;
