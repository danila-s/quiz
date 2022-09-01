import React from 'react';
import {cn as bem} from "@bem-react/classname";
import propTypes from "prop-types";
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

MainLayout.propTypes = {
  head: propTypes.node,
}


export default React.memo(MainLayout);