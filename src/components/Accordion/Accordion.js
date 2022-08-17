// // React Imports
import { useState } from 'react';
import { motion } from 'framer-motion';

// Icon Imports
import { FaChevronDown } from 'react-icons/fa';

// SCSS Imports
import './accordion.scss';

const Accordion = ({ title, data }) => {
	const [selectedItem, setSelectedItem] = useState(null);

	const handleClick = (index) => {
		selectedItem === index ? setSelectedItem(null) : setSelectedItem(index);
	};

	return (
		<div className='accordion'>
			<div className='container'>
				<h2 className='section_title'>{title}</h2>
				<div className='accordion_container'>
					{data.map((item, index) => {
						return (
							<div className='accordion_item' key={index}>
								<div
									className='accordion_item_title'
									onClick={() => handleClick(index)}>
									{item.question}
									<motion.div
										initial={{ rotate: 0 }}
										animate={{ rotate: selectedItem === index ? 180 : 0 }}
										className='chevron'>
										<FaChevronDown />
									</motion.div>
								</div>
								<motion.div
									initial={{ height: 0 }}
									animate={{
										height: selectedItem === index ? 'auto' : 0,
									}}
									transition={{
										duration: 0.5,
									}}
									className='accordion_item_content'>
									{/* {item.answer.map((line) => {
									return <p>{line}</p>;
								})} */}
									<p>{item.answer}</p>
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
