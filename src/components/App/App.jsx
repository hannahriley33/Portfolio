import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../Header/Header';
import Resume from '../Resume/Resume.jsx';
import ProjectList from '../Projects/ProjectList';
import Landing from '../Landing/Landing';
import Contact from '../Contact/Contact';
import styles from './appStyles.css';


export default function App() {

  
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}
