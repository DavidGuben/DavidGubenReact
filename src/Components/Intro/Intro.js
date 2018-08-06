import React, {Component} from 'react'
import {View} from 'mdbreact'

import HeroCard from './HeroCard'

import './Intro.css'

class Intro extends Component {
    render() {
        return (
            <View className="hm-blue-strong">
                <div className="intro z-depth-1-half animated fadeIn">
                    <div>
                        <div className="d-flex justify-content-center">
                            <HeroCard />
                        </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default Intro
