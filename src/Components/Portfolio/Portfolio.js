import React, {Component} from 'react';
import {Container} from 'mdbreact';

import mainBg from './../../Images/portfolio/abstract-astronomy.jpg'
import pnpLogo from './../../Images/portfolio/pnpc-logo.svg';
import rcLogo from './../../Images/portfolio/rituchopra-logo.svg';
import scLogo from './../../Images/portfolio/search-cannon-portfolio-thumbnail.png';
import nytLogo from './../../Images/portfolio/NYT-search-portfolio-thumbnail.png';


import ProjectCard from '../ProjectCard/ProjectCard';

class Portfolio extends Component {
  
    render() {
        return (
          
          <Container>
              <h2 style={{ marginTop: '25px', marginBottom: '25px', textAlign: 'center', fontWeight: 'bold' }} className="wow fadeIn">Portfolio</h2>

              <div className="row">
                  
                  <ProjectCard
                    logo={pnpLogo}
                    backgroundImage={mainBg}
                    heading="Paws N Pose Cuttery"
                    description="Mobile dog grooming company that services New Jersey."
                    delay="0.6s">
                    Website
                  </ProjectCard>
                  


                  <ProjectCard
                    logo={rcLogo}
                    backgroundImage={mainBg}
                    heading="Ritu Chopra"
                    description="Motivational speaker that helps people succeed using online courses."
                    delay="1.2s">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    logo={scLogo}
                    backgroundImage={mainBg}
                    heading="Search Cannon"
                    description="Search engine that utilizes several APIs to pull data from and display in order by category."
                    delay="1.8s">
                    Web App
                  </ProjectCard>
                  
                  <ProjectCard
                    logo={nytLogo}
                    backgroundImage={mainBg}
                    heading="NYT: Article Finder"
                    description="Web Scraper that pulls articles from the New York Times."
                    delay="1.8s">
                    Web App
                  </ProjectCard>

              </div>

          </Container>
          
        );
    }
}

export default Portfolio;
