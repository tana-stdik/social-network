import React from "react";
import Dialog from "./Dialog/Dialog";
import c from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {

  return (
    <div className={c.main__dialogs}>
      <div className={c.dialogs}>
        <Dialog id='1' name='Tania'/>
        <Dialog id='2' name='Andriy'/>
        <Dialog id='3' name='Olexiy'/>
        <Dialog id='4' name='Lev'/>
        <Dialog id='5' name='Nikola'/>
        <Dialog id='6' name='Olia'/>
      </div>
      <div className={c.messages}>
      <Message message="Hi! How are you?"/>
      <Message message="Don't worry!"/>
      <Message message="I'm happy!"/>
      <Message message="Yo!"/>
      </div>
    </div>
  );
}

export default Dialogs;