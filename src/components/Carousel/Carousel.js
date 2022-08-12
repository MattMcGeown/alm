// // React Imports
import { useState } from 'react';
import { motion } from 'framer-motion';

// // Icon Imports
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// SCSS Imports
import './carousel.scss';

const Carousel = ({ slides }) => {
	const [x, setX] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
		x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
		x === 0 ? setX(-(slides.length - 1) * 100) : setX(x + 100);
	};

	return (
		<div className='container'>
			<div className='carousel_container'>
				<div className='chevron arrow_left'>
					<FaChevronLeft onClick={prevSlide} />
				</div>
				<div className='chevron arrow_right'>
					<FaChevronRight onClick={nextSlide} />
				</div>
				{slides.map((item, index) => {
					return (
						<motion.div
							initial={{ x: 0 }}
							animate={{ x: `${x}%` }}
							transition={{
								type: 'spring',
								stiffness: 120,
								damping: 20,
							}}
							className='carousel_item'
							key={index}>
							{item.image ? (
								<img src={item.image} alt={item.title} />
							) : (
								<iframe
									src={item.url}
									width='853'
									height='400'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media;'
								/>
							)}
							<div className='carousel_item_info'>
								<h2>{item.title}</h2>
								<p>{item.desc}</p>
							</div>
						</motion.div>
					);
				})}
				<ul className='carousel_dot_nav'>
					{Array.from({ length: slides.length }).map((_, index) => {
						return (
							<li
								className={index === currentSlide && `active`}
								key={index}></li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Carousel;
