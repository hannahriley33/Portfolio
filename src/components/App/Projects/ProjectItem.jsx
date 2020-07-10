import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project }) => (
  <p>
    {project.projectTitle}
  </p>
);

ProjectItem.propTypes = {
  project: PropTypes.array.isRequired
};

export default ProjectItem;
