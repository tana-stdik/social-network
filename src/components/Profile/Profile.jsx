import React from 'react';
import { addPost } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from './PrpofileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
              newPostText={props.newPostText}/>
    </div>
  );
}

export default Profile;
