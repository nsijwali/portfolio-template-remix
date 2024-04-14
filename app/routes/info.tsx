import { useRouteLoaderData } from '@remix-run/react';
import React from 'react';

const Info = () => {
	const { data } = useRouteLoaderData('root');
	return <div>{data?.name || 'info'}</div>;
};

export default Info;
