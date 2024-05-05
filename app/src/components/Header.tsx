import { Link, useNavigate, useLoaderData } from '@remix-run/react';
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LogoRenderer from './LogoRenderer';
import Pill from './Pill';
import { StyledHeader } from './component.styles';
import MobileNav from './MobileNav';
import { isMobileDevice } from '~/utils/utils';

const Header = () => {
	const navigate = useNavigate();
	const { data } = useLoaderData() || [];
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(isMobileDevice());
	}, [isMobileDevice]);

	const handleRoute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		navigate('/');
		e.preventDefault();
	};

	return (
		<StyledHeader className='flex w-full justify-between p-4 sm:pt-6 sm:pl-12 sm:pr-12 fixed top-0 left-0 right-0 z-10  items-center'>
			<div className='flex gap-1 items-center' onClick={handleRoute}>
				<LogoRenderer />
				<div className='hidden sm:flex flex-col left-28 absolute cursor-pointer'>
					<p className='text-xl font-medium'>{data.name || ''}</p>
					<span className='text-xs text-gray-400'>{data?.designation}</span>
				</div>
			</div>
			<Pill />
			<span className='flex gap-1'>
				{!isMobile ? (
					<>
						<Link
							target='_blank'
							className='hover:text-yellow-300 backdrop-blur'
							to={data.gitHubLink}
							aria-label='Git'
						>
							<FaGithub size='28' />
						</Link>
						<Link
							target='_blank'
							className='hover:text-yellow-300 backdrop-blur'
							to={data.linkedInLink}
							aria-label='linkedin'
						>
							<FaLinkedin size='28' />
						</Link>
					</>
				) : (
					<MobileNav />
				)}
			</span>
		</StyledHeader>
	);
};

export default Header;
