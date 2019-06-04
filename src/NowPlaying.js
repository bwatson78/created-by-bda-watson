import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NowPlaying extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h2 className="projectHeader">
		    <a 
		      href="https://github.com/bwatson78/now-playing-pod-gem"
		      target="_blank" 
	   	      rel="noopener noreferrer"
		    >
		      Now Playing Podcast GEM
		    </a> 
		      <small> (Github)</small>
		  </h2>
        </Row>
        <Row>
          <Col>
            <p>
              Ruby GEM that utilizes Nokogiri to scrape Now Playing Podcast's XML feed for all of the podcasts they offer and displays them in descending order.
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default NowPlaying;

