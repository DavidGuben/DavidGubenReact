import React, { Component } from 'react'

import './App.css'

import Nav from './Components/Nav/Nav'
import Intro from './Components/Intro/Intro'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro header="David Guben" content="Web Developer" />
        <Services />
        <Portfolio />
        <Footer />
       </div>
    )
  }
}

export default App
