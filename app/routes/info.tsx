import { useRouteLoaderData } from '@remix-run/react';
import React from 'react';
import About from '~/src/components/About';
import Experiences from '~/src/components/Experiences';
import Skills from '~/src/components/Skills';

const Info = () => {
	const { data } = useRouteLoaderData('root');
	return (
		<>
			<About summary={data.summary} />
			<Experiences experience={data?.experience} resumeLink={data.resumeLink} />
			<Skills skills={data.skills} resumeLink={data.resumeLink} />
		</>
	);
};

export default Info;
