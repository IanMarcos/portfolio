import React from 'react';
import { barContainer, knowledgeSection } from './style.module.css';

const KnowledgeSectionBars = ({ title, elements }) => {
  return (
    <div className={knowledgeSection}>
      <h2>{title}</h2>
      {elements.map(({ name, percentage }, i) => (
        <div key={name.concat(i)} className={barContainer}>
          <p key={name}>{name}</p>
          <progress key={name.concat(percentage)} value={percentage} max="100" />
        </div>
      ))}
    </div>
  )
}

export default KnowledgeSectionBars;
