import React from 'react';
import './App.css';
import Header from './components/Header';
import Messages from './components/Messages';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <div className='grid__body'>
        <Header/>
        <NavBar/>
        <Messages/>
      </div>
    </div>
  );
}

export default App;
