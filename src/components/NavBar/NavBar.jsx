import React from 'react';
import c from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    
    <nav className={c.grid__navbar}>
    <div className={c.grid__item}>
      <Link to ="/">Profile</Link>
    </div>
    <div className={`${c.grid__item} ${c.grid__activ}`}>
    <Link to ="/message">Messanges</Link>
    </div>
     <div className={c.grid__item}>
     <Link to ="/news">News</Link>
    </div>
    <div className={c.grid__item}>
      <Link to ="/music">Music</Link>
    </div>
    <div className={c.grid__item}>
      <Link to ="/setting">Setting</Link>
    </div>
  </nav>
  );
}

export default NavBar;
