import React from "react";
import style from "./Header.css";
import logo from "../../assets/img/logo.png";

function Header(props) {
  const currentGroup = props.birdsGroups[props.currentGroup];

  const birdsGroups = props.birdsGroups.map((e, i) => {
    let classNames = style.menuItem;
    if (e === currentGroup) {
      classNames += " " + style.active;
    }
    return (
      <li className={classNames} key={i}>
        {e}
      </li>
    );
  });

  return (
    <div className={style.header}>
      <div className={style.headerTop}>
        <div>
          <img className={style.logo} src={logo} alt="" />
        </div>
        <div className={style.score}>
          <span>Score: {props.score}</span>
        </div>
      </div>

      <ul className={style.menu}>{birdsGroups}</ul>
    </div>
  );
}

export default Header;
