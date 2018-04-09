import React, {Component} from 'react';
import {Container} from 'mdbreact';

class Features extends Component {
    render() {
        return (
            <Container>

            <div id="best-features" className="text-center">

                <h2 style={{ marginTop: '20px' }}>Features</h2>

                <div className="row d-flex justify-content-center mb-4">

                <div className="col-md-8">

                    <p className="grey-text">Lorem ipsum description</p>

                </div>

            </div>

            <div className="row">

            <div className="col-md-4 mb-5">
                <i className="fa fa-camera-retro fa-4x orange-text"></i>
                <h4 className="my-4 font-weight-bold">Experience</h4>
                <p className="grey-text">Lorem ipsum description</p>
            </div>

            <div className="col-md-4 mb-1">
                <i className="fa fa-heart fa-4x orange-text"></i>
                <h4 className="my-4 font-weight-bold">Happiness</h4>
                <p className="grey-text">Lorem ipsum description</p>
            </div>

            <div className="col-md-4 mb-1">
                <i className="fa fa-bicycle fa-4x orange-text"></i>
                <h4 className="my-4 font-weight-bold">Adventure</h4>
                <p className="grey-text">Lorem ipsum description</p>
            </div>
            </div>
            </div>
            </Container>
        )
    }
}
export default Features