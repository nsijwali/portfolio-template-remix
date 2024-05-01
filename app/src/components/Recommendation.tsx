import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { Link } from '@remix-run/react';
import { useKeenSlider } from 'keen-slider/react';
import { CommonWrapper } from './component.styles';
import { Recommendations } from './type';

const Recommendation = ({
	recommendations,
	url,
}: {
	recommendations: Array<Recommendations>;
	url: string;
}) => {
	// const [currentSlide, setCurrentSlide] = useState(0);
	// const [loaded, setLoaded] = useState(false);
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
					}, 50000);
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

	// const goToPrevSlide = (e: any) => {
	// 	e.stopPropagation() || instanceRef.current?.next();
	// };

	// const goToNextSlide = (e: any) => {
	// 	e.stopPropagation() || instanceRef.current?.next();
	// };
	// const cardVariants: Variants = {
	// 	offscreen: {
	// 		y: 250,
	// 	},
	// 	onscreen: {
	// 		y: 0,
	// 		transition: {
	// 			type: 'spring',
	// 			bounce: 0.4,
	// 			duration: 0.8,
	// 		},
	// 	},
	// };

	return (
		<CommonWrapper
			initial={'offscreen'}
			whileInView='onscreen'
			viewport={{ amount: 0.8 }}
			className='w-full sm:w-8/12 max-w-screen-2xl relative p-1 sm:p-2 xs:p-2 h-80 sm:h-60'
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
					<Link
						className='keen-slider__slide h-64 sm:h-auto md:h-auto'
						key={uuidv4()}
						title='check it out?'
						reloadDocument={false}
						target='_blank'
						to={url || ''}
					>
						<div className='p-1 h-48 sm:h-auto font-extralight overflow-y-auto sm:text-lg'>
							{recommendation.praise}
						</div>
						<span className='absolute right-1'>
							<div>{recommendation.from}</div>
							<div className='text-sm text-gray-400 font-extralight'>
								{recommendation.designation}
							</div>
						</span>
					</Link>
				))}

				{/* <div className='flex justify-between h-min absolute w-full inset-y-1/2'>
					{loaded && instanceRef.current && (
						<>
							<CiCircleChevLeft
								size='48'
								className='hover:text-gray-400 cursor-pointer'
								onClick={goToPrevSlide}
								// disabled={currentSlide === 0}
							/>
							<CiCircleChevRight
								className='hover:text-gray-400 cursor-pointer'
								size='48'
								onClick={goToNextSlide}
							/>
						</>
					)}
				</div> */}
			</motion.div>
		</CommonWrapper>
	);
};

export default Recommendation;
