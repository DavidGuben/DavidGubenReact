import React, {Component} from 'react'

import './Intro.css'

class IntroCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="d-flex">
                <div className="row">
                    <div className="col-md-12">
                    <h1>David Guben</h1>
                    <p>React Web Developer</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroCard