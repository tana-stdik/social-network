import React from 'react';
import FriendsItem from '../FriendsItem/FriendsItem';
import c from './Friends.module.css';

const Friends = (props) => {
  
  let friend = props.friendsItem.map((f) => 
  (<FriendsItem avatarUrl={f.avatarUrl} name={f.name} />))
  return (
    
    <div className={`${c.navbar__friends} ${c.friends}`}>
      {friend}
    </div>
  );
}

export default Friends;
