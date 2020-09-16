import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from "./components/Navbar";
import Profile from'./components/Profile';
import Navbarright from './components/Navbarright';

function App() {
  return (<div className='app-wrapper'>
          <div className='header'>
              <Header />
          </div>
          <div className='navbarleft'>
              <Navbar />
          </div>
          <div className='profile'>
              <Profile />
          </div>
          <div className='navbarright'>
              <Navbarright />
          </div>
    </div>
  );
}

export default App;
