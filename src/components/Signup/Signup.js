// SCSS Imports
import './signup.scss';

// React Imports
import { useState } from 'react';

const Signup = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		validateEmail() ? console.log('valid') : console.log('invalid');
	};

	const validateEmail = () => {
		let emailValid = false;
		return (emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
	};

	return (
		<div className='signup_container'>
			<h3>Sign up for news on game updates</h3>
			<form>
				<input
					type='email'
					placeholder='sign_me_up@aimlab.com'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button type='submit' onClick={handleSubmit}>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Signup;
