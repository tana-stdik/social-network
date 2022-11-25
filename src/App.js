import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Dialogs from './components/Dialogs/Dialogs';
import Setting from './components/Setting/Setting';

const App = () => {
  return (
  <BrowserRouter>
      <div className='grid__body'>
        <Header/>
        <NavBar/>
        <main className='grid__main'>
        
          <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="/message" element={<Dialogs/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/setting" element={<Setting/>}/>
          </Routes>
          
        </main>
      </div>
      </BrowserRouter>
  );
}

export default App;
