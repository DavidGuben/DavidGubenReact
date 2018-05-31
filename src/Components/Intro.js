import React, {Component} from 'react'
import {View, Mask} from 'mdbreact'

import './../App.css'
import Logo from './../Images/logo.svg'

class Intro extends Component {
    render() {
        return (
            <View className="hm-blue-strong">
                <div className="intro z-depth-1 animated fadeIn">
                <img src={Logo} alt="logo" width="100" height="100" className="App-logo" />
                <Mask />
                <div className="row">
                <div className="col-md-12" style={{marginTop: '350px'}}>
                    
                </div>
                </div>    
                </div>
            </View>
        );
    }
}

export default Intro;
