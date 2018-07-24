import React, {Component} from 'react'
import {View} from 'mdbreact'

import './Intro.css'

class Intro extends Component {
    render() {
        return (
            <View className="hm-blue-strong">
                <div className="intro z-depth-1 animated fadeIn">
                    <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="intro-content">       
                            <h1 className="text-center">Test</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default Intro
