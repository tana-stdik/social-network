import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [
  {id: 1, message: "Hi! How are you?", likeCount: 4},
  {id: 2, message: "I'm happy!", likeCount: 25},
  {id: 3, message: "Don't worry!", likeCount: 23},
  {id: 4, message: "Yo!", likeCount: 0},
]

let dialogs = [
  {id: 1, name: 'Tania'},
  {id: 2, name: 'Andriy'},
  {id: 3, name: 'Olexiy'},
  {id: 4, name: 'Lev'},
  {id: 5, name: 'Nikola'},
  {id: 6, name: 'Olia'},
]

let messages = [
  {id: 1, message: "Hi! How are you?"},
  {id: 2, message: "Don't worry!"},
  {id: 3, message: "I'm happy!"},
  {id: 4, message: "Yo!"},
]

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
