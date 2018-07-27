import React, {Component} from 'react'
import {View} from 'mdbreact'

import IntroCard from './IntroCard'

import './Intro.css'

class Intro extends Component {
    render() {
        return (
            <View className="hm-blue-strong">
                <div className="intro z-depth-1-half animated fadeIn">
                    <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="intro-content text-center">       
                            <IntroCard />
                        </div>
                    </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default Intro
