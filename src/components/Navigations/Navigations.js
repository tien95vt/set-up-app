import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import NavigationItem  from "./NavigationItem/NavigationItem";

const navigations = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>App Name</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavigationItem url="route1" name="Route 1"/>
          <NavigationItem url="route2" name="Route 2"/>
        </Nav>
        <Nav>
          <NavigationItem url="login" name="Login" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navigations;