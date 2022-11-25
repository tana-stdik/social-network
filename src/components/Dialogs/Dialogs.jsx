import React from "react";
import c from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={c.main__dialogs}>
      <div className={c.dialogs}>
        <div className="item">
          Tania
        </div>
        <div className="item">
          Andriy
        </div>
        <div className="item">
          Olexiy
        </div>
        <div className="item">
          Lev
        </div>
        <div className="item">
          Nikola
        </div>
        <div className="item">
          Olia
        </div>
      </div>
      <div className={c.messages}>
        <div className="message">
          Hi! Haw are you?
        </div>
        <div className="message">
          Don't worry!
        </div>
        <div className="message">
          I'm happy!
        </div>
        <div className="message">
          
        </div>
      </div>
    </div>
  );
}

export default Dialogs;