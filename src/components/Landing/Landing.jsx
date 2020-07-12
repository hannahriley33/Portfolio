import React from 'react';
import styles from './landingStyles.css';
import landingBeanie from '../../assets/landingBeanie.jpeg';

const Landing = () => {
  
  return (
    <div className={styles.mainDiv}>
      <img className={styles.mainPic} src={landingBeanie}></img>
      <div className={styles.welcomeText}>
        <h1 className={styles.title}>{'Hi there, I\'m Hannah'}</h1>
        <p>
          {'Full-stack developer with a particular passion for solving human-facing problems. I thrive in environments where collaboration is key to building elegant and clean projects. I strongly value companies that support career growth and professional development. Previous positions have allowed me to hone in on my communication, creativity, and adaptability skills. Transitioning into web development has taught me that I can learn anything that I put a strong effort into. I am excited to tackle new challenges and learn new technologies.'}
        </p>
      </div>
    </div>
  );
};

export default Landing;

