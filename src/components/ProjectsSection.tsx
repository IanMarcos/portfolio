import React from 'react';
import { nanoid } from 'nanoid';
import ProjectCard from './ProjectCard';
import projectsData from 'assets/data/projects/en.json';
import { Project } from '../types/Project';
import 'assets/styles/ProjectsSection.scss';

const ProjectsSection = () => {
  const { projects } = projectsData;

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <ul>
        {projects.map((project: Project) => (
          <li key={nanoid(10)}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
