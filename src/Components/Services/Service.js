import React, {Component} from 'react'

class Service extends Component {
    render() {
        return(
        <div className="col-md-6 mb-5">
            <i className={this.props.icon} style={{color: '#4d7ea8'}}></i>
            <h4 className="my-4 font-weight-bold">{this.props.heading}</h4>
                <span style={{padding: '10px'}}>{this.props.children}</span>
            <div>
            <p className="grey-text"><b>Tools</b></p>
            <p className="grey-text">{this.props.tools}</p>
            </div>
        </div>
        )
    }
}
export default Service