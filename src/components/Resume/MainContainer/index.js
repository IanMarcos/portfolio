import React from 'react';
import { mainContainer } from './style.module.css';

const MainContainer = ( {customClass='', children} ) => (
  <div className={mainContainer + ' ' + customClass}>
      {children}
  </div>
)

export default MainContainer;
