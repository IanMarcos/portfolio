import * as React from 'react';
import { companyLogo, experienceInfo, textualInfo } from './style.module.css';

const CompanyInfo = ({ company, duties, img, position, workTime }) => {
  return (
    <div className={experienceInfo}>
      <div className={textualInfo}>
        <h2>{position}</h2>
        <h3>{company}</h3>
        <h4>{workTime}</h4>
        <ul>
          {
            duties.map((duty, i) => (
              <li key={duty.concat(i)}>{duty}</li>
            ))
          }
        </ul>
      </div>
      <div className={companyLogo}>
        <img src={img} alt="Logo de la empresa"/>
      </div>
    </div>
  )
}
export default CompanyInfo;
