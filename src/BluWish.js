import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class BluWish extends Component {
  render() {
    return (
      <Container>
        <Row>
		  <h2 className="projectHeader">
		    <a 
		      href="https://github.com/bwatson78/blu-ray-wish-list-v-000"
		      target="_blank" 
	   	      rel="noopener noreferrer"
		    >
		      BluRay Wish List
		    </a> 
		      <small> (Github)</small>
		  </h2>
		</Row>
		<Row>
		  <Col>
		    <p>
		      A BluRay Wish List site built completely with Ruby on Rails. Frontend uses jQuery and AJAX throughout.
		    </p>
		  </Col>
		</Row>
      </Container>
    )
  }
}

export default BluWish;