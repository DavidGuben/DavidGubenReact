import React, {Component} from 'react';

import './Intro.css';
import ReactLogo from './../../Images/code-icon-wht.svg';

class HeroCard extends Component {
    render() {
        return (
            <div className="d-flex">
                <div className="row text-center">
                
                    <div className="intro-header-container animated bounceIn">
                        <div className="col-md-12 intro-header">
                            <h1><b>David Guben</b></h1>
                            <p>Web Developer</p>
                            <img src={ReactLogo} alt="logo" className="animated rubberBand code-icon"/>
                        </div>
                    </div>

                    <div className="col-md-12 intro-content animated bounceIn">
                    <h1><b>What I Do</b></h1>
                        <p>I design & develop custom responsive websites or applications that look great on any device.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroCard;