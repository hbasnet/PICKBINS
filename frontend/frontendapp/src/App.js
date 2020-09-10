import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/auth';
import Home from './components/home';
import { CookiesProvider } from 'react-cookie';

function App() {

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
