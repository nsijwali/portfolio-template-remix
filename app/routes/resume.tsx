import { useRouteLoaderData } from '@remix-run/react';
import React from 'react';
import resume from '../db/nitin_sijwali_resume.pdf';

const Resume = () => {
	const { data } = useRouteLoaderData('root');
	return (
		<div className='flex justify-center pt-16 pb-6 sm:pb-10 px-2 sm:pl-12 sm:pr-12'>
			<object
				className='pt-20'
				data={`${resume}#toolbar=0&navpanes=0&view=FitH&scrollbar=0`}
				type='application/pdf'
				width='100%'
				height='600px'
			>
				<p>
					It appears you don't have a PDF plugin for this browser. No biggie...
					you can <a href={resume}>click here to download the PDF file.</a>
				</p>
			</object>
		</div>
	);
};

export default Resume;
