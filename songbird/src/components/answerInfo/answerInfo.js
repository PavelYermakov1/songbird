import React from "react";
import style from "./AnswerInfo.css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { pause, play } from "../../constants";

function AnswerInfo(props) {
  return (
    <div className={style.answerInfo}>
      {!props.answerBird ? (
        <>
          <p>Послушайте плеер.</p>
          <p>Выберите птицу из списка.</p>
        </>
      ) : (
        <div>
          <div className={style.birdImgWrapper}>
            <img
              className={style.birdImg}
              src={props.answerBird.image}
              alt={props.answerBird.name}
            />
            <div className={style.birdInfo}>
              <p>{props.answerBird.name}</p>
              <p>{props.answerBird.species}</p>
              <AudioPlayer
                autoPlayAfterSrcChange={false}
                src={props.answerBird.audio}
                layout="horizontal-reverse"
                showJumpControls={false}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                customProgressBarSection={[
                  RHAP_UI.PROGRESS_BAR,
                  RHAP_UI.VOLUME,
                ]}
                customIcons={{
                  play: play,
                  pause: pause,
                }}
              />
            </div>
          </div>
          <div>
            <p>{props.answerBird.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnswerInfo;
