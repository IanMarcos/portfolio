import React from 'react';
import Layout from '../components/Layout';
import FlexContainer from '../components/Resume/FlexContainer';
import ImageSlider from '../components/Knowledge/ImageSlider';
import KnowledgeSectionBars from '../components/Knowledge/KnowledgeSection';

import js from '../images/js.png';
import python from '../images/python.png';
import node from '../images/node.png';
import react from '../images/react.png';

const Knowledge = () => {

  const imgArr = { js, python, node, react };

  const languages = [
    { name: 'Español', percentage: '100' },
    { name: 'Inglés', percentage: '80' }
  ];
  const programing = [
    { name: 'Javascript', percentage: '64' },
    { name: 'Java', percentage: '20' },
    { name: 'Python', percentage: '34' }
  ];
  const tools = [
    { name: 'Node.js', percentage: '64' },
    { name: 'React', percentage: '50' },
  ];

  return (
    <Layout title="Conocimientos">
      <section className='top-minus-one'>
        <ImageSlider imgArr={imgArr} />
      </section>
      <FlexContainer>
        <KnowledgeSectionBars title={'Idiomas'} elements={languages} />
        <KnowledgeSectionBars title={'Programación'} elements={programing} />
        <KnowledgeSectionBars title={'Tecnologías'} elements={tools} />
      </FlexContainer>
    </Layout>
  )
}
export default Knowledge;
