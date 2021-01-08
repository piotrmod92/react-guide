import React, { Component } from 'react';
import Validation from "./components/Validation/Validation";
import Char from "./components/Char/Char";
import './App.css';

class App extends Component {

    state = {
        text: 'myTxt'
    }

    textChangeHandler = event => {
        this.setState({
            text: event.target.value
        });
    }

    removeCharHandler = event => {
        const clickedElementIndex = event.target.id;
        const newState = {...this.state};
        
        let newTextArray = newState.text.split('');
        newTextArray.splice(clickedElementIndex, 1);
        
        this.setState({
            text: newTextArray.join('')
        })
    }

    render() {
        return (
            <div className="App">
                <h1>React Lists and Conditionals</h1>
                <input type="text" value={this.state.text} onChange={this.textChangeHandler}/>
                <p>Text length: {this.state.text.length}</p>
                <Validation length={this.state.text.length}/>
                {this.state.text.split('').map((char, index) => {
                    return (
                        <Char key={index} id={index} click={this.removeCharHandler}>{char}</Char>
                    )
                })}
            </div>
        );
    }
}

export default App;
