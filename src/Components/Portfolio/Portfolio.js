import React, {Component} from 'react';
import {Container} from 'mdbreact';

import mainBg from './../../Images/portfolio/abstract-astronomy.jpg';

import pnpLogo from './../../Images/portfolio/pnpc-logo.svg';
import rcLogo from './../../Images/portfolio/rituchopra-logo.svg';
import scLogo from './../../Images/portfolio/searchcannon-logo.svg';
import msLogo from './../../Images/portfolio/mirrorlessshot.svg';
import poprepoLogo from './../../Images/portfolio/poprepo-wht.svg';

import './Portfolio.css';

import ProjectCard from '../ProjectCard/ProjectCard';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
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
                    url="https://searchcannon2017.herokuapp.com"
                    heading="Search Cannon"
                    description="Search engine that utilizes several APIs to pull data from and display in order by category."
                    delay="1.0s">
                    Web App
                  </ProjectCard>
                  
                  <ProjectCard
                    logo={msLogo}
                    backgroundImage={mainBg}
                    url="http://mirrorless.davidguben.com"
                    heading="Mirrorless Shot"
                    description="Camera blog that focuses on mirrorless cameras."
                    delay="1.2s">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    logo={poprepoLogo}
                    backgroundImage={mainBg}
                    url="http://poprepo.davidguben.com"
                    heading="PopRepo"
                    description="Web App that displays a list of popular GitHub repositories for 5 programming languages."
                    delay="1.4s">
                    Web App
                  </ProjectCard>

              </div>

          </Container>
          
        );
    }
}

export default Portfolio;
