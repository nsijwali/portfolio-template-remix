import { useLoaderData, useRouteLoaderData } from '@remix-run/react';
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
			<div className='role-responsibilities w-auto p-16'>
				<div className=''>
					<span className='flex items-center gap-2'>
						<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
						<span className='text-gray-400 text-xs'>Role</span>
					</span>
					{projectState?.description}
				</div>
				<div className=''>
					<span className='flex items-center gap-2'>
						<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
						<span className='text-gray-400 text-xs'>Responsibility</span>
					</span>
					{projectState?.responsibilities?.map((el: string) => (
						<li>{el}</li>
					))}
				</div>
			</div>
		</PageWrapper>
	);
};

export default DetailedView;
