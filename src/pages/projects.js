import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/Projects/ProjectCard';
import chat from '../images/chat.jpg';
import productAPI from '../images/productAPI.jpg';

const Projects = () => {
  //Add to this array any new project
  const projects = [
    {
      img: chat,
      link: 'https://cv-webserver-app.herokuapp.com/',
      name: 'Api REST de usuarios / Chat'
    },
    {
      img: productAPI,
      link: 'https://ianmarcos.github.io/clothes-api-form/',
      name: 'Api REST de productos'
    },
  ]
  return (
    <Layout title="Portafolio">
      <ul>
        { projects.map( ({ name, img, link }) => (
          /**Here's an inline-style just because it didn't appear to be worth
          *to create a file for a single line of code*/
          <li key={'key:' + name} style={{ margin: '5% 0'}}>
            <ProjectCard proName={name} bkgImg={img} href={link} />
          </li>
        )) }
      </ul>
    </Layout>
  )
}
export default Projects;
