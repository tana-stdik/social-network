import React from "react";
import DialogItem from "./Dialog/Dialog";
import c from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Tania'},
    {id: 2, name: 'Andriy'},
    {id: 3, name: 'Olexiy'},
    {id: 4, name: 'Lev'},
    {id: 5, name: 'Nikola'},
    {id: 6, name: 'Olia'},
  ]

  let messagesData = [
    {id: 1, message: "Hi! How are you?"},
    {id: 2, message: "Don't worry!"},
    {id: 3, message: "I'm happy!"},
    {id: 4, message: "Yo!"},
  ]

  let dialogsElements = dialogsData.map(d => (
    <DialogItem id={d.id} name={d.name}/>
  ))

  let messagesElements = messagesData.map(m => (
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