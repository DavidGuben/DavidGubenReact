import React, {Component} from 'react'
import {View} from 'mdbreact'

import './../App.css'
import Logo from './../Images/logo.svg'

class Intro extends Component {
    render() {
        return (
            <View className="hm-blue-strong">
                <div className="intro z-depth-1 animated fadeIn">
                    <div className="row logo-container">
                    <div className="col-md-12">
                        <img src={Logo} alt="logo" width="150" height="150" className="logo-svg" />
                    </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default Intro
