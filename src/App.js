import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
      <div className='grid__body'>
        <Header/>
        <NavBar/>
        <main className='grid__main'>
          <Dialogs/>
        </main>
        {/* <Profile/> */}
      </div>
  );
}

export default App;
