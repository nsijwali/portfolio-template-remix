import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsArrowRight } from 'react-icons/bs';
import { Chrome, Dot } from './component.styles';
import { isMobileDevice } from '~/utils/utils';
import { useNavigate } from '@remix-run/react';
import { Project } from './type';

const Projects = ({ project }: { project: Array<Project> }) => {
	const [isMobile, setIsMobile] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setIsMobile(isMobileDevice());
	}, [isMobileDevice]);
	const size = useMemo(() => (isMobile ? '28' : '40'), [isMobile]);

	const handleRoute = (id: string) => {
		navigate(`/project/${id}`);
	};

	return project?.map(({ id, pName, imageUrl, description }: Project) => (
		<Chrome
			key={uuidv4()}
			className='w-full sm:w-8/12 max-w-screen-2xl relative overflow-hidden rounded-3xl p-1 sm:p-2 xs:p-2 h-auto'
			onClick={() => handleRoute(id)}
		>
			<div className='window-main project p-6 rounded-2xl overflow-hidden h-full relative flex flex-col gap-3 cursor-pointer  pb-0'>
				<div className='flex justify-between'>
					<div className='font-semibold text-base sm:text-xl'>{pName}</div>
					<BsArrowRight className='' size={size} />
				</div>
				<div className='sm:text-base text-sm text-gray-400 font-extralight'>
					{description}
				</div>
				<div className='window-main rounded-2xl'>
					<div className='window-bar sm:h-10 justify-between items-center pl-5 pr-3 rounded-t-2xl'>
						<div className='window-dots-wrapper'>
							{['#f46b5d', '#f9bd4e', '#57c353'].map((clr) => (
								<Dot key={clr} $color={clr} />
							))}
						</div>
						<img
							src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/64647bd0f92c6bb858b22871_icon-plus.svg'
							loading='lazy'
							alt='icon-windowbar'
							className='icon-windowbar-plus'
							width='24px'
							height='24px'
						/>
					</div>
					<img
						className='window-content sm:h-80 h-38 md:h-72 
						object-cover relative  w-full opacity-80 hover:opacity-100 transition-opacity duration-300'
						src={imageUrl}
						fetchPriority='high'
						alt={pName}
						width='100%'
						height='auto'
					/>
				</div>
			</div>
		</Chrome>
	));
};

export default Projects;
