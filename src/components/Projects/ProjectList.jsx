import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';
import { projects } from './projectData/projects';

const ProjectsList = () => {

  const projectsToList =  projects.map(project => (
    <span key={`${project.projectTitle}`}>
      <ProjectItem {...project} />
    </span>
  ));

  return (
    <div>
      {projectsToList}
    </div>

  );
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    projectSummary: PropTypes.string.isRequired,
    projectStack: PropTypes.array.isRequired,
    projectGit: PropTypes.string.isRequired,
    projectUrl: PropTypes.string,
    projectImage: PropTypes.string.isRequired,
    projectTitle:PropTypes.string.isRequired
  }))
};

export default ProjectsList;
