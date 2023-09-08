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
          <Navbar.Brand to="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="">Home</NavLink>
            <NavLink to="plants">Plants</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header