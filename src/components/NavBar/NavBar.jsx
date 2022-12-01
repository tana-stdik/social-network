import React from 'react';
import c from './NavBar.module.css';
import { Link, NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const NavBar = (props) => {
  
  let activeStyle = {
    color: "gold",
    textDecoration: "none",
  }
  let inActiveStyle = {
    color: "white",
    textDecoration: "none",
  }
  
  const setActive = ({isActive}) => isActive ? activeStyle : inActiveStyle;
  
  return (
    <nav className={`${c.grid__navbar} ${c.navbar}`}>
      <div className={c.navbar__menu}>
        <div>
          <NavLink to ="/" style={setActive}>Profile</NavLink>
        </div>
        <div>
          <NavLink to ="/message" style={setActive}>Messages</NavLink>
        </div>
        <div>
          <NavLink to ="/news" style={setActive}>News</NavLink>
        </div>
        <div>
          <NavLink to ="/music" style={setActive}>Music</NavLink>
        </div>
        <div>
          <NavLink to ="/setting" style={setActive}>Setting</NavLink>
        </div>
      </div>
      <Friends friendsItem={props.friendsItem} />
    </nav>
  );
}

export default NavBar;
