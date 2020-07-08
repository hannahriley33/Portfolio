import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <section>
      <h1>Header!!!</h1>
      <Link to="/resume"><p>Resume</p></Link>
    </section>
  );
};

export default Header;
