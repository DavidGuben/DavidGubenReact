import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'mdbreact';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
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

                <Navbar color="indigo" dark className="navbar navbar-expand-lg fixed-top" scrolling>
                <Container>
                    <NavbarBrand href="/">
                        <strong>David Guben</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Contact</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem href="#">Action</DropdownItem>
                                  <DropdownItem href="#">Another Action</DropdownItem>
                                  <DropdownItem href="#">Something else here</DropdownItem>
                                  <DropdownItem href="#">Something else here</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0 white-text">
                              <i className="fa fa-search fa-2x search-icon cyan-text"></i><input className="form-control mr-sm-2 mb-0 white-text" type="text" placeholder="" aria-label="Search" />
                            </form>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Container>
                </Navbar>


        );
    }
}

export default Nav;
