import React, { Component } from 'react'
import Nav from './Components/Nav'
import './App.css'

import Intro from './Components/Intro'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
        <Services />
        <Portfolio />
        <Footer />
       </div>
    )
  }
}

export default App
