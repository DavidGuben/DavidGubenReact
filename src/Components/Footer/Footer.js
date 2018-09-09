import React, {Component} from 'react'

import './Footer.css'

class Footer extends Component {
    render() {
        return (
          <footer className="page-footer unique-color-dark pt-0">
          
            <div className="primary-color">
                <div className="container">     
                    <div className="row py-4 d-flex align-items-center wow fadeIn" data-wow-delay="0.6s">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0 white-text">Add me on social media</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a className="fb-ic ml-0" href="https://www.facebook.com/dguben" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook white-text mr-4"> </i>
                            </a>
                            <a className="li-ic" href="https://www.linkedin.com/in/david-guben-79b3063b/" taget="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic" href="https://www.instagram.com/davidjg6/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram white-text mr-lg-4"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-4 text-center text-md-left">
              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mb-4 wow fadeIn" data-wow-delay="0.8s">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Developer Resources</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="https://github.com/DavidGuben" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </p>
                  <p>
                    <a href="https://stackoverflow.com/users/6685923/david-guben" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 wow fadeIn" data-wow-delay="1.0s">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Sections</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="!#" target="_blank" rel="noopener noreferrer">My Portfolio</a>
                  </p>
                  <p>
                    <a href="!#" target="_blank" rel="noopener noreferrer">Contact Me</a>
                  </p>
                  <p>
                    <a href="!#" target="_blank" rel="noopener noreferrer">What I Do</a>
                  </p>
                </div>
        
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 wow fadeIn" data-wow-delay="1.2s">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Online Presence</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="!#" target="_blank" rel="noopener noreferrer">Behance</a>
                  </p>
                  <p>
                    <a href="!#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </p>
                  <p>
                    <a href="!#" target="_blank" rel="noopener noreferrer">Facebook</a>
                  </p>
                  <p>
                    <a href="!#" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </p>
                </div>
        
                <div className="col-md-4 col-lg-3 col-xl-3 wow fadeIn" data-wow-delay="1.4s">
        
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Contact</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fa fa-home mr-3"></i> New York, NY 
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-3"></i> davidjg6@gmail.com
                  </p>
                </div>
        
              </div>
            </div>
            <div className="footer-copyright py-3 text-center wow fadeIn" data-wow-delay="0.8s">
              2018 Copyright: <b>David G.</b>
            </div>
        
          </footer>
        )
    }
}

export default Footer