import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const navigationItem = (props) => {
  return (
    <LinkContainer to={props.url}>
      <Nav.Link>{props.name}</Nav.Link>
    </LinkContainer>
  );
};

export default navigationItem;