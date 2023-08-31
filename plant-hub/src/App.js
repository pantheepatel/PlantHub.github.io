// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BodyMain from './components/BodyMain';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <BodyMain></BodyMain>
        <Footer></Footer>
      </Router>
    </div>
  )
}