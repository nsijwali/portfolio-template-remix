import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { CommonWrapper } from './component.styles';
import { Recommendations } from './type';

const Recommendation = ({
	recommendations,
}: {
	recommendations: Array<Recommendations>;
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1,
		);
	};

	const goToNextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1,
		);
	};
	const cardVariants: Variants = {
		offscreen: {
			y: 250,
		},
		onscreen: {
			y: 0,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

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
				variants={cardVariants}
				className='w-full h-full flex justify-center items-center flex-col relative'
			>
				<>
					<div className='px-12 py-1 h-48 sm:h-auto overflow-auto font-extralight'>
						{recommendations[currentIndex].praise}
					</div>
					<span className='absolute right-1 bottom-3 sm:-bottom-10 xs:-bottom-7'>
						<div>{recommendations[currentIndex].from}</div>
						<div className='text-sm text-gray-400 font-extralight'>
							{recommendations[currentIndex].designation}
						</div>
					</span>
				</>
				<div className='flex justify-between h-min absolute w-full inset-y-1/2'>
					<CiCircleChevLeft
						size='48'
						className='hover:text-gray-400 cursor-pointer'
						onClick={goToPrevSlide}
					/>
					<CiCircleChevRight
						className='hover:text-gray-400 cursor-pointer'
						size='48'
						onClick={goToNextSlide}
					/>
				</div>
			</motion.div>
		</CommonWrapper>
	);
};

export default Recommendation;
