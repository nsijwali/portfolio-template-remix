import React, { useState, useMemo } from 'react';
import { Link, useLoaderData } from '@remix-run/react';
import { TiSocialAtCircular } from 'react-icons/ti';
import { IoCloseOutline } from 'react-icons/io5';
import { WiDirectionUpRight } from 'react-icons/wi';

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isRotated, setIsRotated] = useState(false);
	const { data } = useLoaderData() || [];

	const handleClick = () => {
		setIsRotated(!isRotated);
		setTimeout(() => {
			setIsOpen(!isOpen);
		}, 150);
	};
	const icon = useMemo(
		() =>
			!isOpen ? (
				<TiSocialAtCircular
					className={`transform transition-transform ${
						isRotated ? '-rotate-180' : 'rotate-0'
					} cursor-pointer`}
					onClick={handleClick}
					size='36'
				/>
			) : (
				<IoCloseOutline
					className={`transform transition-transform ${
						!isRotated ? 'rotate-180' : 'rotate-0'
					} cursor-pointer`}
					onClick={handleClick}
					size='36'
				/>
			),

		[isOpen, isRotated],
	);

	return (
		<div className='relative mobile-nav w-12 h-12 rounded-full flex justify-center items-center '>
			{icon}
			{isOpen && (
				<div className='absolute z-10  p-4 rounded-2xl top-full right-2 mt-2 flex flex-col items-start w-40 p-2 overflow-hidden popover-body'>
					<Link
						target='_blank'
						to={data?.linkedInLink || ''}
						className='flex items-center hover:text-yellow-300 justify-between w-full'
						aria-label='linkedin'
					>
						Linkedin
						<WiDirectionUpRight size='30' />
					</Link>
					<Link
						className='flex items-center hover:text-yellow-300 justify-between w-full'
						target='_blank'
						to={data?.gitHubLink || ''}
						aria-label='Git'
					>
						Git
						<WiDirectionUpRight size='30' />
					</Link>
				</div>
			)}
		</div>
	);
};

export default MobileNav;
