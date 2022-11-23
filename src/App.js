import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <div className='grid__body'>
        <Header/>
        <NavBar/>
        <Profile/>
      </div>
    </div>
  );
}

export default App;
