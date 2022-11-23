import React from 'react';
import c from './NavBar.module.css';

const NavBar = () => {
  return (
    
    <nav className={c.grid__navbar}>
    <div className={c.grid__item}>
      <a>
        Profile
      </a>
    </div>
    <div className={`${c.grid__item} ${c.grid__activ}`}>
      <a>
        Messanges
      </a>
    </div>
    <div className={c.grid__item}>
      <a>
        News
      </a>
    </div>
    <div className={c.grid__item}>
      <a>
        Music
      </a>
    </div>
    <div className={c.grid__item}>
      <a>
       Setting
      </a>
    </div>
  </nav>
  );
}

export default NavBar;
