import React from 'react';
import c from './FriendsItem.module.css';

const FriendsItem = (props) => {
  return (
    
    <div className={c.friends__item}>
      <img src={props.avatarUrl} alt='list'></img>
      {props.name}
    </div>
  );
}

export default FriendsItem;
