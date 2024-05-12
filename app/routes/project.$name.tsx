import { Link, useLoaderData, useRouteLoaderData } from '@remix-run/react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';
import React, { useMemo } from 'react';
import { PageWrapper } from '~/src/components/component.styles';
import { Project } from '~/src/components/type';

export const loader = async ({ params }: any) => {
	// Fetch user data based on the username
	const name = params.name;
	console.log(name);
	return { name };
};

const DetailedView = () => {
	const { name } = useLoaderData() || [];
	const { data } = useRouteLoaderData('root');

	const projectState = useMemo(() => {
		return data?.project?.filter((ele: Project) => ele.id === name)[0];
	}, [data]);

	return (
		<>
			<Link
				className='fixed z-10 left-5 top-5 sm:left-10 sm:top-10 flex items-center w-24 justify-between border border-transparent hover:border-gray-300 transition-colors duration-300 py-2 px-4 back-button rounded-full backdrop-blur transition-all duration-700 delay-150 hover:pl-1'
				to='/'
				aria-label='home'
			>
				<IoIosArrowRoundBack size='28' /> <span>Back</span>
			</Link>
			<PageWrapper
				className='w-full sm:w-8/12 max-w-screen-2xl relative p-1 sm:p-2 xs:p-2'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
			>
				<div className='flex flex-col gap-2 text-center'>
					<div className='project-title text-5xl sm:text-6xl bg-clip-text sm:font-bold font-semibold'>
						{projectState?.pName}
					</div>
					<div className='text-opacity-50 sm:text-lg text-base text-gray-400'>
						{projectState?.duration}
					</div>
				</div>
				<div className='role-responsibilities w-auto py-16'>
					<div className=''>
						<span className='flex items-center gap-2 pb-4'>
							<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
							<span className='text-xs font-semibold'>Role</span>
						</span>
						<div className='text-gray-400 '>{projectState?.role}</div>
					</div>
					<div className=''>
						<span className='flex items-center gap-2 pb-4'>
							<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
							<span className='text-xs font-semibold'>Overview</span>
						</span>
						<span className='flex flex-col gap-4 text-gray-400 '>
							{projectState?.overview?.split('.')?.map((el: string) => (
								<div key={uuidv4()}>{el}.</div>
							))}
						</span>
					</div>
				</div>
				<div className='w-full border-t border-gray-700 mb-4' />
				<div className='py-16'>
					<span className='flex items-center gap-2 pb-4'>
						<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
						<span className='text-xs font-semibold'>Responsibilities</span>
					</span>
					<span className='flex flex-col gap-4 text-gray-400'>
						{projectState?.responsibilities?.map((el: string) => (
							<li className='list-decimal' key={uuidv4()}>
								{el}
							</li>
						))}
					</span>
				</div>
			</PageWrapper>
		</>
	);
};

export default DetailedView;
