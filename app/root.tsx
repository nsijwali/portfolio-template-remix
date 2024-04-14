import type { LinksFunction } from '@remix-run/node';
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteError,
} from '@remix-run/react';
import React from 'react';
import stylesheet from '~/tailwind.css?url';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
];

export const meta = () => [
	{
		title: 'Portfolio | Nitin Sijwali',
	},
	{
		description:
			'Welcome to the portfolio of Nitin Sijwali. Find information about my projects, skills, and experiences. This portfolio has been created using Remix, Reactjs and styled components',
	},
	{ robots: 'index: true, follow: true' },
	{
		keywords:
			'portfolio, projects, skills, experiences, Nitin Sijwali, React.js, Reactjs, react, javascript, html, css, styled-components, frontend, ui, web, applications, remix, Remix, framework, cool, typescript, instagram, iconify, react-icons',
	},
	{
		rel: 'icon',
		href: '/favicon.ico',
	},
];

export default function App() {
	return <Outlet />;
}

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body
				style={{
					margin: 0,
					color: '#f2f2f2',
					backgroundColor: '#101010',
					minHeight: '100%',
				}}
			>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
export function ErrorBoundary() {
	const error: any = useRouteError();

	if (error.status) {
		return (
			<>
				<h1>
					{error.status} {error.statusText}
				</h1>
				<p>{error.data}</p>
			</>
		);
	}

	return (
		<>
			<h1>Error!</h1>
			<p>{error?.message ?? 'Unknown error'}</p>
		</>
	);
}
