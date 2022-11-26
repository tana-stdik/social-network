import React from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';

const MyPosts = () => {

  let postData = [
    {id: 1, message: "Hi! How are you?", likeCount: 4},
    {id: 2, message: "I'm happy!", likeCount: 25},
    {id: 3, message: "Don't worry!", likeCount: 23},
    {id: 4, message: "Yo!", likeCount: 0},
  ]

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
        <Post message={postData[0].message} like={postData[0].likeCount}/>
        <Post message={postData[1].message} like={postData[1].likeCount}/>
        <Post message={postData[2].message} like={postData[2].likeCount}/>
        <Post message={postData[3].message} like={postData[3].likeCount}/>
      </div>
    </div>
  );
}

export default MyPosts;
