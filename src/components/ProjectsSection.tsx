import React from 'react';
import ProjectCard from 'components/ProjectCard';
import 'assets/styles/ProjectsSection.scss';

const ProjectsSection = () => {
  const tempProject = {
    name: 'Project1',
    category: 'Fullstack',
    description:
      "I'm but a humble short description of the project. Lorem ipsum dolor sit amet, consectetur porttitor.",
    image:
      'https://steamuserimages-a.akamaihd.net/ugc/2276071244592363981/095D06E4E153CBE8B7535F4A442B92AD303C9888/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    imageAlt: 'Project picture',
    linkToFront: 'google.com',
    linkToBack: 'linkedin.com',
  };

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <ProjectCard project={tempProject} />
    </div>
  );
};

export default ProjectsSection;
