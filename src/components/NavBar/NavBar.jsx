import React from 'react';
import c from './NavBar.module.css';
import { Link, NavLink } from 'react-router-dom';

let activeStyle = {
  color: "gold",
  textDecoration: "none",
}
let inActiveStyle = {
  color: "white",
  textDecoration: "none",
}

const setActive = ({isActive}) => isActive ? activeStyle : inActiveStyle;

const NavBar = () => {

  return (
    <nav className={c.grid__navbar}>
    <div>
      <NavLink to ="/" style={setActive}>Profile</NavLink>
    </div>
    <div>
    <NavLink to ="/message" style={setActive}>Messanges</NavLink>
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
  </nav>
  );
}

export default NavBar;
