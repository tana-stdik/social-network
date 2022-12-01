import React from "react";
import c from './NewMessage.module.css';

const NewMessage = (props) => {

  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
        <div className="new-message">
          <div>
            <textarea ref={newMessageElement}></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Add message</button>
          </div>
        </div>
  )
}

export default NewMessage;