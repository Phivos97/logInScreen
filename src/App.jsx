import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Dashboard } from './components/Dashboard';
import { Welcome } from './components/Welcome';

function App() {
  const [count, setCount] = useState(0);
  const [showSignUp, setShowSignUp] = useState(false);
  const [login, setLogin] = useState(true);

  // if (!login) {
  //   return <SignUp />;
  // }

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
