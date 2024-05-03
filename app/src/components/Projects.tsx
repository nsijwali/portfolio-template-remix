import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsArrowDown } from 'react-icons/bs';
import { Chrome, Dot } from './component.styles';
import { isMobileDevice } from '~/utils/utils';

const Projects = ({ project }: any) => {
	const {} = project;
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(isMobileDevice());
	}, [isMobileDevice]);
	// const size = useMemo(() => (isMobile ? '28' : '40'), [isMobile]);

	return project?.map(
		({ pName, imageUrl, description, responsibilities }: any) => (
			<Chrome
				key={uuidv4()}
				className='w-full sm:w-8/12 max-w-screen-2xl relative overflow-hidden rounded-3xl p-1 sm:p-2 xs:p-2 sm:h-96 xs:h-96 h-72 '
			>
				<div className='window-main project p-6 rounded-2xl overflow-hidden h-full relative flex flex-col gap-3 cursor-pointer'>
					<div className='font-semibold text-base sm:text-xl'>{pName}</div>
					<div className='text-sm text-gray-400 font-extralight'>
						{description}
					</div>
					<div className='flex justify-center w-full '>
						<img
							className='hover-project-img sm:h-80 h-40 relative rounded-t-2xl w-full sm:w-11/12'
							src={imageUrl}
							alt={pName}
							width='100%'
							height='auto'
						/>
					</div>
				</div>
			</Chrome>
		),
	);
};

export default Projects;
