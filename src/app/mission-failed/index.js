import React from "react";
import { useNavigate } from "react-router-dom";
import MissionFailedScreen from "../../components/mission-failed-screen";

function MissionFailed(){

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/')
    }

    const repit = () => {
        navigate('/game')
    }

    const homeBtn = {text : 'Вернуться в меню' , action: goHome}
    const repitBtn = {text : 'Попробовать еще раз ' , action: repit}

    return(
        <MissionFailedScreen homeBtn={homeBtn}
                             repitBtn={repitBtn}
          />
    )
}

export default MissionFailed;