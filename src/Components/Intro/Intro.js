import React, {Component} from 'react';
import {View} from 'mdbreact';

import HeroCard from './HeroCard';

import './Intro.css'

class Intro extends Component {
    render() {
        return (
            <View>
                <div className="intro z-depth-1-half animated fadeIn">
                    <HeroCard />
                </div>
            </View>
        );
    }
}

export default Intro;
