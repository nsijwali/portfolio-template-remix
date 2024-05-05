import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { Link } from '@remix-run/react';
import { useKeenSlider } from 'keen-slider/react';
import { CommonWrapper } from './component.styles';
import { Recommendations } from './type';
import { FaQuoteLeft } from 'react-icons/fa6';

const Recommendation = ({
	recommendations,
	url,
}: {
	recommendations: Array<Recommendations>;
	url: string;
}) => {
	const [sliderRef] = useKeenSlider<HTMLDivElement>(
		{
			loop: true,
		},
		[
			(slider) => {
				let timeout: ReturnType<typeof setTimeout>;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 5000);
				}
				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			},
		],
	);

	return (
		<CommonWrapper
			initial={'offscreen'}
			whileInView='onscreen'
			viewport={{ amount: 0.8 }}
			className='w-full sm:w-8/12 max-w-screen-2xl relative p-1 sm:p-2 xs:p-2 h-auto'
		>
			<span className='flex items-center gap-2'>
				<div className='rounded-full w-2 h-2 bg-white shadow-white dot' />
				<span className='text-gray-400 text-xs'>RECOMMENDATIONS</span>
			</span>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className='relative keen-slider'
				ref={sliderRef}
			>
				{recommendations?.map((recommendation: Recommendations) => (
					<div
						className='keen-slider__slide max-h-60 overflow-y-auto'
						key={uuidv4()}
					>
						<FaQuoteLeft className='top-0 absolute text-gray-400 left-2' />
						<div className='p-1 pl-8 font-extralight overflow-y-auto sm:text-lg max-h-48'>
							{recommendation.praise}
						</div>
						<span className='float-right'>
							<Link
								className='text-gray-400'
								title='view profile?'
								reloadDocument={false}
								target='_blank'
								to={recommendation.profile || ''}
								aria-label='recommendationlink'
							>
								{recommendation.from}
							</Link>
							<div className='text-sm text-gray-400 font-extralight'>
								{recommendation.designation}
							</div>
						</span>
					</div>
				))}
			</motion.div>
		</CommonWrapper>
	);
};

export default Recommendation;
