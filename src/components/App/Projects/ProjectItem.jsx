import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ projectTitle, projectImage, projectUrl, projectGit, projectStack, projectSummary }) => (
  <p>
    {projectTitle}
  </p>
);

ProjectItem.propTypes = {
  project: PropTypes.array.isRequired
};

export default ProjectItem;
