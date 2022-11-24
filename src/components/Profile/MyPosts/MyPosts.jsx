import React from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';

const MyPosts = () => {
  return (
    
    <div className={c.myPosts}>
    <div>
      <div>
        New posts
      </div>
      <textarea></textarea>
      <div>
        <button>Add post</button>
      </div>
    </div>
      <div>
        <Post message="Hi! How are you?" like="12"/>
        <Post message="I'm happy!" like="25"/>
        <Post message="Don't worry!" like="0"/>
      </div>
    </div>
  );
}

export default MyPosts;
