import React from 'react';
import { FaLaptop, FaLaptopCode } from 'react-icons/fa6';
import { BiSolidServer } from 'react-icons/bi';
import strings from 'assets/strings/en.json';
import 'assets/styles/ProjectCard.scss';

type ProjectCategory = 'Frontend' | 'Backend' | 'Fullstack';
type Project = {
  name: string;
  category: ProjectCategory;
  description?: string;
  linkToFront?: string;
  linkToBack?: string;
  image: string | undefined;
  imageAlt: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const renderIcon = () => {
    switch (project.category) {
      case 'Frontend':
        return <FaLaptop />;

      case 'Backend':
        return <BiSolidServer />;

      case 'Fullstack':
        return <FaLaptopCode />;

      default:
        return null;
    }
  };

  const renderLinks = () => {
    const { category, linkToFront, linkToBack } = project;
    const frontLink = <a href={linkToFront}>{strings.BtnCheckFront}</a>;
    const backLink = <a href={linkToBack}>{strings.BtnCheckBack}</a>;

    if (category === 'Frontend' && linkToFront) {
      return frontLink;
    }

    if (category === 'Backend' && linkToBack) {
      return backLink;
    }

    if (category === 'Fullstack') {
      if (linkToFront && linkToBack) {
        return (
          <>
            {frontLink}
            {backLink}
          </>
        );
      }

      if (linkToFront && !linkToBack) {
        return frontLink;
      }

      if (!linkToFront && linkToBack) {
        return backLink;
      }
    }

    return null;
  };

  return (
    <div className="project-card">
      <img src={project.image} alt={project.imageAlt} />
      <div className="project-card-overlay">
        <div className="project-card-header">
          <h3>{project.name}</h3>
          <span className="code-type">
            {renderIcon()}
            {project.category}
          </span>
        </div>
        {project.description ? <p>{project.description}</p> : null}
        <div className="project-links">{renderLinks()}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
