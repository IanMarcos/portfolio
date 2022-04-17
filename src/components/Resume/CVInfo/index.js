import * as React from 'react';
import { CVInfoSectionA, CVInfoSectionB } from './CVInfoSection';
import { cvinfoContainer } from './style.module.css'

const CVInfo = () => {

  const languages = ['Español', 'Inglés'];
  const programmingLang = ['Javascript', 'Python', 'Java'];
  const technologies = ['Node.js', 'React'];

  const studies = [{
    institution: 'Universidad de Antioquia, Medellín',
    program: 'Ingeniería de Sistemas',
    studyTime: '8° Semestre'
  },
  {
    institution: 'SENA, Buga',
    program: 'Tecnología en Producción Multimedia',
    studyTime: '2014-2016'
  }];
  
  const experience = [{
    company: 'Universidad de Antioquia',
    position: 'Auxiliar Administrativo',
    workTime: 'Marzo-2020 / Noviembre-2021'
  },
  {
    company: 'Carvajal Empaques S.A',
    position: 'Auxiliar de Comunicación',
    workTime: 'Marzo-2016 / Septiembre-2016'
  }];

  return (
    <section className={cvinfoContainer}>
      <CVInfoSectionA title={'Idiomas'} elements={languages} />
      <CVInfoSectionA title={'Lenguajes'} elements={programmingLang} />
      <CVInfoSectionA title={'Tecnologías'} elements={technologies} />
      <CVInfoSectionB title={'Formación Académica'} elements={studies} />
      <CVInfoSectionB title={'Experiencia'} elements={experience} />
    </section>
  )
}

export default CVInfo;
