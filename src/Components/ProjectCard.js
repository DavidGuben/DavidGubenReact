import React, {Component} from 'react'

class ProjectCard extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-12 mb-4">
            <div className="view overlay z-depth-1-half">
              <img src={this.props.image} className="img-fluid" alt="Example Image" />
              {this.props.children}
            <div className="mask rgba-white-slight"></div>
            </div>

            <h4 className="my-4 font-weight-bold">{this.props.heading}</h4>
            <p className="grey-text">{this.props.description}</p>
            </div>
        )
    }
}

export default ProjectCard