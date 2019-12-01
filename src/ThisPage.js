import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ThisPage extends Component {
  render() {
    return (
      <Container>
      	<Row>
		  <h2 className="projectHeader">
		  	<a 
	  			href="https://github.com/bwatson78/created-by-bda-watson"
      		target="_blank" 
 	      	rel="noopener noreferrer"
    		>
		  		This Page
		  	</a> (Github)
		  </h2>
		</Row>
		<Row>
		  <Col>
		   	<p>
		   	  This site, at the moment, is hardcoded in React. Soon, it will be fed data via a&nbsp;
		   	  <a 
	      		href="https://github.com/bwatson78/created-by-bda-watson-api"
	      		target="_blank" 
   	      	rel="noopener noreferrer"
	    		>
	      		Rails API
	    		</a> 
	    		&nbsp;(Github), as well as many other API's that will power multiple features. These features will include the incorporation of my initial Learn.co projects listed below, and others revolving around my interests and hobbies. Be on the lookout for
		   	</p>
	   	    <ul>
	   	      <li>Multiple Blogs all housed here, which include:</li>
	   	  	    <ul>
	   	  	      <li>my development blog</li>
	   	  		  <li>Sometimes, Crap Is Delicious, a blog about movies that look horrible, but are actually fun</li>
	   	  		  <li>The Wanderful Watsons, a travel blog written in collaboration with my wife</li>
	   	  		  <li>If I Had Known... an advice column meant to wake up those that think they can "figure life out eventually"</li>
	   	  		</ul>
	   	  	  <li>A custom newspage that scrapes all of my favorite blogs</li>
	   	  	</ul> 
		  </Col>
	   	</Row>
      </Container>
    )
  }
};

export default ThisPage;