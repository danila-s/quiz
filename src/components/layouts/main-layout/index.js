import React from 'react';
import {cn as bem} from "@bem-react/classname";
import './style.css';

function MainLayout({children}){
  const cn = bem('MainLayout');

  return (
    <div className={cn()}>
      <div className={cn('content')}>
        {children}
      </div>
    </div>
  )
}


export default React.memo(MainLayout);