import React from 'react';
import { Link } from 'react-router-dom';
import styles from './headerStyles.css';

const Header = () => {

  return (
    <section className={styles.parent}>
      <div className={styles.git}>
        <Link to="/projects"> <p className={styles.gitLink}>Projects</p> </Link>
      </div>
      <div className={styles.site}>
        <Link to="/resume"><p className={styles.siteLink}>Resume</p></Link>
      </div>
    </section>
  );
};

export default Header;
