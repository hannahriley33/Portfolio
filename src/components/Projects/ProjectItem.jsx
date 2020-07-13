import React from 'react';
import PropTypes from 'prop-types';
import styles from './projectItem.css';

const ProjectItem = ({ projectTitle, projectImage, projectUrl, projectGit, projectStack, projectSummary }) => (
  <div className={styles.project}>
    <p className={styles.projectTitle}>{projectTitle}</p>
    <img src={projectImage} className={styles.projectImage}/>
    <p className={styles.projectStack}>{projectStack}</p>
    <p className={styles.projectSummary}>{projectSummary}</p>
    <div className={styles.projectLinks}>
      <a href={projectUrl} target="blank"> <p>Live Site</p> </a>
      <a href={projectGit} target="blank"> <p>Github</p> </a> 
    </div>
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
