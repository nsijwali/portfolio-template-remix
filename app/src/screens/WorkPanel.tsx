import React from 'react';
import { useRouteLoaderData } from '@remix-run/react';
import BriefIntro from '../components/BriefIntro';
import Expriences from '../components/Expriences';

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
			<Expriences experience={data?.experience} />
		</>
	);
};

export default WorkPanel;
