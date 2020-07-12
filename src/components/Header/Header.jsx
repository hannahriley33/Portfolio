import React from 'react';
import { Link } from 'react-router-dom';
import styles from './headerStyles.css';

const Header = () => {

  
  return (
    <div className={styles.parent}>
    
      <div className={styles.home}>
        <Link to="/"><p className={styles.link}>Home</p></Link>
      </div>
      <div className={styles.projectGit}>
        <Link to="/projects"> <p className={styles.link}>Projects</p> </Link>
      </div>
      <div className={styles.site}>
        <Link to="/resume"><p className={styles.link}>Resume</p></Link>
      </div>
      <div className={styles.githubLink}>
        <a href="https://github.com/hannahriley33" target="blank"><p className={styles.link}>Github</p></a>
      </div>
      <div className={styles.linkedinLink}>
        <a href="https://www.linkedin.com/in/hannah-m-riley/" target="blank"><p className={styles.link}>Linkedin</p></a>
      </div>
    </div>
  );
};

export default Header;
