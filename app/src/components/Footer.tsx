import { Link, useLoaderData } from '@remix-run/react';
import { WiDirectionUpRight } from 'react-icons/wi';
import { LazyMotion, domAnimation } from 'framer-motion';
import React, { useEffect, useState, useMemo } from 'react';
import { StyledFooter } from './component.styles';
import { isMobileDevice } from '~/utils/utils';

export const Footer = () => {
	const { data } = useLoaderData() || [];
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(isMobileDevice());
	}, []);

	const emailUrl = useMemo(
		() =>
			isMobile
				? `mailto:${data.email}`
				: `https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}`,
		[isMobile],
	);

	const year = useMemo(() => {
		const d = new Date();
		return d.getFullYear();
	}, []);

	return (
		<LazyMotion features={domAnimation}>
			<StyledFooter
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className='relative divide-y flex justify-center pt-16 pb-6 sm:pb-10 px-2 sm:pl-12 sm:pr-12'
			>
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
									to={data?.linkedInLink || ''}
									className='flex items-center hover:text-yellow-300'
									aria-label='Linkedin'
								>
									Linkedin
									<WiDirectionUpRight size='30' />
								</Link>
								<Link
									className='flex items-center hover:text-yellow-300'
									target='_blank'
									to={data?.gitHubLink || ''}
									aria-label='Git'
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
									rel='noreferrer'
									to={emailUrl}
									aria-label='email'
								>
									Mail
									<WiDirectionUpRight size='30' />
								</Link>
								<Link
									className='flex items-center hover:text-yellow-300'
									reloadDocument={false}
									target='_blank'
									to={data?.resumeLink || ''}
									aria-label='Resume'
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
		</LazyMotion>
	);
};
