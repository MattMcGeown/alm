// SCSS Imports
import './scss/main.scss';
import './app.scss';

// Data Imports
import { carouselData } from './data/CarouselData';
import { faqData } from './data/FAQ';

// Component Imports
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Accordion from './components/Accordion/Accordion';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='app'>
			<Header />
			<section className='carousel'>
				<Carousel slides={carouselData} />
			</section>
			<section className='faq'>
				<Accordion title='Frequently Asked Questions' data={faqData} />
			</section>
			<section className='footer'>
				<Footer title='Play for free' />
			</section>
		</div>
	);
}

export default App;
