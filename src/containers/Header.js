import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Container>
          <Row>
            <Col></Col>
            <Col><h1 className="headline">Created By B.D.A. Watson</h1></Col>
            <Col>
              <SocialIcon url="http://twitter.com/BradleyWatson"/>
              <SocialIcon url="http://github.com/bwatson78"/>
              <SocialIcon url="mailto:brad.watson.orlando@gmail.com"/>
              <SocialIcon url="https://www.pinterest.com/bradwatsonorlan/"/>
            </Col>
          </Row>
          <Row>
            <Navbar bg="dark" variant="dark" expand="lg">
              <nav className="main-nav">
                <Link to='/'>About B.D.A.</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/blogs'>Blogs</Link>
              </nav>
            </Navbar>
          </Row>
        </Container>
      </header>
      )
  }
}

export default Header;