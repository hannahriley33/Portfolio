import React from 'react';
import landingStyles from './landingStyles.css';
import landingBeanie from '../../assets/landingBeanie.jpg';

const Landing = () => {
  
  return (
    <div className={landingStyles.mainDiv}>
      <img className={landingStyles.mainPic} src={landingBeanie}></img>
      <div className={landingStyles.rightDiv}> 
        <div className={landingStyles.welcomeText}>
          <p>
            {'Full-stack developer with a particular passion for solving human-facing problems. I thrive in environments where collaboration is key to building elegant and clean projects. I strongly value companies that support career growth and professional development. Previous positions have allowed me to hone in on my communication, creativity, and adaptability skills. Transitioning into web development has taught me that I can learn anything that I put a strong effort into. I am excited to tackle new challenges and learn new technologies.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;

