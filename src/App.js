import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import NavBar from './components/NavBar/NavBar';

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
