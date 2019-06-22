import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./containers/Header.js";
import Routes from "./containers/Routes.js";
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Header />
        <Routes />
        <Footer />
      </Router>
    );
  }
}

export default App;
