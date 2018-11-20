import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';

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
                  <Link to="/about/">About</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
