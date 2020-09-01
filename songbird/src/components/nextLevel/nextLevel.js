import React from "react";
import style from "./NextLevel.css";

function NextLevel(props) {
  let classes = style.button;
  if (!props.disabled) classes += " " + style.active;

  return (
    <button
      className={classes}
      onClick={props.nextLevel}
      disabled={props.disabled}
    >
      Next Level
    </button>
  );
}

export default NextLevel;
