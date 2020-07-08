import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';
import projects from './projectData/projects';


const ProjectsList = () => {

  const projectsToList =  projects.map(project => (
    <li key={`${project.projectTitle}`}>
      <ProjectItem {...project} />
    </li>
  ));

  return (
    <ul>
      {projectsToList}
    </ul>

  );
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    summary: PropTypes.string.isRequired,
    projectStack: PropTypes.array.isRequired,
    projectGit: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    projectImage: PropTypes.string.isRequired,
    projectTitle:PropTypes.string.isRequired
  }))
};

export default ProjectsList;
