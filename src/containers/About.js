import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class About extends Component {
  render() {
    return (
      <Container>
      	<Row>
	      <Col md={3}>
	      	<Image src={process.env.PUBLIC_URL + '/headshot.jpeg'} rounded fluid />
	      </Col>
		  <Col>
		    <p>
		   	  Brad D.A. Watson is a Full-Stack Web Developer, focused on the Ruby 
		   	  on Rails and React/Redux frameworks.
		   	</p>
		   	<p>
		   	  His professional experience (a year and a half) encompasses the front- 
		   	  and back-end of Ruby on Rails. Brad has utilized vanilla Javascript, 
		   	  jQuery, AJAX, HTML5/CSS3, CRON, and ERB while working on Leland 
		   	  Management's client-facing and administrative sites. During his stint 
		   	  at BioIQ, he worked remotely as a Software Support Engineer, debugging 
		   	  and programming the back-end automation of patients' email notifications 
		   	  and clients' report delivery. All of the previously mentioned languages, plus 
		   	  HAML, Ruport, and CSV were used daily by Brad at BioIQ. 
		   	</p> 
		   	<p>
		   	  When not soaking in the radiation rays from a computer monitor, Brad geeks out
		   	  on all things cinema. 
		   	</p>
		  </Col>
	   	</Row>
	  </Container>  
    )
  }
}

export default About;