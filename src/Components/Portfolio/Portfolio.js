import React, {Component} from 'react';
import {Container} from 'mdbreact';

import mainBg from './../../Images/portfolio/abstract-astronomy.jpg'
import pnpLogo from './../../Images/portfolio/pnpc-logo.svg';
import rcLogo from './../../Images/portfolio/rituchopra-logo.svg';
import scLogo from './../../Images/portfolio/searchcannon-logo.svg';
import msLogo from './../../Images/portfolio/mirrorlessshot.svg';

import './Portfolio.css';

import ProjectCard from '../ProjectCard/ProjectCard';

class Portfolio extends Component {
  
    render() {
        return (
          
          <Container>

              <h2 style={{ marginTop: '25px', marginBottom: '25px', textAlign: 'center', fontWeight: 'bold' }} className="wow fadeIn">Portfolio</h2>

              <div id="portfolio" className="row">
                  
                  <ProjectCard
                    logo={pnpLogo}
                    backgroundImage={mainBg}
                    url="https://www.pawsnposecuttery.com"
                    heading="Paws N Pose Cuttery"
                    description="Mobile dog grooming company that services New Jersey."
                    delay="0.6s">
                    Website
                  </ProjectCard>
                  
                  <ProjectCard
                    logo={rcLogo}
                    backgroundImage={mainBg}
                    url="https://www.rituchopra.com"
                    heading="Ritu Chopra"
                    description="Motivational speaker that helps people succeed using online courses."
                    delay="0.8s">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    logo={scLogo}
                    backgroundImage={mainBg}
                    heading="Search Cannon"
                    description="Search engine that utilizes several APIs to pull data from and display in order by category."
                    delay="1.1s">
                    Web App
                  </ProjectCard>
                  
                  <ProjectCard
                    logo={msLogo}
                    backgroundImage={mainBg}
                    heading="Mirrorless Shot"
                    description="Camera blog that focuses on mirrorless cameras."
                    delay="1.4s">
                    Website
                  </ProjectCard>

              </div>

          </Container>
          
        );
    }
}

export default Portfolio;
