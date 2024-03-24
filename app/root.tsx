import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import React from 'react';

export const meta = () => [
	{
		charset: 'utf-8',
		title: 'Portfolio',
	},
	{
		description:
			'Welcome to the portfolio of Nitin Sijwali. Find information about my projects, skills, and experiences. This portfolio has been created using Remix, Reactjs and styled components',
	},
	{ robots: 'index: true, follow: true ' },
	{
		keywords:
			'portfolio, projects, skills, experiences, Nitin Sijwali, React.js, Reactjs, react, javascript, html, css, styled-components, frontend, ui, web, applications, remix, Remix, framework',
	},
];

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

export default function App() {
	return <Outlet />;
}
