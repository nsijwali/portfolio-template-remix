import { Link, useLocation } from '@remix-run/react';
import React, { useMemo } from 'react';

const Pill = () => {
	const location = useLocation();
	const selectedMargin = useMemo(
		() => (location.pathname === '/info' ? 'right-9' : 'left-8'),
		[location.pathname],
	);
	return (
		<div className='nav-pill-wrapper flex w-44 h-12 flex-col'>
			<div className='nav-pill flex px-2 items-center h-12 w-44 rounded-3xl justify-between relative'>
				<div
					className={
						selectedMargin +
						' nav-indicator-glow bg-white absolute rounded-sm w-6 h-1'
					}
				/>
				<Link
					className={
						'nav-option flex justify-center items-center rounded-2xl w-20 h-9 text-center ' +
						(location.pathname === '/' ? 'active-tab' : '')
					}
					aria-label='home'
					to={'/'}
				>
					Home
				</Link>
				<Link
					className={
						(location.pathname === '/info' ? 'active-tab ' : '') +
						'nav-option flex justify-center items-center rounded-2xl w-20 h-9 text-center'
					}
					aria-label='info'
					to={'/info'}
				>
					Info
				</Link>
			</div>
		</div>
	);
};

export default Pill;
