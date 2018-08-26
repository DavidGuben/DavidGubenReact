import React, {Component} from 'react';
import {Container} from 'mdbreact';

import pnpLogo from './../../Images/portfolio/pnpc-logo-2018-v2.png';

import ProjectCard from '../ProjectCard/ProjectCard';

class Portfolio extends Component {
  
    render() {
        return (
          <Container>
              <h2 style={{ marginTop: '25px', marginBottom: '25px', textAlign: 'center', fontWeight: 'bold' }} className="wow fadeIn">Portfolio</h2>

              <div className="row">
                  
                  <ProjectCard
                    logo={pnpLogo}
                    image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                    heading="Paws N Pose Cuttery"
                    description="Mobile dog grooming company that services New Jersey."
                    delay="0.6s">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                    heading="Ritu Chopra"
                    description="Motivational speaker that helps people succeed using online courses."
                    delay="1.2s">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/50.jpg"
                    heading="Search Cannon"
                    description="Search engine that utilizes several APIs to pull data from and display in order by category."
                    delay="1.8s">
                    Web App
                  </ProjectCard>
                  
                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/55.jpg"
                    heading="NYT: Article Finder"
                    description="Web Scraper that pulls articles from the New York Times."
                    delay="0.6s">
                    Web App
                  </ProjectCard>

              </div>

          </Container>
        );
    }
}

export default Portfolio;
