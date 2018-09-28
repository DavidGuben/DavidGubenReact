import React, {Component} from 'react';
import {View} from 'mdbreact';

import movie from '../../Images/AnimatedSmoke_LQ-MOBILE.mp4'
import HeroCard from '../HeroCard/HeroCard';
import './Hero.css';

class Intro extends Component {
    render() {
        return (
            <View>
                <video width="3000vh" autoPlay loop style={{position: 'absolute', opacity: 0.3}}>
                    <source src={movie} type="video/mp4"/>
                </video>
                <div className="intro z-depth-1-half animated fadeIn">
                    <HeroCard />
                </div>
            </View>
        );
    }
}

export default Intro;
