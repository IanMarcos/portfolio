import React from 'react';
import ImageSlider from '../components/Knowledge/ImageSlider';
import KnowledgeSectionBars from '../components/Knowledge/KnowledgeSection';
import NavigationBar from '../components/NavBar';
import FlexContainer from '../components/Resume/FlexContainer';
// import { } from './style.module.css';

const Knowledge = () => {

  const imgArr = {
    js: 'https://github.com/IanMarcos/personal-assets/blob/main/curriculum-vitae/js.png?raw=true',
    python: 'https://github.com/IanMarcos/personal-assets/blob/main/curriculum-vitae/python.png?raw=true',
    node: 'https://github.com/IanMarcos/personal-assets/blob/main/curriculum-vitae/node.png?raw=true',
    react: 'https://github.com/IanMarcos/personal-assets/blob/main/curriculum-vitae/react.png?raw=true',
  };

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
    <>
      <NavigationBar />
      <title>Conocimientos</title>
      <main>
        <section className='top-minus-one'>
          <ImageSlider imgArr={imgArr}/>
        </section>
        <FlexContainer>
          <KnowledgeSectionBars title={'Idiomas'} elements={languages} />
          <KnowledgeSectionBars title={'Programación'} elements={programing} />
          <KnowledgeSectionBars title={'Tecnologías'} elements={tools} />
        </FlexContainer>
      </main>
    </>
  )
}
export default Knowledge;
