import React, {Component} from 'react';

import './HeroCard.css';
import Logo from './../../Images/code-icon-wht.svg';
import Service from '../Services/Service';

class HeroCard extends Component {
    render() {
        return (
            
                <div style={{textAlign: 'center'}}>

                    <div className="row">

                        <div className="animated fadeInDown" style={{margin: '0 auto', zIndex: '2'}}>

                            <img src={Logo} alt="logo" className="code-icon animated bounceInDown" />

                                <div className="intro-header">
                                
                                    <span className="intro-title">David Guben</span>
                                    <br/>Front-End Developer

                                </div>
                        </div>

                    </div>
                    
                    <div className="row">

                        <div className="intro-content animated fadeInLeft" style={{margin: '0 auto', zIndex: '1'}}>
                        <h1><b>What I Do</b></h1>
                        <p>
                            Design & develop custom responsive websites or applications using JavaScript ES6, Node.JS, and React.JS. 
                        </p>

                    </div>
                    </div>

                    <div className="row">
                    <div className="service-content animated fadeInRight flex-row" style={{margin: '0 auto'}}>     

                        <Service
                         className="animated pulse"
                         heading="Designer"
                         tools="Adobe Create Suite: Photoshop, Illustrator, InDesign, Premiere"
                         icon="fa fa-pencil fa-4x">
                            <p style={{textAlign: 'left'}}>
                                I use Adobe Creative Suite to create custom designs and assets. I can help design anything to be used for your digital and print work.
                            </p>
                        </Service>
                                
                        <Service
                         className="animated pulse"
                         heading="Developer"
                         tools="HTML5, CSS3, JavaScript ES6, Node, React, Git, MongoDB"
                         icon="fa fa-code fa-4x">
                            <p style={{textAlign: 'left'}}>
                                I use JavaScript ES6 along with today's modern frameworks to create custom responsive web applications that work great on all kinds of devices.
                            </p>
                        </Service>

                    </div>
                    </div>
                    </div>
            
        );
    }
}

export default HeroCard;