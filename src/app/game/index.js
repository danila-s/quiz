import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadLevel } from "../../api";
import GameField from "../../components/game-field";

function Game(){

    const levelNumber = useSelector(state => state.levelNumber)
    const [levelStep , setLevelStep] = useState(0);
    const [questions , setQuestions] = useState([]);

    const nextStep = () => {
        setLevelStep(++levelStep)
    }

    const missionFailed = () => {
        alert('UPS')
    }

    useEffect(() =>{
        loadLevel(levelNumber).then((data) => {
            setQuestions(data)
        });
    },[])

    return(
      <>
      {questions.length && <GameField questionInfo={questions[levelStep]}
                                      nextStep={nextStep}
                                      missionFailed={missionFailed}
        />}
        </>
    ) 
    
    
}

export default Game