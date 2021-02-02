import React from 'react';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

import './App.css';
import About from './components/Pages/About.js';
import HowItWorks from './components/Pages/HowItWorks.js';
import GetStarted from './components/Pages/GetStarted.js';
import Family from './components/Pages/Family.js';
import Random from './components/Pages/Random.js';
import Fun from './components/Pages/Fun.js';
import Nature from './components/Pages/Nature.js';
import Culture from './components/Pages/Culture.js';
import Active from './components/Pages/Active.js';
import filterService from './services/filterService';
import { Card } from './components/Card'






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
          <Route path='/Family' exact component={Family} />
          <Route path='/Random' exact component={Random} />
          <Route path='/Fun' exact component={Fun} />
          <Route path='/Nature' exact component={Nature} />
          <Route path='/Culture' exact component={Culture} />
          <Route path='/Active' exact component= {Active}/>
        </Switch>
      <Footer />
      </Router>
      
    </>
  );
}






export default App;








