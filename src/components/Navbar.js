import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../css/navbar.css';  // Custom styles

const NavBar = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand href="#home" className="brand">Ikow.</Navbar.Brand>
      <Nav>
        <Nav.Link href="#resume">Resume</Nav.Link>
        {/* <Nav.Link href="#blog">Blog</Nav.Link> */}
      </Nav>
      <Nav>
        <Nav.Link href="#linkedin"><FaLinkedin /></Nav.Link>
        <Nav.Link href="#github"><FaGithub /></Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
