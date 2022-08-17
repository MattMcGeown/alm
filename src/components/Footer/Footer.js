// SCSS Imports
import './footer.scss';

// Component Imports
import { images } from '../../images';
import { links, socialLinks } from '../../data/Links';
import Signup from '../Signup/Signup';

// Icon Imports

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
				<Signup />
				<div className='social_link_container'>
					{socialLinks.map((link, index) => {
						return (
							<a
								style={{ order: link.position }}
								href={link.url}
								key={index}
								target='_blank'
								rel='noopener noreferrer'>
								{link.icon ? link.icon : link.label}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default footer;
