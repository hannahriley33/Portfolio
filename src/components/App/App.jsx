import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../Header/Header';
import Resume from '../Resume/Resume.jsx';

export default function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/resume" component={Resume} />
          {/* <img src={} /> */}
        </Switch>
      </Router>
    </>
  );
}
