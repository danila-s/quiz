import React, { useState } from "react";
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import MenuContent from "../../components/menu-content";

function Menu(){

    const menuButtons = useSelector(state => state.menuButtons);
    const navigate = useNavigate();

    const goTo = (link) => {
        navigate(link)
    }


    return(
       <MenuContent
       menuButtons={menuButtons}
       buttonAction={goTo}
        /> 
    )
}

export default Menu;