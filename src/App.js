import React, { Component } from 'react';
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";
import './App.css';

class App extends Component {

    state = {
        name: 'Andrew'
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <h1>React IO tester</h1>
                <UserInput name={this.state.name} change={this.changeNameHandler}/>
                <UserOutput name={this.state.name} />
                <UserOutput name={this.state.name} />
            </div>
        );
    }
}

export default App;
