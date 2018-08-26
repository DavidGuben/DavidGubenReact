import React from 'react'

import Nav from './../Nav/Nav'
import Hero from './../Hero/Hero'
import Portfolio from './../Portfolio/Portfolio'
import Footer from './../Footer/Footer'

const Layout = () => {
    return (
        <div>
            <Nav/>
            <Hero/>
            <Portfolio/>
            <Footer/>
        </div>
    );
}

export default Layout