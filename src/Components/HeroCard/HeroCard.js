import React, {Component} from 'react';

import './HeroCard.css';
import Logo from './../../Images/code-icon-wht.svg';
import Service from '../Services/Service';

class HeroCard extends Component {
    render() {
        return (
            
                <div style={{textAlign: 'center'}}>
                    <div className="row">
                        <div className="animated bounceIn" style={{margin: '0 auto', zIndex: '2'}}>
                        <img src={Logo} alt="logo" className="code-icon animated rubberBand"/>
                            <div className="intro-header">
                                
                                <span className="intro-title">David Guben</span>
                                <br/>Front-End Developer
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
                         tools="Adobe Create Suite: Photoshop, Illustrator, InDesign, Premiere"
                         icon="fa fa-pencil fa-4x">
                         <p style={{textAlign: 'left'}}>I use Adobe Creative Suite to create custom designs. I can help design anything digital or print.</p>
                        </Service>
                                
                        <Service
                         heading="Developer"
                         tools="HTML5, CSS3, JavaScript ES6, Node, React, Git, MongoDB"
                         icon="fa fa-code fa-4x">
                         <p style={{textAlign: 'left'}}>I use JavaScript ES6 along with today's modern frameworks to create custom responsive web applications that work great on all kinds of devices.</p>
                        </Service>

                    </div>
                    </div>
                    </div>
            
        );
    }
}

export default HeroCard;