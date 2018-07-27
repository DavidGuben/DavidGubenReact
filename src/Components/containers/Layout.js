import React from 'react'

import Nav from './../Nav/Nav'
import Intro from './../Intro/Intro'
import Services from './../Services/Services'
import Portfolio from './../Portfolio/Portfolio'
import Footer from './../Footer/Footer'

const Layout = () => {
    return (
        <div>
            <Nav/>
            <Intro/>
            <Services/>
            <Portfolio/>
            <Footer/>
        </div>
    );
}

export default Layout