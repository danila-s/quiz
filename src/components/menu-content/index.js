import React from "react";
import {cn as bem} from "@bem-react/classname";
import './style.css'

function MenuContent ({menuButtons , buttonAction}){
    const cn = bem('MenuContent');



    return(
        <div className={cn()}>
            {menuButtons.map((item) => {
               return <button className={cn('item')} key={item.id} onClick={() => {buttonAction(item.link)}}>{item.text}</button>
            })}
        </div>
    )
}

export default React.memo(MenuContent)