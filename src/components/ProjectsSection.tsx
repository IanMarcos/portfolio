import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types/Project';
import { useMultiLanguage } from '../hooks/useMultiLanguage';
import 'assets/styles/components/ProjectsSection.scss';

const ProjectsSection = () => {
  const { strings, projects } = useMultiLanguage();

  const generatePseudoRandom = () => {
    const num = Math.floor(Math.random() * (999999 - 100000) + 100000);
    return num.toString();
  };

  return (
    <section className="projects-section">
      <h2>{strings.projectsTitle}</h2>
      <ul>
        {projects.map((project: Project) => (
          <li key={`${project.name}-${generatePseudoRandom()}`}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
