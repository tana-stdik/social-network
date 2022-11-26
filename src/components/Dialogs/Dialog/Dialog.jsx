import React from "react";
import { NavLink } from "react-router-dom";
import c from './Dialog.module.css';

let activeStyle = {
  color: "green",
textDecoration: "none",
}
let inActiveStyle = {
  color: "blue",
textDecoration: "none",
}

const setActive = ({isActive}) => isActive ? activeStyle : inActiveStyle;

const Dialog = (props) => {

  let path = "/dialogs/" + props.id;
  return (
    <div className="item">
      <NavLink to={path} style={setActive}>{props.name}</NavLink>
    </div>
  );
}

export default Dialog;