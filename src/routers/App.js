import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import LifeCycle from './lifecycle';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/lifecycle">lifecycle</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/lifecycle" component={LifeCycle} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
