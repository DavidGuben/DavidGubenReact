import React, {Component} from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler,
        Collapse, NavItem, NavLink } from 'mdbreact'

class Nav extends Component {
    state = {
        colors: ['#272932', '#4d7ea8', '#828489', '#9e90a2', '#b6c2d9']
    }
    
    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,
            active: true
        };

    this.onClick = this.onClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.activeToggle = this.activeToggle.bind(this)

    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    activeToggle() {
        this.setState({
            active: !this.state.active,
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
               
                    <NavbarBrand href="/">
                        <strong>DG</strong> | Web Development
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left className="">
                          <NavItem 
                            active={ this.state.active } 
                            onClick={ this.activeToggle }>
                              <NavLink to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/About">About</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Portfolio">Portfolio</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Contact">Contact</NavLink>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                
                </Navbar>


        );
    }
}

export default Nav
