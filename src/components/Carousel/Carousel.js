// React Imports
import { useState } from 'react';

// SCSS Imports
import './carousel.scss';

// Data Import
import { carouselData } from './CarouselData';

// Icon Imports
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const length = carouselData.length;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
	};

	return (
		<section className='section_carousel'>
			<div className='container'>
				<FaArrowAltCircleLeft className='left_arrow' onClick={prevSlide} />
				<FaArrowAltCircleRight className='right_arrow' onClick={nextSlide} />
				<div className='carousel_content'>
					{carouselData.map((item, i) => {
						return (
							<div
								className={
									i == currentSlide ? 'carousel_item active' : 'carousel_item'
								}
								key={i}>
								{i === currentSlide && (
									<>
										<img src={item.image} alt={item.title} />
										<div className='carousel_text'>
											<h2 className='title'>{item.title}</h2>
											<p className='desc'>{item.desc}</p>
										</div>
									</>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Carousel;
