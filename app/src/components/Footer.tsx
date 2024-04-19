import { Link, useLoaderData } from '@remix-run/react';
import { WiDirectionUpRight } from 'react-icons/wi';
import React, { useMemo } from 'react';
import pdfUrl from '~/db/nitin_sijwali_resume.pdf';
import { StyledFooter } from './Styles';

export const Footer = () => {
	const { data } = useLoaderData() || [];
	const year = useMemo(() => {
		const d = new Date();
		return d.getFullYear();
	}, []);

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
							<Link
								target='_blank'
								to={data.linkedInLink}
								className='flex items-center hover:text-yellow-300'
							>
								Linkedin
								<WiDirectionUpRight size='30' />
							</Link>
							<Link
								className='flex items-center hover:text-yellow-300'
								target='_blank'
								to={data.gitHubLink}
							>
								Git
								<WiDirectionUpRight size='30' />
							</Link>
						</div>
						<div className='flex flex-col text-sm'>
							<Link
								className='flex items-center hover:text-yellow-300'
								reloadDocument={false}
								target='_blank'
								to={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}`}
							>
								Mail
								<WiDirectionUpRight size='30' />
							</Link>
							<Link
								className='flex items-center hover:text-yellow-300'
								reloadDocument={false}
								target='_blank'
								to={pdfUrl}
							>
								Resume
								<WiDirectionUpRight size='30' />
							</Link>
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
