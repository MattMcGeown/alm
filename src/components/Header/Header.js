// SCSS Imports
import './header.scss';

// Image Imports
import { headerImages } from '../../images';

const Header = () => {
	return (
		<header>
			<div className='header_snipe'>
				<h2>Play for free</h2>
			</div>
			<div className='container'>
				<div className='header_content'>
					<img className='header_logo' src={headerImages.logo} alt='' />
					<h2>Improve your aim now</h2>
					<div className='store_btn_wrap'>
						<a href='#'>
							<img src={headerImages.gbadge} alt='' />
						</a>
						<a href='#'>
							<img src={headerImages.abadge} alt='' />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
