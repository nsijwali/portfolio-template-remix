import { useRouteLoaderData } from '@remix-run/react';
import React from 'react';
import BriefIntro from '~/src/components/BriefIntro';
import Projects from '~/src/components/Projects';

const Index = () => {
	const { data } = useRouteLoaderData('root');
	return (
		<>
			<BriefIntro
				tagline={data?.tagline}
				role={data?.role}
				area={data?.area}
				currentOrg={data?.currentOrg}
			/>
			<Projects project={data?.project} />
		</>
	);
};

export default Index;
