import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../css/navbar.css';  // Custom styles

const NavBar = () => {
  return (
    <Navbar  fixed="bottom" bg="" variant="dark" className="justify-content-between px-5">
      <Navbar.Brand href="#home" className="brand">ikow.</Navbar.Brand>
      <div className='separator'></div>
      <Nav className='navlink-1'>
        <Nav.Link href="#resume">Resume</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
      </Nav>
      <Nav className='navlink-2'>
        <Nav.Link href="https://www.linkedin.com/in/muh-rizal-sakti-djatmieka/"><FaLinkedin /></Nav.Link>
        <Nav.Link href="https://github.com/Ikow-g"><FaGithub /></Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
