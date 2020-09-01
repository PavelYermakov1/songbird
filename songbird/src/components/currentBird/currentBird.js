import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import style from "./CurrentBird.css";
import "./audio-player.css";
import "react-h5-audio-player/lib/styles.css";
import placeholder from "../../assets/img/fake-bird.jpg";
import { pause, play } from "../../constants";

function CurrentBird(props) {
  const audioAnswer = React.useRef(null);
  let birdImage = placeholder;
  let birdName = "*****";

  if (!props.nextLevelStatus) {
    birdImage = props.currentBird.image;
    birdName = props.currentBird.name;
    audioAnswer.current.audio.current.pause();
  }

  return (
    <div className={style.currentBirdWrapper}>
      <div className={style.birdImgWrapper}>
        <img className={style.birdImg} src={birdImage} alt={birdName} />
      </div>

      <div className={style.birdInfo}>
        <p className={style.birdName}>{birdName}</p>
        <AudioPlayer
          autoPlayAfterSrcChange={false}
          src={props.currentBird.audio}
          layout="horizontal-reverse"
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          customProgressBarSection={[
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION,
            RHAP_UI.VOLUME,
          ]}
          customIcons={{
            play: play,
            pause: pause,
          }}
          ref={audioAnswer}
        />
      </div>
    </div>
  );
}

export default CurrentBird;
