import type { LinksFunction } from '@remix-run/node';
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteError,
} from '@remix-run/react';
import { gsap } from 'gsap';
import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import stylesheet from '~/tailwind.css?url';
import userInfo from '~/db/user.json';
import Header from './src/components/Header';
import { Footer } from './src/components/Footer';
import Cursor from './src/components/Cursor';
import { isMobileDevice } from './utils/utils';

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
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href: '/favicon.ico',
	},
];

export default function App() {
	return <Outlet />;
}

export const loader = async () => {
	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
		data: userInfo,
	};
};

export function Layout({ children }: { children: React.ReactNode }) {
	const [state, setState] = useState({ x: 0, y: 0 });
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		setIsMobile(isMobileDevice());
	}, []);

	useEffect(() => {
		if (!isMobile) {
			document.addEventListener('mousemove', scrollAnimator);
		}
		return () => {
			document.removeEventListener('mousemove', scrollAnimator);
		};
	}, [isMobile]);

	const scrollAnimator = (event: MouseEvent) => {
		const fly = document.querySelectorAll('.fly');
		gsap.set(fly, { xPercent: -150, yPercent: -50 });
		const targets = gsap.utils.toArray(fly);
		gsap.to(targets, {
			duration: 1,
			x: event.clientX - 10,
			y: event.clientY + 10,
			ease: 'back.inOut',
			overwrite: 'auto',
			stagger: 0.02,
		});
		setState({ x: event.x - 20, y: event.y });
	};
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<meta
					name='google-site-verification'
					content='5iLsrNe4TgPQyAf_aeCM54KbmvB5oJJ0Xz500yb-5p8'
				/>
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
				<Cursor x={state.x} y={state.y} isMobile={isMobile} />
				<Header />
				<div
					className='font-sans px-2 pt-32 sm:pt-40 sm:pb-40 relative flex min-h-screen flex-col justify-center items-center gap-8 overflow-hidden font-mono'
					style={{
						backgroundImage:
							'radial-gradient(circle closest-corner at 50% 0, rgba(242, 242, 242, .15), rgba(0, 0, 0, 0)',
					}}
				>
					{children}
					<Analytics />
				</div>
				<Footer />
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
