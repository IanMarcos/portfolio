import * as React from 'react';
import { BsEnvelope, BsGeoAlt, BsJournal } from 'react-icons/bs';
import MainContainer from '../MainContainer';
import {
  textualSection,
  basicInfo,
  basicInfoLine,
  basicInfoPad,
  profilePhoto
} from './style.module.css';
import profilePic from '../../../images/foto.png';

const BasicInfo = () => (
  <MainContainer customClass={basicInfoPad}>
    <div className={textualSection}>
      <h1>Ian Marcos Ortiz Duque</h1>
      <div className={basicInfo}>
        <div className={basicInfoLine}>
          <BsEnvelope />
          <p>ian.marcos.ortiz@gmail.com</p>
        </div>
        <div className={basicInfoLine}>
          <BsGeoAlt />
          <p>Medellín, Colombia</p>
        </div>
        <div className={basicInfoLine}>
          <BsJournal />
          <p>Estudiante de Ingeniería de Sistemas</p>
        </div>
      </div>
    </div>
    <div className={profilePhoto}>
      <img src={profilePic} alt='Foto de Ian Marcos' className="resp-img" />
    </div>
  </MainContainer>
)

export default BasicInfo;
