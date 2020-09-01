import React, { useEffect } from "react";
import "./answerOptions.css";
import wrong from "./../../assets/sound/wrong.mp3";
import right from "./../../assets/sound/right.mp3";

let currentScore = 5;

function AnswerOptions(props) {
  const optionsListRef = React.useRef(null);
  useEffect(() => {
    const indItems = optionsListRef.current.querySelectorAll("li");
    for (let i = 0; i < indItems.length; i++) {
      indItems[i].className = "answer";
    }
  }, [props.currentGroup]);

  const playAnswerSound = (src) => {
    const audio = new Audio();
    audio.src = src;
    audio.autoplay = true;
  };

  const checkAnswer = (e, element) => {
    props.setAnswerBird(element);

    if (
      e.target.classList[0] !== "answer" ||
      e.target.classList[1] !== "wrong"
    ) {
      if (e.target.innerText === props.currentBird.name) {
        props.setScore(props.score + currentScore);
        props.setNextLevelStatus(false);
        playAnswerSound(right);
        e.target.classList.add("right");
        currentScore = 5;
      } else {
        playAnswerSound(wrong);
        if (currentScore > 0) currentScore--;
        e.target.classList.add("wrong");
      }
    }
  };

  const answerOptions = props.birdsData[props.currentGroup].map((element) => (
    <li
      onClick={(e) => checkAnswer(e, element)}
      key={element.id}
      className="answer"
    >
      {element.name}
    </li>
  ));

  return (
    <ul className="answerOptions" ref={optionsListRef}>
      {answerOptions}
    </ul>
  );
}

export default AnswerOptions;
