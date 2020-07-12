import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectItem = ({ projectTitle, projectImage, projectUrl, projectGit, projectStack, projectSummary }) => (
  <div>
    <p>{projectTitle}</p>
    <img src={projectImage} />
    <div>
      <Link to={projectGit}> <p>{projectTitle} Github</p> </Link>
      <Link to={projectUrl}> <p>Live site</p> </Link>
    </div>
    {projectStack}
    {projectSummary}
  </div>
);

ProjectItem.propTypes = {
  projectSummary: PropTypes.string.isRequired,
  projectStack: PropTypes.array.isRequired,
  projectGit: PropTypes.string,
  projectUrl: PropTypes.string,
  projectImage: PropTypes.string.isRequired,
  projectTitle:PropTypes.string.isRequired
};

export default ProjectItem;
