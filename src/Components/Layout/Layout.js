import React, {Component} from 'react'

import Nav from './../Nav/Nav'
import Hero from './../Hero/Hero'
import Portfolio from './../Portfolio/Portfolio'
import Footer from './../Footer/Footer'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
    return (
        <div>
            <Nav/>
            <Hero/>
            <Portfolio />
            <Footer/>
        </div>
    );
    }
}

export default Layout