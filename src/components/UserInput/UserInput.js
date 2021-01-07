import React, { Component } from "react";
import './UserInput.css';

export default class UserInput extends Component {


    render() {
        return (
            <div className="UserInput">
                <p className="title">Write your name here:</p>
                <input type="text" className="input" onChange={this.props.change} value={this.props.name}/>
            </div>
        )
    }
}