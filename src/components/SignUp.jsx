import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SignUp = () => {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [toggleError, setToggleError] = useState(false);
	const [toggleSuccess, setToggleSuccess] = useState(false);
	const [users, setUsers] = useState(() => {
		if (JSON.parse(localStorage.getItem('users'))) {
			return JSON.parse(localStorage.getItem('users'));
		} else {
			return [];
		}
	});

	const setBackground = () => {
		if (toggleError) return 'bg-red-500';
		if (toggleSuccess) return 'bg-green-500';
		return 'invisible';
	};

	const handleChangeUser = event => {
		setUser(event.target.value);
	};

	const handleChangePassword = event => {
		setPassword(event.target.value);
	};
	const handleChangePassword2 = event => {
		setPassword2(event.target.value);
	};

	const clearFields = () => {
		setUser('');
		setPassword('');
		setPassword2('');
	};

	const handleSignUp = () => {
		let success = 1;
		let errorMessage = '';

		if (user.length < 5 || password.length < 5) {
			success = 0;
			errorMessage = 'Username and password fields must contain at least 5 characters';
		}
		if (JSON.parse(localStorage.getItem('users')).find(item => item.username === `${user}`)) {
			success = 0;
			errorMessage = 'User already exists';
		}
		['Vaggelis', 'Nikos', 'Kostas'];
		if (password != password2) {
			success = 0;
			errorMessage = "Passwords don't match";
		}

		if (success != 1) {
			setToggleSuccess(false);
			setToggleError(true);
			setErrorMessage(errorMessage);
		} else {
			setToggleError(false);
			setToggleSuccess(true);
			setErrorMessage('Successful sign up');
			return setUsers([...users, { username: user, password: password }]);
		}
	};

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users));
	}, [users]);

	return (
		<>
			<div className='relative h-screen flex justify-center items-center text-white'>
				<div style={{ backgroundImage: "url('/mountains.jpg')" }} className='inset-0 bg-center bg-cover absolute brightness-95'></div>
				SIGN UP
				<form className='relative flex flex-col bg-transparent max-w-[400px] w-full' onSubmit={e => e.preventDefault()}>
					<span className='text-4xl pb-6 text-center mb-2'>Create an account</span>

					<input
						className='backdrop-blur-lg text-xl h-12 mb-6 rounded-3xl  bg-slate-50/20 placeholder-white p-5 transition ease-in duration-[200ms] focus:outline-none  focus:bg-slate-50/25 shadow-lg'
						size='25'
						placeholder='Username'
						type='text'
						onChange={handleChangeUser}
						value={user}
						required
					/>

					<input
						className='backdrop-blur-lg text-xl h-12 mb-6 rounded-3xl  bg-slate-50/20 placeholder-white p-5 transition ease-in duration-[200ms] focus:outline-none  focus:bg-slate-50/25 shadow-lg'
						size='25'
						placeholder='Password'
						type='password'
						onChange={handleChangePassword}
						value={password}
						required
					/>

					<input
						className='backdrop-blur-lg text-xl h-12 mb-6 rounded-3xl  bg-slate-50/20 placeholder-white p-5 transition ease-in duration-[200ms] focus:outline-none  focus:bg-slate-50/25 shadow-lg'
						placeholder='Confirm password'
						size='25'
						type='password'
						onChange={handleChangePassword2}
						value={password2}
						required
					/>

					{/* <Link to='/'> */}
					<input
						className='backdrop-blur-xl bg-[hsla(4, 67%, 82%, 1)] bg-gradient-to-r from-[hsla(4,67%,82%,0.7)] to-[hsla(47,100%,87%,0.7)] mb-6 text-xl font-semibold  opacity-95 py-3 px-3 rounded-3xl text-black hover:brightness-[1.07] hover:cursor-pointer hover:opacity-95 text-center transition-all duration-[500ms] ease-out'
						type='submit'
						value='CREATE ACCOUNT'
						onClick={() => {
							handleSignUp();
							clearFields();
						}}
					/>
					<Link className='text-center hover:text-myOrange hover:cursor-pointer brightness-110' to='/'>
						<span className=' text-xl mb-5'>— Have An Account? —</span>
					</Link>
				</form>
				<span
					className={`absolute bottom-0 backdrop-blur-3xl opacity-95 brightness-150 w-full font-semibold text-xl border-solid  py-3 px-3 rounded-lg justify-center text-black text-center transition ease-in-out duration-[600ms] ${setBackground()}
            } `}>
					{errorMessage}
				</span>
			</div>
		</>
	);
};

{
	/* <span
          className={`${toggleSuccess? 'bg-green-500':}absolute bottom-0 backdrop-blur-3xl opacity-95 brightness-150 w-full font-semibold text-xl border-solid  py-3 px-3 rounded-lg justify-center text-black text-center transition ease-in-out duration-[600ms] bg-red-500`}
        >
          {errorMessage}
        </span> */
}
