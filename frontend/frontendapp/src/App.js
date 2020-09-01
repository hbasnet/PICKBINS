import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import LoginForm from './components/login';
//import RegisterForm from './components/register';
import Auth from './components/auth';
import Home from './components/home';
import { CookiesProvider } from 'react-cookie';

function App() {

  // const [token, setToken] = useState('');

  // const userLogin = (tok) => {
  //   setToken(tok);
  // }

  //<Route path='/' element={<LoginForm userLogin={userLogin} />} />
  // <Route path='register' element={<RegisterForm />} />

  return (
    <div className="App">
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>

    </div>
  );
}

export default App;
