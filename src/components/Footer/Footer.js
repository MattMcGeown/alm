// SCSS Imports
import './footer.scss';

// Component Imports
import { images } from '../../images';
import { links } from '../../data/Links';

const footer = ({ title }) => {
	return (
		<div className='container'>
			<h2 className='section_title'>{title}</h2>
			<div className='footer_content'>
				<div className='store_btn_wrap'>
					<a href={links.googleStore} target='_blank' rel='noopener noreferrer'>
						<img src={images.gbadge} alt='' />
					</a>
					<a href={links.appleStore} target='_blank' rel='noopener noreferrer'>
						<img src={images.abadge} alt='' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default footer;
