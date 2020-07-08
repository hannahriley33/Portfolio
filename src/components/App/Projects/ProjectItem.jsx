import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project }) => (
  <p>
    <span>{project.projectTitle}</span>
  </p>
);

ProjectItem.propTypes = {
  project: PropTypes.array.isRequired
};

export default ProjectItem;
