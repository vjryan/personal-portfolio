import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
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
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
