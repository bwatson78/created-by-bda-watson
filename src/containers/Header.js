import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Container>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}><h1 className="headline">Created By B.D.A. Watson</h1></Col>
            <Col sm={4}>
              <SocialIcon url="http://twitter.com/BradleyWatson"/>
              <SocialIcon url="http://github.com/bwatson78"/>
            </Col>
          </Row>
        </Container>
      </header>
      )
  }
}

export default Header;