import React from 'react';
import { projectContainer, projectImg, projectItem, projectText} from './style.module.css';

const ProjectCard = ({proName, bkgImg, href}) => (
  <a className={projectItem} href={href} target="_blank" rel="noreferrer">
    <div className={projectContainer}>
      <div className={projectText}>{proName}</div>
      <div className={projectImg} style={{ backgroundImage: `url(${bkgImg})` }}></div>
    </div>
  </a>
)
export default ProjectCard;
