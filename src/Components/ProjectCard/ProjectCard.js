import React, {Component} from 'react';
import {View} from 'mdbreact';

import './ProjectCard.css';


class ProjectCard extends Component {
    render() {
        return (
            
            <div className="col-lg-4 col-md-12 mb-4 wow fadeIn" data-wow-delay={this.props.delay}>
                <View zoom>
                
                    <div className="view overlay z-depth-1 folio-card">
                    
                        <div className="company-logo-container">
                        
                            <div className="company-logo">
                            
                                <img src={this.props.logo} className="img-fluid" alt="Company Logo" />
                                
                            </div>
                        </div>    
                        <div>
                            <img src={this.props.image} className="img-fluid" alt="Project" />
                            
                        </div>

                        

                    </div>
                    <div className="project-category">{this.props.children}</div>
                    <h4 className="my-4 font-weight-bold text-center">{this.props.heading}</h4>
                    <p className="grey-text text-center">{this.props.description}</p>
                    
                </View>
            </div>
            
        );
    }
}

export default ProjectCard;