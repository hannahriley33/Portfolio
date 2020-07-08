import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../Header/Header';
import Resume from '../Resume/Resume.jsx';
import ProjectContainer from './Projects/ProjectContainer';

export default function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={ProjectContainer} />
          {/* <img src={} /> */}
        </Switch>
      </Router>
    </>
  );
}
