import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.css';

export default class Home extends Component {
    onClick = () => {
        let ddd = ""

        window.speechSynthesis.speak(new SpeechSynthesisUtterance(ddd))
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div onClick={this.onClick}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}
