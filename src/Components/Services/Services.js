import React, {Component} from 'react'
import {Container} from 'mdbreact'

import Service from './Service'

class Services extends Component {
    render() {
        return (
            <Container className="wow fadeIn" data-wow-delay="0.6s">
            <div id="best-features" className="text-center wow pulse">
                <h1 style={{ marginTop: '20px' }}><b>Services</b></h1>
                <div className="row d-flex justify-content-center mb-4">
                <div className="col-md-8">
                    <p className="grey-text">Web development services</p>
                </div>
                </div>

                <div className="row wow">
                <Service
                    className="wow pulse"
                    heading="Designer"
                    description="Design idea">
                    <i className="fa fa-pencil fa-4x" style={{color: '#4d7ea8'}}></i>
                </Service>

                <Service
                    heading="Develer"
                    description="Develop idea">
                    <i className="fa fa-code fa-4x" style={{color: '#4d7ea8'}}></i>
                </Service>    


                <Service
                    heading="Publish"
                    description="Publish idea">
                    <i className="fa fa-thumbs-up fa-4x" style={{color: '#4d7ea8'}}></i>
                </Service>
                </div>
            </div>
            </Container>
        )
    }
}
export default Services
