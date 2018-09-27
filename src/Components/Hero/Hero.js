import React, {Component} from 'react';
import {View} from 'mdbreact';

import HeroCard from '../HeroCard/HeroCard';
import animatedSmoke from './../../Images/AnimatedSmoke_LQ.mp4';
import './Hero.css';

class Intro extends Component {
    render() {
        return (
            <View>
                <video width="3000vh" style={{position: 'absolute', opacity: 0.4}} autoPlay loop>
                    <source src={animatedSmoke} type="video/mp4"></source>
                </video>
                <div className="intro z-depth-1-half animated fadeIn">
                    <HeroCard />
                </div>
            </View>
        );
    }
}

export default Intro;
