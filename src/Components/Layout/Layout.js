import React from 'react'

import Nav from './../Nav/Nav'
import Intro from './../Intro/Intro'
import Portfolio from './../Portfolio/Portfolio'
import Footer from './../Footer/Footer'

const Layout = () => {
    return (
        <div>
            <Nav/>
            <Intro/>
            <Portfolio/>
            <Footer/>
        </div>
    );
}

export default Layout