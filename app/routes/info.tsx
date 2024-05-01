import { useRouteLoaderData } from '@remix-run/react';
import React from 'react';
import About from '~/src/components/About';
import Experiences from '~/src/components/Experiences';
import Recommendation from '~/src/components/Recommendation';
import Skills from '~/src/components/Skills';

const Info = () => {
	const { data } = useRouteLoaderData('root');
	return (
		<>
			<About summary={data.summary} />
			<Experiences experience={data?.experience} resumeLink={data.resumeLink} />
			<Skills skills={data.skills} />
			<Recommendation
				recommendations={data.recommendations}
				url={data.recommendationUrl}
			/>
		</>
	);
};

export default Info;
