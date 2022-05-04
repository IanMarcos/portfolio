import React from 'react';
import Layout from '../components/Layout';
import CVInfo from '../components/Resume/CVInfo';
import BasicInfo from '../components/Resume/BasicInfo';
import '../styles/global-style.css';

const IndexPage = () => {
  return (
    <Layout title="Resumen">
      <section className='top-minus-one'>
        <BasicInfo />
      </section>
      <CVInfo />
    </Layout>
  )
}
export default IndexPage;
