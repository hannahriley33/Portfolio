import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <section>
      <Link to="/projects"> <p>Projects</p> </Link>
      <Link to="/resume"><p>Resume</p></Link>
    </section>
  );
};

export default Header;
