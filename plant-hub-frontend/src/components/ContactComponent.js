import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function ContactComponent() {
    return (
        <div>
            <div className="contactUsBg mb-0">
                <div className="container">
                    <div className="row align-content-center justify-content-center vh-100">
                        <div className="col-md-4 col-sm-4">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Phone Number</h5>
                                    <p className="card-text">
                                        <a href="tel:+917575860820">
                                            <CallIcon />
                                            <span className="">7575860820</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Email</h5>
                                    <p className="card-text">
                                        <a href="mailto:pantheepatel18@gmail.com">
                                            <EmailIcon />
                                            <span className="">pantheepatel18@gmail.com</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Address</h5>
                                    <p className="card-text">
                                        <a href="#">
                                            <LocationOnIcon />
                                            <span className="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ducimus tenetur
                                                nisi reprehenderit earum hic temporibus, molestiae odio, laborum doloremque
                                                ullam praesentium corporis omnis repellendus consequatur ut blanditiis nam illo.
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <div className="container d-flex mx-auto flex-column">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingName" placeholder="First Name" />
                                            <label for="floatingName">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingName" placeholder="Last Name" />
                                            <label for="floatingName">Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingEmail"
                                                placeholder="name@example.com" />
                                            <label for="floatingEmail">Email address</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-floating mb-3">
                                            <input type="number" className="form-control" id="floatingPhone"
                                                placeholder="+91 1234567890" />
                                            <label for="floatingPhone">Phone Number</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="subject" />
                                            <label for="floatingInput">Subject</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-floating">
                                            <textarea id="gfg" rows="10" className="form-control"
                                                placeholder="Write your message here"></textarea>
                                            <label for="gfg">Message</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="d-flex justify-content-center p-3">
                                            <button className='btn btn-success z-10'>Submit</button>
                                        </div>
                                        <div className="d-flex justify-content-center p-3">
                                            <div className="btn btn-success z-10" type="reset">Reset
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent