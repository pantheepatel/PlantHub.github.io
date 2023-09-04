// import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home';
import Plants from './pages/Plants';
import Contact from './pages/Contact';
import Header from './components/Header';
import BodyMain from './components/BodyMain';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
// import PlantCard from './components/PlantCard';
// import Plants from './pages/Plants';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap' from ''
export default function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='plant' element={<Plants />} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path='/' element={<Home />} /> */}
        </Routes>
      </Router>
      {/* <Router>
        <Header></Header>
        <Plants></Plants>
        <BodyMain></BodyMain>
        <Footer></Footer>
      </Router> */}
    </div>
  )
}