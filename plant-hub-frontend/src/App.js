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
import PlantCare from './pages/PlantCare';
import User from './pages/User';
import FAQ from './pages/FAQ';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
// import 'react-bootstrap' from ''
export default function App() {
  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Router>
        <Header></Header>
        <button onClick={goToTop} className='z-20 fixed-bottom w-fit ml-auto mr-3 mb-2' ><ArrowCircleUpIcon sx={{ fontSize: 40 }} /></button>
        <div className="mainBodySection">
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
          <Route path='plantcare' element={<PlantCare />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='contact' element={<Contact />} />
          <Route path='auth' element={<LogIn />} />
          <Route path='user/:id' element={<User />} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        </div>

        {/* <button onClick={goToTop}>ajdkfhn</button> */}
      </Router>
    </div>
  )
}

// Your Green Knowledge Hub
// Cultivate Your Green Thumb
// Where Nature Enthusiasts Connect, Learn, and Grow Together.