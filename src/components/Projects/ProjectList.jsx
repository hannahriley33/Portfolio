import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';
import { projects } from './projectData/projects';
import projectStyles from './projectStyles.css';
import Masonry from 'react-masonry-css';

const ProjectsList = () => {

  const projectsToList =  projects.map(project => (
    <span key={`${project.projectTitle}`}>
      
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <ProjectItem {...project} />
      </Masonry>
    </span>
  ));


  return (
    <div className={projectStyles.parent}>
      <h1 className={projectStyles.title}>{'Projects'}</h1>
      <div className={projectStyles.projects}>{projectsToList}</div>
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
