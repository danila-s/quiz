import React from 'react';
import {cn as bem} from "@bem-react/classname";
import './style.css';

function MissionFailedScreen({homeBtn , repitBtn}){
    const cn = bem('MissionFailedScreen');
  
    return (
      <div className={cn()}>
        <div className={cn('content')}>
            <button className={cn('button')} onClick={homeBtn.action}>{homeBtn.text}</button>
            <button className={cn('button')} onClick={repitBtn.action}>{repitBtn.text}</button>
        </div>
      </div>
    )
  }

  export default React.memo(MissionFailedScreen)