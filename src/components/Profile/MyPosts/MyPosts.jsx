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

  let postElements = postData.map(p => (
    <Post message={p.message} like={p.likeCount}/>
  ))

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
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
