import { Link, useNavigate, useLoaderData } from '@remix-run/react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LogoRenderer from './LogoRenderer';
import Pill from './Pill';
import { StyledHeader } from './Styles';

const Header = () => {
	const navigate = useNavigate();
	const { data } = useLoaderData() || [];

	const handleRoute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		navigate('/');
		e.preventDefault();
	};

	return (
		<StyledHeader className='flex w-full justify-between p-4 sm:pt-6 sm:pl-12 sm:pr-12 fixed top-0 left-0 right-0 z-10  items-center'>
			<div className='flex gap-1 items-center' onClick={handleRoute}>
				<LogoRenderer />
				<div className='hidden sm:flex flex-col left-28 absolute'>
					<p className='text-xl font-medium animate animate-fade-in-out'>
						{data.name || ''}
					</p>
					<span className='text-xs text-gray-400'>{data?.designation}</span>
				</div>
			</div>
			<Pill />
			<span className='flex gap-1'>
				<Link target='_blank' to={data.gitHubLink}>
					<FaGithub size='28' />
				</Link>
				<Link target='_blank' to={data.linkedInLink}>
					<FaLinkedin size='28' />
				</Link>
			</span>
		</StyledHeader>
	);
};

export default Header;
