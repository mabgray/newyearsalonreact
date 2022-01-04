
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import Location from './components/Location';
import About from './components/About';
import Navbar from './components/Navbar';


function App() {
  return (
  <div>
 
      <BrowserRouter>  
      <Navbar />
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/Location' component={Location} />
          <Route path='/about' component={About} />
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;