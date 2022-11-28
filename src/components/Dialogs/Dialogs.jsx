import React from "react";
import DialogItem from "./Dialog/Dialog";
import c from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(d => (
    <DialogItem id={d.id} name={d.name}/>
  ))

  let messagesElements = props.messages.map(m => (
    <Message message={m.message}/>
  ))

  return (
    <div className={c.main__dialogs}>
      <div className={c.dialogs}>
      {dialogsElements}
      </div>
      <div className={c.messages}>
       {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;