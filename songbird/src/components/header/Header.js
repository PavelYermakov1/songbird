import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";

function Header(props) {
  const currentGroup = props.birdsGroups[props.currentGroup];

  const birdsGroups = props.birdsGroups.map((e, i) => {
    let classNames = "menuItem";
    if (e === currentGroup) {
      classNames += " " + "active";
    }
    return (
      <li className={classNames} key={i}>
        {e}
      </li>
    );
  });

  return (
    <div className="header">
      <div className="headerTop">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="score">
          <span>Score: {props.score}</span>
        </div>
      </div>

      <ul className="menu">{birdsGroups}</ul>
    </div>
  );
}

export default Header;
