import React, {Component} from 'react'
import {Container} from 'mdbreact'


import ProjectCard from './ProjectCard'

class Portfolio extends Component {
  
    render() {
        return (
          <Container>
                <h2 style={{ marginBottom: '25px' }}>Projects</h2>

                <div className="row text-center">
                
                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                    heading="Heading"
                    description="Test Description."
                    delay="0.6s">
                    App
                  </ProjectCard>

                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                    heading="Heading"
                    description="Test Description."
                    delay="1.2s">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/50.jpg"
                    heading="Heading"
                    description="Test Description."
                    delay="1.8s">
                    App
                  </ProjectCard>
                  
                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/55.jpg"
                    heading="Heading"
                    description="Test Description."
                    delay="0.6s">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/56.jpg"
                    heading="Heading"
                    description="Test Description."
                    delay="1.2s">
                    App
                  </ProjectCard>
                  
                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/45.jpg"
                    heading="Heading"
                    description="Test Description."
                    delay="1.8s">
                    Website
                  </ProjectCard>
                  
                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/51.jpg"
                    heading="Heading"
                    description="Test Description."
                    delay="0.6s">
                    App
                  </ProjectCard>
                  
                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                    heading="Heading"
                    description="Test Description."
                    delay="1.2s">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/53.jpg"
                    heading="Heading"
                    description="Test Description."
                    delay="1.8s">
                    Website
                  </ProjectCard>

                </div>

          </Container>
        )
    }
}

export default Portfolio
