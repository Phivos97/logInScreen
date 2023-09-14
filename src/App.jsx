import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Welcome } from './components/Welcome';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<SignIn />} />
					<Route path='signup' element={<SignUp />} />
					<Route path='welcome' element={<Welcome />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
