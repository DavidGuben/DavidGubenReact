import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink,
         Collapse, Button, Row, Col, Fa, Input,
         Modal, ModalBody, ModalFooter } from 'mdbreact';
import Logo from '../../Images/dg-logo02.png'
import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isWideEnough: false,
            dropdownOpen: false,
            collapse: false,
            active: false,
            modal: false
        };

    this.onClick = this.onClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.toggleClass = this.toggleClass.bind(this)
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            modal: !this.state.modal
        });
    }

    toggleClass() {
        this.setState({ 
            active: !this.state.active 
        })
    }

    renderModal() {
        return (
            <Row>
            <Col md="6">
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal animated fadeInDown">
                <div className="modal-header white-text" style={{textAlign: 'center'}}>
                    <h4 className="title white-text">
                    <Fa className="fa fa-pencil" /> Contact form</h4>
                    <button type="button" className="close" onClick={this.toggle}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <ModalBody className="grey-text">
                    <Input size="sm" label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input size="sm" label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
                    <Input size="sm" type="textarea" rows="2" label="Your message" icon="pencil"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                    <Button color="primary">Send</Button>
                </ModalFooter>
            </Modal>
            </Col>
            </Row>
        );
    }

    render() {
        return (
            <div>
            {this.renderModal()}
            
            <Navbar style={{ backgroundColor: '#272932' }} dark className="navbar navbar-expand-lg animated fadeInDown" data-wow-delay="1.2s" scrolling>
            
                <NavbarBrand href="/" className="animated wow fadeIn" data-wow-delay="0.5s">
                    <img src={Logo} width="60" alt="logo"/>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } /> }
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left className="wow fadeIn" data-wow-delay="0.3s">

                        <NavItem>
                            
                            <NavLink 
                            to="/Portfolio"
                            activeClassName="active">
                            Portfolio
                            </NavLink>
                            
                        </NavItem>
                        
                        <NavItem>
                            <NavLink 
                            to=""
                            className="z-depth-2"
                            activeClassName="contact-button"
                            onClick={this.toggle}>
                            Contact me
                            </NavLink>
                        </NavItem>
                        
                    </NavbarNav>
                    
                </Collapse>
                
            </Navbar>
            
            </div>

        );
    }
}

export default Nav
