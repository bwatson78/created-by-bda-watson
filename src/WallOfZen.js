import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class WallOfZen extends Component {
  render() {
    return (
      <Container>
      	<Row>
	   	  <h2 className="projectHeader">Wall Of Zen</h2>
	   	</Row>
	   	<Row>
	   	  <ul>
	   	    <li>
	   	      <a 
	   	        href="https://github.com/bwatson78/wall-of-zen-react-v-000" 
	   	        target="_blank" 
	   	        rel="noopener noreferrer"
	   	      >
	   	        React Frontend
	   	      </a>  
	   	      <small> (Github)</small>
	   	    </li>
	   	    <li>
	   	      <a 
	   	        href="https://github.com/bwatson78/wall-of-zen-api-v-000"
	   	        target="_blank"
	   	        rel="noopener noreferrer"
	   	      >
	   	        Rails API
	   	      </a>
	   	      <small> (Github)</small>
	   	    </li>
	   	  </ul>
	   	</Row>
	   	<Row> 
	   	  <Col>
	   	    <p>
	   	      A repository of art encompassing my passions in life. The main page uses React with a Redux-wired common state throughout. Google's image search API call is integrated so that the images can be sourced within the same domain. Rails was used to create the API where the image links are held.
	   	    </p>
	   	    <p>
	   	      I will be integrating this code into my main site as a feature, and also expanding the category attribute capabilities.
	   	    </p>
	   	  </Col>
	   	</Row> 
      </Container>
    )
  }
};

export default WallOfZen;