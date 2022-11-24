import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
    
    <div className={c.item}>
      <img src='https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583_1280.png' alt="logo"/>
      <div className={c.item__mess}>  
        <div>
          {props.message}
        </div>  
        <div>Like: 
          {props.like}
        </div>
      </div>
    </div>
  );
}

export default Post;
