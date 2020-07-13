import React from 'react';
import landingStyles from './landingStyles.css';
import landingBeanie from '../../../public/landingBeanie.jpeg';

const Landing = () => {
  
  return (
    <div className={landingStyles.mainDiv}>
      <img className={landingStyles.mainPic} src={landingBeanie}></img>
      <div className={landingStyles.welcomeText}>
        <h1 className={landingStyles.title}>{'Hi there, I\'m Hannah'}</h1>
        <p className={landingStyles.mainParagraph}>
          {'Welcome to my site! I\'m a full-stack developer with a particular passion for solving human-facing problems. I\'m seeking Back End Development opportunities with an emphasis on testing, and I\'m absolutely thrilled at the possibility of learning new languages. For more details on my tech stack and projects, please visit my portfolio.'}
        </p>
      </div>
    </div>
  );
};

export default Landing;

