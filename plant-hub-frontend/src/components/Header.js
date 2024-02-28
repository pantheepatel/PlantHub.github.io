import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home';
import ForestIcon from '@mui/icons-material/Forest';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonIcon from '@mui/icons-material/Person';
import SpaIcon from '@mui/icons-material/Spa';
import QuizIcon from '@mui/icons-material/Quiz';
// import logo from '../../public/planthub-logo-zip-file/wordmark.png';
import wordmark from '../images/planthub-logo-zip-file/wordmark.png'
import wordmark2 from '../images/planthub-logo-zip-file/wordmark-2.png'
import wordmark3 from '../images/planthub-logo-zip-file/wordmark-3.png'
import LanguageSwitcher from './LanguageSwitcher'
// import { useState,useEffect } from 'react';
// import SignIn from '../pages/SignIn';
// import '../App.css'
// import { localStorage } from 
// import {useAuthState} from "react-firebase-hooks/auth"
// import { GoogleAuthProvider } from 'firebase/auth';
// import { GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../Config'
import LogIn from '../pages/LogIn';
import LogOut from '../pages/LogOut';
import { Login } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap';
import { useMediaQuery } from "react-responsive";

function Header() {
  // const [user] =useAuthState(GoogleAuthProvider);
  // console.log(auth.currentUser?auth.currentUser:'none')
  // console.log(localStorage.getItem('email'))
  // const u=auth.currentUser;
  // const [user,setUser]=useState('')
  // useEffect(() => {
  //   setUser(auth.currentUser)
  //   console.log('user is ',user)
  // })

  var isLoggedIn = false
  if (localStorage.getItem('email')) { isLoggedIn = true }
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: light)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  const changeMode = () => {
    setIsDark(!isDark);
    console.log(isDark);
  }
  // const systemPrefersDark = useMediaQuery(
  //   {
  //     query: "(prefers-color-scheme: dark)",
  //   },
  //   undefined,
  //   (isSystemDark) => setIsDark(isSystemDark)
  // );

  return (
    <div>
      <Navbar expand="lg" className={colorChange ? 'header-color-scroll z-10 w-100 position-fixed top-0' : 'header-color z-10 w-100 position-fixed top-0'} bg="" data-bs-theme="">
        <Container className=''>
          <Navbar.Brand>
            <Link to=''>
              <img src={wordmark3} alt="plantHub" className='App-logo' />
            </Link>
          </Navbar.Brand>
          {/* <LanguageSwitcher/> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={colorChange ? 'bg-success' : 'bg-none '} />
          <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
            <Nav className="me-7 gap-1.5 lg:gap-5">
              {/* <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to=""><HomeIcon /> <span>Home</span></NavLink> */}
              <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to="plants"><ForestIcon /> <span>Plants</span></NavLink>
              <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to="plantcare"><SpaIcon /> <span>Plant Care</span></NavLink>
              <NavDropdown title={"Other"} className='nav-dropdown' id="nav-dropdown">
                <NavDropdown.Item>
                  <NavLink className='navLink' to="faq"><QuizIcon /> <span>FAQ</span></NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className='navLink' to="contact"><SupportAgentIcon /> <span>Contact Us</span></NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className={colorChange ? 'navLink-scroll' : 'navLink'} to="auth">
                <PersonIcon />
                {isLoggedIn ? 'LogOut' : 'Login'}
              </NavLink>
              {/* <Button onClick={changeMode}>
                {isDark ? 'light' : 'dark'}
              </Button> */}

              {/* <NavLink className={colorChange?'navLink-scroll':'navLink'} to={`plants&page=`}><ForestIcon /> <span>Plants</span></NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header