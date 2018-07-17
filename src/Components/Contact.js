import React, {Component} from 'react'
import {Container, Row, Col, Input, Button, Fa} from 'mdbreact'

import './../App.css'

class Contact extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col md="6" className="contact-form">
                        <form>
                        <p className="h5 text-center mb-4">Contact me</p>
                        <div className="grey-text">
                            <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                            <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                            <Input label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
                            <Input type="textarea" rows="2" label="Your message" icon="pencil"/>
                        </div>
                        <div className="text-center">
                            <Button outline color="secondary">Send <Fa icon="paper-plane-o" className="ml-1"/></Button>
                        </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact