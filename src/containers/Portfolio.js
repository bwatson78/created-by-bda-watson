import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ThisPage from '../ThisPage.js';
import WallOfZen from '../WallOfZen.js';
import BluWish from	'../BluWish.js';
import NowPlaying from '../NowPlaying.js';

class Portfolio extends Component {
  render() {
    return (
      <Container className="main">
        <ThisPage />
	   	  <WallOfZen />
	   	  <BluWish />
	      <NowPlaying />
	    </Container>  
    )
  }
};

export default Portfolio;