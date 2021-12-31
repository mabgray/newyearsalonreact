
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import Location from './components/Location';
import About from './components/About';


function App() {
  return (
      <main>
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/Location' component={Location} />
          <Route path='/' component={About} />
          </Switch>
      </main>
  )
}

export default App;