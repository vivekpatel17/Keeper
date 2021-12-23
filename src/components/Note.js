import React from "react";

import classes from "./Note.module.css";

export default function Note(props) {

  function deleteNote (){
    props.onDelete(props.id);
  }

  return (
    <div className={classes.note}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
};