import React, { useState } from 'react';
import { FaLaptop, FaLaptopCode } from 'react-icons/fa6';
import { BiSolidServer } from 'react-icons/bi';
import { Project, CodeCategories } from '../types/Project';
import strings from 'assets/strings/en.json';
import 'assets/styles/components/ProjectCard.scss';

const ProjectCard = ({ project }: { project: Project }) => {
  const [imgSrc, setImgSrc] = useState('');

  const renderIcon = () => {
    switch (project.category) {
      case CodeCategories.Fe:
        return <FaLaptop />;

      case CodeCategories.Be:
        return <BiSolidServer />;

      case CodeCategories.Full:
        return <FaLaptopCode />;

      default:
        return null;
    }
  };

  const renderLinks = () => {
    const { linkToFront, linkToBack } = project;
    const frontLink = (
      <a href={linkToFront} target="_blank" rel="noopener noreferrer">
        {strings.btnCheckFront}
      </a>
    );
    const backLink = (
      <a href={linkToBack} target="_blank" rel="noopener noreferrer">
        {strings.btnCheckBack}
      </a>
    );

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

    return null;
  };

  const setImage = async () => {
    if (project.image?.slice(0, 8) === 'https://') {
      setImgSrc(project.image);
    }

    const image = await import(`assets/images/${project.image}`);
    setImgSrc(image.default);
  };

  setImage();

  return (
    <div className="project-card">
      <img src={imgSrc} alt={project.imageAlt} />
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
