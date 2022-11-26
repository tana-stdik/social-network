import React from "react";
import c from './Message.module.css';

const Message = (props) => {

  return (
        <div className="message">
          {props.message}
        </div>
  );
}

export default Message;