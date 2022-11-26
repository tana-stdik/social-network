import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from './PrpofileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts/>
    </div>
  );
}

export default Profile;
