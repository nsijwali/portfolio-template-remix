import React from 'react';
import { useRouteLoaderData } from '@remix-run/react';
import BriefIntro from '../components/BriefIntro';
import Expriences from '../components/Expriences';
import Skills from '../components/Skills';

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
			<Skills skills={data.skills} />
		</>
	);
};

export default WorkPanel;
