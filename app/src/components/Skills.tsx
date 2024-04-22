import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SiRemix } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiJquery } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import { SiWebpack } from 'react-icons/si';
import { CommonWrapper } from './Styles';
import { Link } from '@remix-run/react';
import { isMobileDevice } from '~/utils/utils';

const returnSVG = (fill: string = '#fff', size: string) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 250 250'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M116.213 202.203C124.268 207.701 137.448 211 150.262 211C174.06 211 192 200.737 192 177.646C192 157.854 181.016 148.324 155.754 142.826C142.94 139.528 138.18 135.496 138.18 128.532C138.18 121.568 144.038 116.07 154.656 116.07C166.372 116.07 175.891 120.102 185.41 127.066V104.708C176.257 99.2097 166.372 96.6441 153.924 96.6441C131.59 96.6441 114.383 107.64 114.383 129.998C114.383 149.057 124.268 158.22 146.967 163.352C161.246 167.017 167.836 170.316 167.836 179.112C167.836 187.909 160.514 191.574 149.53 191.574C138.18 191.574 126.098 186.809 115.847 179.112L116.213 202.203ZM111.087 119.735H99.7377V208.801H75.2077V119.735H58V99.2097H75.2077V78.3178C75.2077 51.1949 90.2186 38 113.65 38C122.437 38 129.027 39.8326 135.251 43.4979V65.8559C129.393 61.8242 123.902 59.625 116.213 59.625C105.596 59.625 99.7377 64.7564 99.7377 78.3178V99.2097H126.464C118.41 103.242 112.918 110.572 111.087 119.735Z'
			fill={fill}
			className='fill-current'
		/>
	</svg>
);

const Skills = ({
	skills,
	resumeLink,
}: {
	skills: Array<string>;
	resumeLink: string;
}) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(isMobileDevice());
	}, []);

	const size = useMemo(() => (isMobile ? '28' : '32'), [isMobile]);

	const skillObjectFormatter = (sk: string) => {
		const result = {
			label: sk,
			component: <SiReact size={size} />,
		};
		switch (sk.toLowerCase()) {
			case 'javascript':
				result.component = <SiJavascript size={size} />;
				break;
			case 'typescript':
				result.component = <SiTypescript size={size} />;
				break;
			case 'redux':
				result.component = <SiRedux size={size} />;
				break;
			case 'jquery':
				result.component = <SiJquery size={size} />;
				break;
			case 'angular':
				result.component = <SiAngular size={size} />;
				break;
			case 'fullstory':
				result.component = returnSVG('#fff', size);
				break;
			case 'remix':
				result.component = <SiRemix size={size} />;
				break;
			case 'webpack':
				result.component = <SiWebpack size={size} />;
				break;
			case 'html':
				result.component = <SiHtml5 size={size} />;
				break;
			case 'css':
				result.component = <SiCss3 size={size} />;
				break;
			default:
				break;
		}
		return result;
	};
	return (
		<CommonWrapper className='w-full max-w-screen-2xl relative'>
			<span className='flex items-center gap-2'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
				<span className='text-gray-400 text-xs'>SKILLS</span>
			</span>
			<Link
				reloadDocument={false}
				target='_blank'
				className='hover-svg flex pt-2 sm:font-medium gap-4 text-sm flex-wrap hover:text-gray-400 '
				title='resume?'
				to={resumeLink || ''}
			>
				{skills.map((name) => (
					<div className='flex flex-col gap-1 items-center' key={uuidv4()}>
						<>{skillObjectFormatter(name).component}</>
						<span className='text-sm sm:text-base '>
							{skillObjectFormatter(name).label}
						</span>
					</div>
				))}
			</Link>
		</CommonWrapper>
	);
};

export default Skills;
