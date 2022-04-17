import * as React from 'react';
import { BsEnvelope, BsGeoAlt, BsJournal } from 'react-icons/bs';
import {
  basicInfoContainer,
  textualSection,
  basicInfo,
  basicInfoLine,
  profilePhoto,
  respImg
} from './style.module.css';
import profilePic from '../../../images/foto.png';

const BasicInfo = () => (
  <section className={basicInfoContainer}>
      <div className={textualSection}>
        <h1>Ian Marcos Ortiz Duque</h1>
        <div className={basicInfo}>
          <div className={basicInfoLine}>
            <BsEnvelope/>
            <p>ian.marcos.ortiz@gmail.com</p>
          </div>
          <div className={basicInfoLine}>
            <BsGeoAlt/>
            <p>Medellín, Colombia</p>
          </div>
          <div className={basicInfoLine}>
            <BsJournal/>
            <p>Estudiante de Ingeniería de Sistemas</p>
          </div>
        </div>
      </div>
      <div className={profilePhoto}>
        <img src={profilePic} alt='Foto de Ian Marcos' className={respImg}/>
      </div>
  </section>
)

export default BasicInfo;
