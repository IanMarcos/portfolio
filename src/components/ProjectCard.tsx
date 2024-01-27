import React from 'react';
import { FaLaptop, FaLaptopCode } from 'react-icons/fa6';
import { BiSolidServer } from 'react-icons/bi';
import 'assets/styles/ProjectCard.scss';

const ProjectCard = () => {
  return (
    <div className="project-card">
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/2276071244592363981/095D06E4E153CBE8B7535F4A442B92AD303C9888/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="Project picture"
      />
      <div className="project-card-overlay">
        <div className="project-card-header">
          <h3>Project 1</h3>
          <span className="code-type">
            <FaLaptopCode />
            Frontend
          </span>
        </div>
        <p>
          I'm but a humble short description of the project. Lorem ipsum dolor
          sit amet, consectetur porttitor.
        </p>
        <div className="project-links">
          <a>Check front</a>
          <a>Check back</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
