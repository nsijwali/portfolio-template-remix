import { Link, useLoaderData, useNavigate } from '@remix-run/react';
import { WiDirectionUpRight } from 'react-icons/wi';
import React, { useMemo } from 'react';
import { StyledFooter } from './Styles';

export const Footer = () => {
	const navigate = useNavigate();
	const { data } = useLoaderData() || [];
	const year = useMemo(() => {
		const d = new Date();
		return d.getFullYear();
	}, []);

	const handleRoute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		navigate('/resume');
		e.preventDefault();
	};
	return (
		<StyledFooter className='relative divide-y flex justify-center pt-16 pb-6 sm:pb-10 px-2 sm:pl-12 sm:pr-12'>
			<div className='flex flex-col gap-4 w-full'>
				<div className='flex justify-between items-center'>
					<img
						src={data?.images[0]}
						className='h-16 w-16 sm:h-24 sm:w-24 object-cover'
						alt='logo-brand'
					/>
					<div className='flex justify-between items-center'>
						<div className='flex flex-col text-sm'>
							<Link target='_blank' to={data.linkedInLink} className='flex'>
								Linkedin
								<WiDirectionUpRight size='30' />
							</Link>
							<Link className='flex' target='_blank' to={data.gitHubLink}>
								Git
								<WiDirectionUpRight size='30' />
							</Link>
						</div>
						<div className='flex flex-col text-sm'>
							<Link
								className='flex'
								reloadDocument={false}
								target='_blank'
								to={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}`}
							>
								Mail
								<WiDirectionUpRight size='30' />
							</Link>
							<div className='flex' onClick={handleRoute}>
								Resume
								<WiDirectionUpRight size='30' />
							</div>
						</div>
					</div>
				</div>
				<div className='flex justify-between items-center'>
					<div className='text-sm font-medium'>
						{`© ${year} ${data.name}. All Rights Reserved.`}
					</div>
				</div>
			</div>
		</StyledFooter>
	);
};
