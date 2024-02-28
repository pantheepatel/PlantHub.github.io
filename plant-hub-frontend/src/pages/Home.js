// to give overview of website
import React from 'react'
import LogOut from './LogOut'
import img1 from '../../src/assets/single-image.png'
import img2 from '../../src/assets/pattern-overlay.png'
import img3 from '../../src/assets/pattern-overlay1.png'
import img4 from '../../src/assets/product-item.jpg'
import img5 from '../../src/assets/product-item1.jpg'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AdsClickIcon from '@mui/icons-material/AdsClick';
function Home() {

  return (
    <div className='container pt-10'>
      <div className='d-flex flex-col justify-content-center align-items-center'>
        <div className='welcomeText'>Welcome to <span className='planthubText'>PlantHub</span></div>
        <div className='taglineText'>Your Green Knowledge Hub</div>
      </div>
      <div className='d-flex justify-content-around row mt-5'> {/* Use justify-content-around to evenly distribute the cards horizontally */}
        <div className="col-10 col-md-4 my-2">
          <Card className="h-100"> {/* Set the height of the card to 100% */}
            <Card.Header className='w-100 text-center bg-success text-white text-xl d-flex align-items-center justify-content-center gap-2'>
              <AccountCircleIcon /> About Us
            </Card.Header>
            <Card.Body>Welcome to PlantHub, where our love for plants blossomed into a digital haven for enthusiasts. Founded by a passionate group of plant lovers, we're on a mission to create a vibrant community that celebrates the beauty of nature.</Card.Body>
          </Card>
        </div>
        <div className="col-10 col-md-4 my-2">
          <Card className="h-100"> {/* Set the height of the card to 100% */}
            <Card.Header className='w-100 text-center bg-success text-white text-xl d-flex align-items-center justify-content-center gap-2'>
              <AdsClickIcon /> Mission
            </Card.Header>
            <Card.Body>Empower and inspire a green world. PlantHub is dedicated to making plant knowledge accessible, promoting sustainable practices, and fostering a supportive community for plant enthusiasts to learn and grow.</Card.Body>
          </Card>
        </div>
        <div className="col-10 col-md-4 my-2">
          <Card className="h-100"> {/* Set the height of the card to 100% */}
            <Card.Header className='w-100 text-center bg-success text-white text-xl d-flex align-items-center justify-content-center gap-2'>
              <RemoveRedEyeIcon /> Vision
            </Card.Header>
            <Card.Body>Imagine a thriving digital ecosystem where diverse individuals unite, sharing experiences, expertise, and a common love for plants. At PlantHub, we envision cultivating not just gardens but connections, making the world a greener, happier place.</Card.Body>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default Home