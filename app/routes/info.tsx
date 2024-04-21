import { useRouteLoaderData } from '@remix-run/react';
import React from 'react';
import About from '~/src/components/About';
import Expriences from '~/src/components/Expriences';
import Skills from '~/src/components/Skills';
import { StyledInfo } from '~/src/components/Styles';

const Info = () => {
	const { data } = useRouteLoaderData('root');
	return (
		<StyledInfo className='w-full sm:w-8/12 max-w-screen-2xl relative overflow-hidden rounded-3xl p-1 sm:p-2 xs:p-2 flex flex-col gap-10'>
			<About summary={data.summary} />
			<Expriences experience={data?.experience} />
			<Skills skills={data.skills} resumeLink={data.resumeLink} />
		</StyledInfo>
	);
};

export default Info;
