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
import { addPost } from './redux/state';

const App = (props) => {

  return (
  <BrowserRouter>
      <div className='grid__body'>
        <Header/>
        <NavBar
          friendsItem={props.state.navbarPage.friendsItem} />
        <main className='grid__main'>
        
          <Routes>
            <Route path="/" element={<Profile
              avatarUrl={props.state.profilePage.avatarUrl} 
              posts={props.state.profilePage.posts}
              addPost={props.addPost}/>}/>
            <Route path="/message" element={<Dialogs 
              dialogs={props.state.messagesPage.dialogs} 
              messages={props.state.messagesPage.messages}/>}/>
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
