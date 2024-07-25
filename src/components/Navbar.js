import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../css/navbar.css';  // Custom styles

const NavBar = () => {
  return (
    <Navbar  fixed="bottom" bg="" variant="dark" className="justify-content-between px-4">
      <Navbar.Brand href="#home" className="brand">ikow.</Navbar.Brand>
      <div className='separator'></div>
      <Nav className='navlink-1'>
        <Nav.Link href="https://drive.google.com/file/d/11bCozVIlz7pmtfwAgSo1SITfbJoxVTE8/view?usp=sharing" target='_blank'>Resume</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
      </Nav>
      <Nav className='navlink-2'>
        <Nav.Link href="https://www.linkedin.com/in/muh-rizal-sakti-djatmieka/" target='_blank'><FaLinkedin /></Nav.Link>
        <Nav.Link href="https://github.com/Ikow-g" target='_blank'><FaGithub /></Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
