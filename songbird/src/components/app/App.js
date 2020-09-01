import React, { useState } from "react";
import "./App.css";
import Header from "../header/Header";
import CurrentBird from "../currentBird/currentBird";
import AnswerOptions from "../answerOptions/answerOptions";
import AnswerInfo from "../answerInfo/answerInfo";
import NextLevel from "../nextLevel/nextLevel";
import birdsData from "../../data/dataBirds";
import birdsGroups from "../../data/groupBirds";
import TheEnd from "../end/end";
import { getRandomBird } from "../../utilits";

function App() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentBird, setCurrentBird] = useState(getRandomBird(currentGroup));
  const [score, setScore] = useState(0);
  const [theEnd, setTheEnd] = useState(false);
  const [nextLevelStatus, setNextLevelStatus] = useState(true);
  const [answerBird, setAnswerBird] = useState(null);

  const nextLevel = () => {
    if (currentGroup < birdsData.length - 1) {
      setCurrentGroup(currentGroup + 1);
      setCurrentBird(getRandomBird(currentGroup + 1));
      setAnswerBird(null);
      setNextLevelStatus(true);
    } else {
      setTheEnd(true);
    }
  };

  if (theEnd) {
    return (
      <div className="appWrapper">
        <TheEnd score={score} />
      </div>
    );
  } else {
    return (
      <div className="appWrapper">
        <Header
          birdsGroups={birdsGroups}
          currentGroup={currentGroup}
          score={score}
        />
        <CurrentBird
          currentBird={currentBird}
          nextLevelStatus={nextLevelStatus}
        />
        <div className="answerWrapper">
          <AnswerOptions
            birdsData={birdsData}
            currentGroup={currentGroup}
            answerBird={answerBird}
            setAnswerBird={setAnswerBird}
            currentBird={currentBird}
            setScore={setScore}
            score={score}
            setNextLevelStatus={setNextLevelStatus}
          />
          <AnswerInfo answerBird={answerBird} />
        </div>
        <NextLevel nextLevel={nextLevel} disabled={nextLevelStatus} />
      </div>
    );
  }
}
export default App;
