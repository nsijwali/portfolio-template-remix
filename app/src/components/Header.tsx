import { Link, useLoaderData } from '@remix-run/react';
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LogoRenderer from './LogoRenderer';
import { StyledHeader } from './Styles';

const Header = () => {
	const { data } = useLoaderData() || [];
	const [currentString, setCurrentString] = useState(data.name);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentString(
				currentString === data.name ? data.nativeName : data.name,
			);
		}, 5000); // Change string every 5000 seconds (5000 milliseconds)

		return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
	}, [currentString]);

	return (
		<StyledHeader className='flex w-full justify-between p-4 sm:pt-6 sm:pl-12 sm:pr-12 fixed top-0 left-0 right-0 z-10  items-center'>
			<div className='flex gap-1 items-center'>
				<LogoRenderer />
				<div className='hidden sm:flex flex-col'>
					<p className='text-xl font-medium animate animate-fade-in-out'>
						{currentString || ''}
					</p>
					<span className='text-xs text-gray-400'>{data?.designation}</span>
				</div>
			</div>
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
