import React, { Component } from "react";
import './UserOutput.css';

export default class UserOutput extends Component {

    inlineStyles = {
        border: '2px dashed maroon'
    }

    render() {
        return (
            <div className="UserOutput" style={this.inlineStyles}>
                <p className="title">Your name:</p>
                <p className="content">{this.props.name}</p>
            </div>
        )
    }
}