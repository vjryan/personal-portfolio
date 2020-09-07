import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './components/About';
import Project from './components/Project';
import Landing from './components/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/projects">
          <Project></Project>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/" exact>
          <Landing></Landing>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
