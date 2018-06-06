import React, {Component} from 'react'
import {Container} from 'mdbreact'

import Service from './Service'

class Features extends Component {
    render() {
        return (
            <Container>
            <div id="best-features" className="text-center">
                <h2 style={{ marginTop: '20px' }}>Services</h2>
                <div className="row d-flex justify-content-center mb-4">
                <div className="col-md-8">
                    <p className="grey-text">Website creation</p>
                </div>
                </div>

                <div className="row">
                <Service
                    heading="Design"
                    description="Design idea">
                    <i className="fa fa-pencil fa-4x" style={{color: '#4d7ea8'}}></i>
                </Service>

                <Service
                    heading="Develop"
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
export default Features
