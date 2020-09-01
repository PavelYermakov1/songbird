import React from "react";
import "./nextLevel.css";

function NextLevel(props) {
  let classes = "button";
  if (!props.disabled) classes += " " + "active";

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
