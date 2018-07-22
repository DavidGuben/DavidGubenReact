import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink,
    Collapse, Container, Button, Row, Col, Fa, Input,
    Modal, ModalBody, ModalFooter
     } from 'mdbreact'
import './Nav.css'
class Nav extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,
            active: false,
            modal: false
        };

    this.onClick = this.onClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.toggleClass = this.toggleClass.bind(this)

    }

    toggleClass() {
        this.setState({ 
            active: !this.state.active 
        })
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

    render() {
        return (
            <div>
            <Navbar style={{ backgroundColor: '#272932' }} dark className="navbar navbar-expand-lg" fixed="top" scrolling>
                <NavbarBrand href="/">
                    <strong>DG</strong> | Web Development
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } /> }
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                        <NavItem>
                            <NavLink 
                            to="/About"
                            activeStyle={{ backgroundColor: 'rgb(211,211,211,0.1)' }}>
                            About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to="/Portfolio"
                            activeStyle={{ backgroundColor: 'rgb(211,211,211,0.1)' }}>
                            Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to=""
                            className="z-depth-2"
                            activeClassName="contact-button"
                            onClick={this.toggle}>
                            Contact
                            </NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>

        <Container onClick={this.toggleClass} className={this.state.active ? 'animated fadeOut': null}>
        <Row>
          <Col md="6">
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal animated fadeInDown">
              <div className="modal-header primary-color white-text">
                <h4 className="title">
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
      </Container>
      </div>
        );
    }
}

export default Nav
