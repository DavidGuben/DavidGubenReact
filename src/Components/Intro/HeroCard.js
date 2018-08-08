import React, {Component} from 'react';

import './Intro.css';
import ReactLogo from './../../Images/code-icon-wht.svg';
import Service from '../Services/Service';

class HeroCard extends Component {
    render() {
        return (
            
                <div style={{textAlign: 'center'}}>
                    <div className="row align-items-center">
                        <div className="animated bounceIn" style={{margin: '0 auto', zIndex: '2'}}>
                            <div className="intro-header">
                                <h1><b>David Guben</b></h1>
                                <p>Web Developer</p>
                                <img src={ReactLogo} alt="logo" className="animated rubberBand code-icon"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                    <div className="intro-content animated bounceIn" style={{margin: '0 auto', zIndex: '1'}}>
                        <h1><b>What I Do</b></h1>
                        <p>Design & develop custom responsive websites or applications that look great on any device.</p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="service-content animated bounceIn flex-row" style={{margin: '0 auto'}}>     

                        <Service
                        className="wow pulse"
                        heading="Designer"
                        description="Adobe Create Suite: Photoshop, Illustrator, InDesign, Premiere">
                            <i className="fa fa-pencil fa-4x" style={{color: '#4d7ea8'}}></i>
                        </Service>
                                
                        <Service
                        heading="Developer"
                        description="HTML5, CSS3, JavaScript ES6, Node, React, Git">
                            <i className="fa fa-code fa-4x" style={{color: '#4d7ea8'}}></i>
                        </Service>

                    </div>
                    </div>
                    </div>
            
        );
    }
}

export default HeroCard;