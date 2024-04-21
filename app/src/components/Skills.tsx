import React from 'react';
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

const Skills = ({
	skills,
	resumeLink,
}: {
	skills: Array<string>;
	resumeLink: string;
}) => {
	const skillObjectFormatter = (sk: string) => {
		const result = {
			label: sk,
			component: <SiReact size='32' />,
		};
		switch (sk.toLowerCase()) {
			case 'javascript':
				result.component = <SiJavascript size='32' />;
				break;
			case 'typescript':
				result.component = <SiTypescript size='32' />;
				break;
			case 'redux':
				result.component = <SiRedux size='32' />;
				break;
			case 'jquery':
				result.component = <SiJquery size='32' />;
				break;
			case 'angular':
				result.component = <SiAngular size='32' />;
				break;
			case 'fullstory':
				result.component = (
					<img
						src={'/images/fullstory.svg?url'}
						alt='fullstoryLogoSVG'
						width={32}
						height={32}
					/>
				);
				break;
			case 'remix':
				result.component = <SiRemix size='32' />;
				break;
			case 'webpack':
				result.component = <SiWebpack size='32' />;
				break;
			case 'html':
				result.component = <SiHtml5 size='32' />;
				break;
			case 'css':
				result.component = <SiCss3 size='32' />;
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
				className='flex pt-2 sm:font-medium gap-4 text-sm flex-wrap hover:text-gray-400'
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
