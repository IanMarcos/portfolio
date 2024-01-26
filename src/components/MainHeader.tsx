import React from 'react';
import { BsEnvelope, BsGeoAlt, BsJournal } from 'react-icons/bs';
import 'assets/styles/MainHeader.scss';

const MainHeader = () => (
  <div className="resume-header-container">
    <div className="textual-section">
      <h1>Ian Marcos Ortiz Duque</h1>
      <div className="basic-info">
        <div className="basic-info-line">
          <BsEnvelope />
          <p>ian.marcos.ortiz@gmail.com</p>
        </div>
        <div className="basic-info-line">
          <BsGeoAlt />
          <p>Medellín, Colombia</p>
        </div>
        <div className="basic-info-line">
          <BsJournal />
          <p>Estudiante de Ingeniería de Sistemas</p>
        </div>
      </div>
    </div>
  </div>
);

export default MainHeader;
