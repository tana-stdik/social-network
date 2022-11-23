import React from 'react';
import c from './Header.module.css';

const Header = () => {
  return (
    
    <header className={c.grid__header}>
      <div>
        <img src='https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293_1280.png' alt='list'></img>
        Header
      </div>
    </header>
  );
}

export default Header;
