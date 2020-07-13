import React from 'react';
import resume from '../../../public/resume.jpg';
import resumeStyles from './resumeStyles.css';

const Resume = () => {
  
  return (
    <div className={resumeStyles.resume}>
      <img src={resume} className={resumeStyles.pic}></img>
    </div>
  );
};

export default Resume;
