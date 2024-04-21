import React from 'react';
import { useRouteLoaderData } from '@remix-run/react';
import BriefIntro from '../components/BriefIntro';

const WorkPanel = () => {
	const { data } = useRouteLoaderData('root');
	return (
		<>
			<BriefIntro
				tagline={data?.tagline}
				role={data?.role}
				area={data?.area}
				currentOrg={data?.currentOrg}
			/>
		</>
	);
};

export default WorkPanel;
