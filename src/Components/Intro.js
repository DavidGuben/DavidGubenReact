import React, {Component} from 'react'
import {View} from 'mdbreact'

import './../App.css'
import './../Loaders.scss'

import Loader from 'react-loaders'
let loader = <Loader type="ball-rotate" />

function renderLoader() {
    return loader;
}

class Intro extends Component {
    render() {
        return (
            <View className="hm-blue-strong">
                <div className="intro z-depth-1 animated fadeIn">
                    <div className="row logo-container">
                    <div className="col-md-12">
                        {renderLoader(loader)}
                    </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default Intro
