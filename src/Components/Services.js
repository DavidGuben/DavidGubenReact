import React, {Component} from 'react';
import {Container} from 'mdbreact';

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

            <div className="col-md-4 mb-5">
                <i className="fa fa-pencil fa-4x lime-text"></i>
                <h4 className="my-4 font-weight-bold">Design</h4>
                <p className="grey-text">Imagine idea</p>
            </div>

            <div className="col-md-4 mb-1">
                <i className="fa fa-code fa-4x lime-text"></i>
                <h4 className="my-4 font-weight-bold">Develop</h4>
                <p className="grey-text">Create idea</p>
            </div>

            <div className="col-md-4 mb-1">
                <i className="fa fa-thumbs-up fa-4x lime-text"></i>
                <h4 className="my-4 font-weight-bold">Publish</h4>
                <p className="grey-text">Deploy idea</p>
            </div>
            </div>
            </div>
            </Container>
        )
    }
}
export default Features
