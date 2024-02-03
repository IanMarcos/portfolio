import React from 'react';
import { nanoid } from 'nanoid';
import ProjectCard from './ProjectCard';
import { Project } from '../types/Project';
import { useMultiLanguage } from '../hooks/useMultiLanguage';
import projectsData from 'assets/data/projects/en.json';
import 'assets/styles/components/ProjectsSection.scss';

const ProjectsSection = () => {
  const { strings } = useMultiLanguage();
  const { projects } = projectsData;

  return (
    <section className="projects-section">
      <h2>{strings.projectsTitle}</h2>
      <ul>
        {projects.map((project: Project) => (
          <li key={nanoid(10)}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
