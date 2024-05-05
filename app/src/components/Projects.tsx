import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsArrowRight } from 'react-icons/bs';
import { Chrome } from './component.styles';
import { isMobileDevice } from '~/utils/utils';
import { useNavigate } from '@remix-run/react';

const Projects = ({ project }: any) => {
	const [isMobile, setIsMobile] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setIsMobile(isMobileDevice());
	}, [isMobileDevice]);
	const size = useMemo(() => (isMobile ? '28' : '40'), [isMobile]);

	const handleRoute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		navigate('/project');
		e.preventDefault();
	};

	return project?.map(({ pName, imageUrl, description }: any) => (
		<Chrome
			key={uuidv4()}
			className='w-full sm:w-8/12 max-w-screen-2xl relative overflow-hidden rounded-3xl p-1 sm:p-2 xs:p-2 sm:h-96 xs:h-96 h-72'
			onClick={handleRoute}
		>
			<div className='window-main project p-6 rounded-2xl overflow-hidden h-full relative flex flex-col gap-3 cursor-pointer'>
				<div className='flex justify-between'>
					<div className='font-semibold text-base sm:text-xl'>{pName}</div>
					<BsArrowRight className='' size={size} />
				</div>
				<div className='sm:text-base text-sm text-gray-400 font-extralight'>
					{description}
				</div>
				<div className='flex justify-center w-full '>
					<img
						className='hover-project-img sm:h-80 h-38 md:h-72 relative rounded-t-2xl w-full sm:w-9/12 md:w-11/12 opacity-80 hover:opacity-100 transition-opacity duration-300
                            hover:scale-110 transform transition-transform duration-300'
						src={imageUrl}
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
