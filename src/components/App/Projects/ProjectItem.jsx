import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ projectTitle, projectImage, projectUrl, projectGit, projectStack, projectSummary }) => (
  <p>
    {projectTitle}
    {projectImage}
    {projectUrl}
    {projectGit}
    {projectStack}
    {projectSummary}
  </p>
);

ProjectItem.propTypes = {
  projectSummary: PropTypes.string.isRequired,
  projectStack: PropTypes.array.isRequired,
  projectGit: PropTypes.string.isRequired,
  projectUrl: PropTypes.string,
  projectImage: PropTypes.string.isRequired,
  projectTitle:PropTypes.string.isRequired
};

export default ProjectItem;
