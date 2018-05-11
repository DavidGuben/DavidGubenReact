import React, {Component} from 'react'
import {Container} from 'mdbreact'

import ProjectCard from './ProjectCard'

class Portfolio extends Component {
    render() {
        return (
            <Container>
                <h2 style={{ marginBottom: '50px' }}>Projects</h2>

                <div className="row text-center">
                
                  <ProjectCard
                  image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  heading="Heading"
                  description="Test Description." />

                  <ProjectCard
                  image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  heading="Heading"
                  description="Test Description." />

                  <ProjectCard
                  image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  heading="Heading"
                  description="Test Description." />
                  
                  <ProjectCard
                  image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  heading="Heading"
                  description="Test Description." />

                  <ProjectCard
                  image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  heading="Heading"
                  description="Test Description." />
                  
                  <ProjectCard
                  image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  heading="Heading"
                  description="Test Description." />
                  
                  <ProjectCard
                  image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  heading="Heading"
                  description="Test Description." />
                  
                  <ProjectCard
                  image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  heading="Heading"
                  description="Test Description." />

                  <ProjectCard
                  image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  heading="Heading"
                  description="Test Description." />
                  
                </div>

          </Container>
        )
    }
}

export default Portfolio
