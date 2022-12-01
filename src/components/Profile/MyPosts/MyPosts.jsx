import React from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';

const MyPosts = (props) => {

  let postElements = props.posts.map(p => (
    <Post avatarUrl={props.avatarUrl} message={p.message} like={p.likeCount}/>
  ));
  let newPostElement = React.createRef();
  let addPost =  () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    
    <div className={c.myPosts}>
    <div>
      <div>
        New posts
      </div>
      <textarea ref={newPostElement}></textarea>
      <div>
        <button onClick={addPost }>Add post</button>
      </div>
    </div>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
