import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
      <div className={c.header}>
        <img src='https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_1280.jpg' alt='nature'></img>
        <div>
          Avatar + description
        </div>
      </div>
  );
}

export default ProfileInfo;
