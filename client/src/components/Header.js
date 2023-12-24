import React from 'react'
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Form from 'react-bootstrap/Form';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-tertiary">
    <Container fluid>
      <LinkContainer to="/">
        <Navbar.Brand>eliteESTATE</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0 active fs-5" navbarScroll>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form className="d-flex mx-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
                <LinkContainer to="/login">
                  <div className="text-center">
                    <Button className="mx-2">Login</Button>
                  </div>
                </LinkContainer>

                <LinkContainer to="/createuser">
                  <div className="text-center">
                    <Button className="mx-2">Signup</Button>
                  </div>
                </LinkContainer>
              </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
