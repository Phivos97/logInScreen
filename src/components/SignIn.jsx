import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SignIn = () => {
	const [logInUser, setLogInUser] = useState('');
	const [logInPassword, setLogInPassword] = useState('');
	const [passwordShown, setPasswordShown] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [toggleError, setToggleError] = useState(false);

	const checkLogInUser = name => {
		return name.username === `${logInUser}` && name.password === `${logInPassword}`;
	};

	const handleLogIn = () => {
		if (JSON.parse(localStorage.getItem('users')).find(checkLogInUser)) return console.log(`Logged in as ${logInUser}`);

		setToggleError(true);
		return setErrorMessage('Incorrect username or password');
	};
	return (
		<>
			<div className='relative h-screen flex justify-center items-center text-white'>
				<div style={{ backgroundImage: "url('/mountains.jpg')" }} className='inset-0 bg-center bg-cover absolute brightness-95'></div>

				<form className='relative flex flex-col max-w-[400px] w-full' onSubmit={e => e.preventDefault()}>
					<span className='text-4xl pb-6 text-center mb-2'>Have an account?</span>

					{/* Username Input */}
					<input
						className='backdrop-blur-lg text-xl h-12 mb-6 rounded-3xl  bg-slate-50/20 placeholder-white p-5 transition ease-in duration-[200ms] focus:outline-none  focus:bg-slate-50/25 shadow-lg'
						placeholder='Username'
						size='25'
						type='text'
						onChange={event => {
							setLogInUser(event.target.value);
						}}
						value={logInUser}
					/>

					{/* Eye Icon */}
					<i
						onClick={() => {
							setPasswordShown(!passwordShown);
						}}
						className={
							passwordShown ? 'fa fa-eye-slash absolute top-[162px] right-[21px] hover:cursor-pointer z-50' : 'fa fa-eye absolute top-[162px] right-[21px] hover:cursor-pointer z-50'
						}></i>

					{/* Password Input */}
					<input
						className=' backdrop-blur-lg text-xl h-12 mb-6 rounded-3xl bg-slate-50/20 placeholder-white p-5 transition focus:ease-in focus:duration-[300ms] focus:outline-none focus:bg-slate-50/25 shadow-lg'
						placeholder='Password'
						size='25'
						type={passwordShown ? 'text' : 'password'}
						// onChange={(event)=>{setLogInPassword(event.target.value);}}
						onChange={event => {
							setLogInPassword(event.target.value);
						}}
						value={logInPassword}
					/>
					<Link
						// to={
						//   JSON.parse(localStorage.getItem('users')).find(checkLogInUser)
						//     ? '/welcome'
						//     : '/'
						// }
						className='backdrop-blur-xl bg-[hsla(4, 67%, 82%, 1)] bg-gradient-to-r from-[hsla(4,67%,82%,0.7)] to-[hsla(47,100%,87%,0.7)] mb-2 text-xl font-semibold  opacity-95 py-3 px-3 rounded-3xl text-black hover:brightness-[1.07] hover:cursor-pointer hover:opacity-95 text-center transition-all duration-[500ms] ease-out'
						onClick={handleLogIn}>
						SIGN IN
					</Link>

					{/* Rest of Buttons */}
					<div className='flex justify-between mb-6'>
						{/* Remember Me */}
						<div className='flex'>
							<input
								type='checkbox'
								className='peer w-4 h-4 accent-myOrange  rounded-xl hover:ring-red-600 ring-0 self-center point hover:accent-myOrange hover:cursor-pointer checked:hover:'
								// checked='checked'
							/>

							<span className='peer-checked:text-myOrange text-xl py-3 px-3 text-white hover:text-myOrange hover:cursor-pointer brightness-110 '>Remember Me</span>
							{/* Remember me */}
						</div>

						<input
							className='text-xl py-3 px-3 rounded-3xl justify-center text-white hover:text-myOrange hover:cursor-pointer brightness-110 '
							type='submit'
							value='Forgot Password'

							// onClick={navigate('/signup')}
							// onClick={<Link to='/signup'></Link>}
						/>
					</div>
					<span className='text-center  text-xl mb-5'>— Or Sign In With —</span>

					<div className='flex gap-3'>
						<a
							className='backdrop-blur-3xl hover:opacity-95 brightness-150 w-full font-semibold text-xl border-solid  py-3 px-3 rounded-lg justify-center text-black hover:bg-myOrange hover:brightness-110 hover:cursor-pointer text-center transition ease-in-out duration-[600ms] bg-gradient-to-r from-[hsla(4,67%,82%,0.7)] to-[hsla(47,100%,87%,0.7)]'
							href='https://www.facebook.com'>
							Facebook
						</a>

						{/* // backdrop-blur-3xl brightness-150 opacity-80 w-full font-semibold text-xl border-solid  py-3 px-3 rounded-lg justify-center text-black hover:bg-myOrange hover:brightness-110 hover:cursor-pointer hover:opacity-95 text-center transition ease-in-out duration-[600ms] bg-gradient-to-r from-[hsla(4,67%,82%,1)] to-[hsla(47,100%,87%,1)] */}
						<a
							className='backdrop-blur-3xl hover:opacity-95 brightness-150 w-full font-semibold text-xl border-solid  py-3 px-3 rounded-lg justify-center text-black hover:bg-myOrange hover:brightness-110 hover:cursor-pointer text-center transition ease-in-out duration-[600ms] bg-gradient-to-r from-[hsla(4,67%,82%,0.7)] to-[hsla(47,100%,87%,0.7)]'
							href='https://www.twitter.com'>
							Twitter
						</a>
					</div>

					{/* <label>
            <div className='flex justify-between'>
              <input
                className='text-xl font-bold border-solid bg-red-50 w-24 py-3 px-3 rounded-3xl justify-center text-black'
                type='submit'
                value='Sign in'
                onClick={handleLogIn}
              />
              <Link to='/signup'>
                <input
                  className='text-xl font-bold border-solid bg-red-50 w-24 py-3 px-3 rounded-3xl justify-center text-black'
                  type='submit'
                  value='Sign up'
                  // onClick={navigate('/signup')}
                  // onClick={<Link to='/signup'></Link>}
                />
              </Link>
            </div>
          </label> */}
				</form>

				{toggleError ? (
					<span className='absolute bottom-0 backdrop-blur-3xl opacity-95 brightness-150 w-full font-semibold text-xl border-solid  py-3 px-3 rounded-lg justify-center text-black text-center transition ease-in-out duration-[600ms] bg-red-500'>
						{errorMessage}
					</span>
				) : null}
			</div>

			{/* </div> */}
		</>
	);
};

// w-full font-semibold text-xl border-solid bg-slate-50/90 py-3 px-3 rounded-lg justify-center text-black hover:bg-myOrange hover:brightness-110 hover:cursor-pointer hover:opacity-95 text-center transition ease-in duration-[2000ms] hover:bg-gradient-to-r from-[hsla(4,67%,82%,0.7)] to-[hsla(47,100%,87%,0.7)]
