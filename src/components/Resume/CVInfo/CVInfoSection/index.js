import * as React from 'react';
import { cvinfoSection, cvinfoSectionSmall, cvinfoSectionMedium, cvinfoSectionCompany } from '../style.module.css';

const CVInfoSectionA = ({ title, elements }) => {
  return (
    <div className={`${cvinfoSection} ${cvinfoSectionSmall}`}>
      <h2>{title}</h2>
      <ul>
        {elements.map(item => (
          <li key={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const CVInfoSectionB = ({ title, elements }) => {
  return (
    <div className={`${cvinfoSection} ${cvinfoSectionMedium}`}>
      <h2>{title}</h2>
      {elements.map(institution => (
        <div className={cvinfoSectionCompany}>
          {Object.values(institution).map((info, i) => {
            if (i === 0) return <h3 key={info}>{info}</h3>;
            if (i === 1) return <h4 key={info}>{info}</h4>;
            return <p key={info}>{info}</p>;
          })}
        </div>
      ))}
    </div>
  )
}

export { CVInfoSectionA, CVInfoSectionB };
