import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useContext } from "react";
import { DarkModeContext } from "../context/context";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "noteDark" : "note"}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
