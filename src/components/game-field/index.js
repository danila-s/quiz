import React from "react";
import {cn as bem} from "@bem-react/classname";
import './style.css'

function GameField({questionInfo , checkAnswer }){

    const cn = bem('GameField');

    return (
        <div className={cn()}>
            <div className={cn('question')}>
                {questionInfo.questionText}
            </div>
            <div className={cn('answers')}>
                {questionInfo.answers.map((item) => {
                    return <button className={cn('btn')} key={item.text} value={item.correct} onClick={checkAnswer}>{item.text}</button>
                })}
            </div>
        </div>
    )
}

export default React.memo(GameField);