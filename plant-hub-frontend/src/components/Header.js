import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter,NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {

  return (
    <div>
      <Navbar className='fixed-top' bg="dark" data-bs-theme="dark">
        <Container>
          {/* to home */}
          <Navbar.Brand to="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* to home */}
            <NavLink to="">Home</NavLink>
            {/* to plantList page */}
            <NavLink to="plants">Plants</NavLink>
            {/* to contact page */}
            <NavLink to="contact">Contact Us</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header