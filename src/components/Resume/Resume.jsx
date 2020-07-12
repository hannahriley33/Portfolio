import React from 'react';
import resume from '../../assets/resume.png';
import styles from './resumeStyles.css';

const Resume = () => {
  
  return (
    <div className={styles.resume}>
      <img src={resume} className={styles.pic}></img>
    </div>
  );
};

export default Resume;

