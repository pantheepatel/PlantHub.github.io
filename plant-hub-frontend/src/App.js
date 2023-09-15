// import logo from './logo.svg';
import './App.css';
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
import DetailedPage from './pages/DetailedPage';
import LogIn from './pages/LogIn';
import LogOut from './pages/LogOut';
import NotFound from './pages/NotFound';
// import 'react-bootstrap' from ''
export default function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          {/* home page will displayed having overview of all pages */}
          <Route path='' element={<Home />} />
          {/* plants overview page will display plants with overview */}
          {/* <Route path='plants' element={<Plants />} ></Route> */}
          <Route path='plants' element={<Plants />} ></Route>
          {/* <Route path={`plants&page=${page}`} element={<Plants />} ></Route> */}
          {/* whenever user clicks on particular plantCard it will redirect to its detailed page */}
          <Route path='plants/:id' element={<DetailedPage />}></Route>
          {/* contact page */}
          <Route path='contact' element={<Contact />} />
          <Route path='auth' element={<LogIn />} />  
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

// Your Green Knowledge Hub
// Cultivate Your Green Thumb
// Where Nature Enthusiasts Connect, Learn, and Grow Together.