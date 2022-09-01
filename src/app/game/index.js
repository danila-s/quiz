import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadLevel } from "../../api";
import GameField from "../../components/game-field";
import { newQuestions } from "../../redux/actions";
import { str2bool } from "../../utils";

function Game(){

    const levelNumber = useSelector(state => state.levelNumber)
    let [levelStep , setLevelStep] = useState(0);
    const dispatch = useDispatch();
    const questionsArr = useSelector(state => state.questionsArr)
    const navigate = useNavigate();

    const nextStep = () => {
        setLevelStep(++levelStep)
    }

    const missionFailed = () => {
        navigate('/missionFailed')
    }

    const checkAnswer = (e) => {
        const answer = str2bool(e.target.value)
        if(answer){
            nextStep();
        }else{
            missionFailed();
        }
    }

    useEffect(() =>{
        loadLevel(levelNumber).then((data) => {
            dispatch(newQuestions(data))
        });
    },[levelNumber , dispatch])

    return(
      <>
      {questionsArr.length && <GameField questionInfo={questionsArr[levelStep]}
                                      checkAnswer={checkAnswer}
        />}
        </>
    ) 
    
    
}

export default Game