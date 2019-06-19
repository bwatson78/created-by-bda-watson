import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import BlogBlurb from '../BlogBlurb.js';

class Blog extends Component {
  render() {
    return (
      <Container className="main">
        <h2>Development Blog</h2>
      	<BlogBlurb />
	  </Container>  
    )
  }
};

export default Blog;