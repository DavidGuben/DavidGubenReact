import React, {Component} from 'react';

import './Intro.css';
import ReactLogo from './../../Images/React.svg';

class HeroCard extends Component {
    render() {
        return (
            <div className="d-flex">
                <div className="row">
                <div className="text-center"> 
                    <div className="col-md-12 intro-header">
                        <h1><b>David Guben</b></h1>
                        <p>React Web Developer</p>
                        <img src={ReactLogo} alt="react" className="animated rotate infinite"/>
                    </div>
                    
                    <div className="col-md-12 intro-content">React Developer</div>
                </div>
                </div>
            </div>
        );
    }
}

export default HeroCard;