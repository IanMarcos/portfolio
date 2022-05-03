import React from 'react';
import CompanyInfo from "../../components/Experience/CompanyInfo";
import Layout from '../../components/Layout';
import { experienceContainer } from "./style.module.css";
import logoUdea from "../../images/logo-udea.png";
import logoCarvajal from "../../images/logo-carvajal.png";

const Experience = () => {
  const udea = {
    position: 'Auxiliar Administrativo',
    company: 'Universidad de Antioquia',
    workTime: 'Marzo-2020 hasta Noviembre-2021',
    duties: [
      'Gestión y administración de salas de Zoom',
      'Digitalización de documentos',
      'Mantenimiento de equipos de computo'
    ],
    img: logoUdea
  }

  const carvajal = {
    position: 'Auxiliar de Comunicaciones',
    company: 'Carvajal Empaques S.A',
    workTime: 'Marzo-2016 hasta Septiembre-2016',
    duties: [
      'Diseño de comunicados impresos y digitales',
      'Toma y retoque de fotos formato documento',
      'Toma y edición de videos'
    ],
    img: logoCarvajal
  }

  return (
    <Layout title="Experiencia" customClass="justify-center">
        <div className={experienceContainer}>
          <CompanyInfo {...udea} />
          <CompanyInfo {...carvajal} />
        </div>
    </Layout>
  )
}
export default Experience;
