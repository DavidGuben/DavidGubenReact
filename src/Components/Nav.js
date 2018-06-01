import React, {Component} from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler,
        Collapse, NavItem, NavLink, Dropdown, DropdownToggle,
        DropdownMenu, DropdownItem, Container } from 'mdbreact'

class Nav extends Component {
    state = {
        colors: ['#272932', '#4d7ea8', '#828489', '#9e90a2', '#b6c2d9']
    }
    
    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this)
    this.toggle = this.toggle.bind(this)
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
                <Navbar style={{backgroundColor: '#272932'}} dark className="navbar navbar-expand-lg" scrolling>
                <Container className="animated fadeInDown">
                    <NavbarBrand href="/">
                        <strong>DG</strong> | Web Development
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/">About</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/">Portfolio</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/">Contact</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/">Social Media</NavLink>
                          </NavItem>
                          <NavItem className="drop-down-menu">
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Dropdown</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem href="#">Action</DropdownItem>
                                  <DropdownItem href="#">Another Action</DropdownItem>
                                  <DropdownItem href="#">Something else here</DropdownItem>
                                  <DropdownItem href="#">Something else here</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Container>
                </Navbar>


        );
    }
}

export default Nav
