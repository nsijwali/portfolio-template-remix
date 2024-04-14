import { Link } from '@remix-run/react';
import React from 'react';

const Pill = () => {
	return (
		<div className='nav-pill-wrapper flex w-44 h-14 flex-col'>
			<div className='nav-pill flex px-6 items-center'>
				<Link to={'/'}>Home</Link>
				<Link to={'/info'}>Info</Link>
			</div>
		</div>
	);
};

export default Pill;
