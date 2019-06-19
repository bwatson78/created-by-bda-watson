import React, { Component } from 'react';
import { Route } from "react-router-dom";
import About from './About.js';
import Portfolio from './Portfolio.js';
import Blog from './Blog.js';

class Routes extends Component {
  render() {
    return (
      <div>
      	<Route path='/' exact component={About}/>
      	<Route path='/portfolio' component={Portfolio}/>
      	<Route path='/blogs' component={Blog}/>
      </div>	
    );
  }
}

export default Routes;