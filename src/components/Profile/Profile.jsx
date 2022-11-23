import React from 'react';
import c from './Profile.module.css';

const Profile = () => {
  return (
    
    <main className={c.grid__main}>
    <div>
      <img src='https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_1280.jpg' alt='nature'></img>
    </div>
    <div>
      <div>
        Avatar + description
      </div>
      <div>
        My post
      </div>
    </div>
    <div>
      <div>
        New posts
        <div>
          Post 1
        </div>
        <div>
          Post 2
        </div>
      </div>
    </div>
  </main>
  );
}

export default Profile;
