import React from 'react';
import { flexContainer } from './style.module.css'

const FlexContainer = ({children}) => {
  return (
    <section className={flexContainer}>
      {children}
    </section>
  )
}

export default FlexContainer;
