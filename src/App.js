// SCSS Imports
import './scss/main.scss';
import './app.scss';

// Data Imports
import { carouselData } from './components/Carousel/CarouselData';
import { faqData } from './data/FAQ';

// Component Imports
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Accordion from './components/Accordion/Accordion';

function App() {
	return (
		<div className='app'>
			<Header />
			<section className='carousel'>
				<Carousel slides={carouselData} />
			</section>
			<section className='faq'>
				<Accordion title='FAQ' data={faqData} />
			</section>
		</div>
	);
}

export default App;
