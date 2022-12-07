import React from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';

const MyPosts = (props) => {

  let postElements = props.posts.map(p => (
    <Post message={p.message} like={p.likeCount}/>
  ));
  let newPostElement = React.createRef();
  let addPost =  () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    
    <div className={c.myPosts}>
    <div>
      <div>
        New posts
      </div>
      <textarea onChange={onPostChange} ref={newPostElement}
        value={props.newPostText}/>
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
