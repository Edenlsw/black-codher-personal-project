import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

import './App.css';
import About from './components/Pages/About.js';
import HowItWorks from './components/Pages/HowItWorks.js';
import GetStarted from './components/Pages/GetStarted.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/HowItWorks' exact component={HowItWorks} />
          <Route path='/GetStarted' exact component={GetStarted} />
          {/* <Route path='/Results' exact component= {Results}/> */}
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
