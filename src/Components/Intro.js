import React, {Component} from 'react'
import './../App.css';

class Intro extends Component {
    render() {
        return (
            <div>
                <img className="intro" src={require('./../Images/solar-landscape-v02_01.jpg')} alt="intro" />
                <div className="intro z-depth-1"></div>
            </div>
        );
    }
}

export default Intro;
