import React, {Component} from 'react';

import './Intro.css';
import ReactLogo from './../../Images/React.svg';

class HeroCard extends Component {
    render() {
        return (
            <div className="d-flex">
                <div className="row text-center">
                
                    <div className="intro-header-container animated bounceIn">
                        <div className="col-md-12 intro-header">
                            <h1><b>David Guben</b></h1>
                            <p>App & Web Developer</p>
                            <img src={ReactLogo} alt="react" className="animated rotate infinite"/>
                        </div>
                    </div>

                    <div className="col-md-12 intro-content animated bounceIn">
                        <p>I create and design apps & websites.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroCard;