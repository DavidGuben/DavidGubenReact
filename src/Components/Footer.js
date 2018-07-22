import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer unique-color-dark pt-0"> 
            <div className="primary-color">
                <div className="container">     
                    <div className="row py-4 d-flex align-items-center wow fadeIn" data-wow-delay="0.6s">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a className="fb-ic ml-0">
                                <i className="fa fa-facebook white-text mr-4"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fa fa-twitter white-text mr-4"> </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fa fa-google-plus white-text mr-4"> </i>
                            </a>
                            <a className="li-ic">
                                <i className="fa fa-linkedin white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fa fa-instagram white-text mr-lg-4"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-4 text-center text-md-left">
              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mb-4 wow fadeIn" data-wow-delay="1.2s">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Company Name</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>Footer content</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 wow fadeIn" data-wow-delay="1.8s">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Products</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="!#">Bootstrap</a>
                  </p>
                  <p>
                    <a href="!#">Wordpress</a>
                  </p>
                  <p>
                    <a href="!#">David</a>
                  </p>
                  <p>
                    <a href="!#">Cool thing</a>
                  </p>
                </div>
        
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 wow fadeIn" data-wow-delay="2.4s">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Useful links</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="!#">Your account</a>
                  </p>
                  <p>
                    <a href="!#">Become an affiliate</a>
                  </p>
                  <p>
                    <a href="!#">Shipping rates</a>
                  </p>
                  <p>
                    <a href="!#">Help</a>
                  </p>
                </div>
        
                <div className="col-md-4 col-lg-3 col-xl-3 wow fadeIn" data-wow-delay="3.0s">
        
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Contact</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fa fa-home mr-3"></i> New York, NY 10012 US
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-3"></i> david@exaple.com
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-3"></i> 123 456 1231
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-3"></i> 1231 133 1454
                  </p>
                </div>
        
              </div>
            </div>
        
            <div className="footer-copyright py-3 text-center wow fadeIn" data-wow-delay="3.6s">
              2018 Copyright: <a href="https://davidguben.com">David G.</a>
            </div>
        
          </footer>
        )
    }
}

export default Footer