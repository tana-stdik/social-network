import React from "react";
import Dialog from "./Dialog/Dialog";
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

  return (
    <div className={c.main__dialogs}>
      <div className={c.dialogs}>
        <Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
        <Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
        <Dialog id={dialogsData[2].id} name={dialogsData[2].name}/>
        <Dialog id={dialogsData[3].id} name={dialogsData[3].name}/>
        <Dialog id={dialogsData[4].id} name={dialogsData[4].name}/>
        <Dialog id={dialogsData[5].id} name={dialogsData[5].name}/>
      </div>
      <div className={c.messages}>
      <Message message={messagesData[0].message}/>
      <Message message={messagesData[1].message}/>
      <Message message={messagesData[2].message}/>
      <Message message={messagesData[3].message}/>
      </div>
    </div>
  );
}

export default Dialogs;