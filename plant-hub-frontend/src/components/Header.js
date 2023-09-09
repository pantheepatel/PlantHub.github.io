import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import ForestIcon from '@mui/icons-material/Forest';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonIcon from '@mui/icons-material/Person';
// import logo from '../../public/planthub-logo-zip-file/wordmark.png';
import wordmark from '../images/planthub-logo-zip-file/wordmark.png'
import wordmark2 from '../images/planthub-logo-zip-file/wordmark-2.png'
import wordmark3 from '../images/planthub-logo-zip-file/wordmark-3.png'
// import '../App.css'
function Header() {

  return (
    <div>
      <Navbar expand="lg" className='fixed-top' bg="dark" data-bs-theme="dark">
        <Container className=''>
          <Navbar.Brand>
            <Link to=''>
              <img src={wordmark3} alt="plantHub" className='App-logo' />
              {/* <Navbar.Img src='../../public/planthub-logo-zip-file/wordmark.png'></Navbar.Img> */}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="me-7 gap-5">
              <NavLink className='navLink' to=""><HomeIcon /> Home</NavLink>
              <NavLink className='navLink' to="plants"><ForestIcon /> Plants</NavLink>
              <NavLink className='navLink' to="contact"><SupportAgentIcon /> Contact Us</NavLink>
              <NavLink className='navLink' to="signIn"><PersonIcon /> Sign In</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header