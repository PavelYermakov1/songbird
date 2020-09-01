import React from "react";
import "./end.css";
import sound from "./../../assets/sound/congratulation.mp3";

const TheEnd = (props) => {
  if (props.score === 30) {
    const audio = new Audio();
    audio.src = sound;
    audio.autoplay = true;
  }

  return props.score === 30 ? (
    <div className="wrapper">
      <h1>Абсолютная победа!</h1>
      <p>Вы прошли викторину, набрав максимальное количество очков!</p>
      <button className="repeat" onClick={() => window.location.reload()}>
        Попробовать еще раз!
      </button>
    </div>
  ) : (
    <div className="wrapper">
      <h1>Поздравляем!</h1>
      <p>Вы прошли викторину, набрав {props.score} из 30 очков!</p>
      <button className="repeat" onClick={() => window.location.reload()}>
        Попробовать еще раз!
      </button>
    </div>
  );
};

export default TheEnd;
