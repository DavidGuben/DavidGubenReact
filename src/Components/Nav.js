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
            active: true,
            menuItems: [
                {uid: 'home'},
                {uid: 'about'},
                {uid: 'portfolio'},
                {uid: 'contact'}
            ],
        };

    this.onClick = this.onClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.activeToggle = this.activeToggle.bind(this)
    this.activeMenuId = this.activeMenuId.bind(this)

    }

    activeMenuId() {
        return {
            activeMenuItemUid: 'home'
        };
    }

    setActiveId(uid) {
        this.setState({
            activeMenuItemUid: uid
        });
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    activeToggle() {
        this.setState({
            active: !this.state.active
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
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } /> }
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left className="">
                          <NavItem>
                            <NavLink 
                                to="/About" 
                                activeStyle={{backgroundColor: 'rgb(211,211,211,0.1)'}}>
                                About
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink 
                                to="/Portfolio"
                                activeStyle={{backgroundColor: 'rgb(211,211,211,0.1)'}}>
                                Portfolio
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink 
                                to="/Contact"
                                activeStyle={{backgroundColor: 'rgb(211,211,211,0.1)'}}>
                                Contact
                            </NavLink>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
        );
    }
}

export default Nav
