import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';

const Profile = () => {
  return (
    
    <main className={c.grid__main}>
      <div className={c.header}>
        <img className={c.grid__main__img} src='https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_1280.jpg' alt='nature'></img>
        <div>
          Avatar + description
        </div>
      </div>
      <MyPosts/>
    </main>
  );
}

export default Profile;
