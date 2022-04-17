import * as React from 'react';
import NavigationBar from '../components/NavBar';
import BasicInfo from '../components/Resume/BasicInfo';
import CVInfo from '../components/Resume/CVInfo';
import '../styles/global-style.css';

const IndexPage = () => {
  return (
    <>
      <NavigationBar/>
      <main>
        <title>Resumen</title>
        <BasicInfo/>
        <CVInfo/>
      </main>
    </>
  )
}
export default IndexPage;
