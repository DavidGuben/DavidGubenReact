import React, {Component} from 'react'
import {View, Mask} from 'mdbreact'

import './Intro.css'

class Intro extends Component {
    render() {
        return (
            <View className="hm-blue-strong">
                <div className="intro z-depth-1 animated fadeIn">
                    <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="intro-content text-center">       
                            <h1>{this.props.header}</h1>
                            <p>{this.props.content}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <Mask overlay="black-strong" className="flex-center" />
            </View>
        );
    }
}

export default Intro
