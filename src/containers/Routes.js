import React, { Component } from 'react';
import { Route } from "react-router-dom";
import About from './About.js';

class Routes extends Component {
  render() {
    return (
      <div>
      	<Route path='/' exact component={About}/>
      	<Route/>
      	<Route/>
      </div>	
    );
  }
}

export default Routes;