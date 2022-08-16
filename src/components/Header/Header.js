// SCSS Imports
import './header.scss';

// Component Imports
import { images } from '../../images';
import { links } from '../../data/Links';

const Header = () => {
	return (
		<header>
			<div className='header_snipe'>
				<h2>Play for free</h2>
			</div>
			<div className='container'>
				<div className='header_content'>
					<img className='header_logo' src={images.logo} alt='' />
					<h2>Improve your aim now</h2>
					<div className='store_btn_wrap'>
						<a href={links.googleStore}>
							<img src={images.gbadge} alt='' />
						</a>
						<a href={links.appleStore}>
							<img src={images.abadge} alt='' />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
