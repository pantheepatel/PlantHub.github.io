// to give overview of website
import React from 'react'
import LogOut from './LogOut'
import img1 from '../../src/assets/single-image.png'
import img2 from '../../src/assets/pattern-overlay.png'
import img3 from '../../src/assets/pattern-overlay1.png'
import img4 from '../../src/assets/product-item.jpg'
import img5 from '../../src/assets/product-item1.jpg'
import { Link } from 'react-router-dom'
function Home() {

  return (
    <div>
      
    <section id="billboard" class="py-5 my-5">
      <div class="container">
        <div class="row d-flex align-items-center position-relative">
          <div class="col-md-3">
            <div class="icon-box pb-5 d-flex flex-wrap align-items-center justify-content-between">
              <div class="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span class="content-light">1</span>
              </div>
              <div class="icon-content">
                {/* <h3 class="box-title">Free Delivery</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p> */}
              </div>
            </div>
            <div class="icon-box pb-5 d-flex flex-wrap align-items-center  justify-content-between">
              <div class="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span class="content-light">2</span>
              </div>
              <div class="icon-content">
                {/* <h3 class="box-title">Wide Variety</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p> */}
              </div>
            </div>
            <div class="icon-box pb-5 d-flex flex-wrap align-items-center  justify-content-between">
              <div class="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span class="content-light">3</span>
              </div>
              <div class="icon-content">
                {/* <h3 class="box-title">Lanscaping</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p> */}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="image-holder text-center align-middle">
              <img src={img1} alt="banner"/>
            </div>
          </div>
          <div class="col-md-3">
            <div class="icon-box pb-5 d-flex flex-wrap align-items-center  justify-content-between">
              <div class="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span class="content-light">4</span>
              </div>
              <div class="icon-content">
                {/* <h3 class="box-title">Big Offers</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p> */}
              </div>
            </div>
            <div class="icon-box pb-5 d-flex flex-wrap align-items-center  justify-content-between">
              <div class="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span class="content-light">5</span>
              </div>
              <div class="icon-content">
                {/* <h3 class="box-title">100% Secure Payment</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p> */}
              </div>
            </div>
            <div class="icon-box pb-5 d-flex flex-wrap align-items-center  justify-content-between">
              <div class="icon-number bg-dark-gray rounded-circle text-white d-flex justify-content-center align-items-center">
                <span class="content-light">6</span>
              </div>
              <div class="icon-content">
                {/* <h3 class="box-title">Quality Guarantee</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pattern-overlay">
        <img src={img2} alt="pattern" class="position-absolute"/>
      </div>
      <div class="pattern-overlay1">
        <img src={img3} alt="pattern" class="position-absolute"/>
      </div>
    </section>

    <section id="featured-products" class="p-5">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-image position-relative image-zoom link-effect">
              <img src={img4} alt="plant"/>
            </div>
            <div class="card-body position-absolute content-light p-5 bottom-0">
              <h2 class="section-title text-white">Colorful Outdoors</h2>
              <div class="btn-box text-uppercase">
                <Link to="plants" class="text-decoration-none" data-after="Shop These">Go ---</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-image position-relative image-zoom link-effect">
              <img src={img5} alt="plant"/>
            </div>
            <div class="card-body position-absolute content-light p-5 bottom-0">
              <h2 class="section-title text-white">Frequent watering trees</h2>
              <div class="btn-box text-uppercase">
                <Link to="plants" class="text-decoration-none" data-after="Shop These">Go ---</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Home