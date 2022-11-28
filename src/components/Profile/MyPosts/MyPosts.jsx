import React from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';

const MyPosts = (props) => {

  let postElements = props.posts.map(p => (
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
