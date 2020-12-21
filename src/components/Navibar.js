import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

function Navibar () {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
        <Navbar.Brand><Link to="/">React-Redux-Bootstrap App</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as='span'><Link to="/">Home</Link></Nav.Link>
            <Nav.Link as='span'><Link to="/list">ListManager</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navibar;