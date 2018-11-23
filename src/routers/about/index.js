import React from 'react';
import Hello from './Hello';
import styles from './index.less';

class ShowMyError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }
  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>
            Error AGAIN: {this.state.error.toString()}
          </h1>
          {this.state.info &&
          this.state.info.componentStack.split("\n").map(i => {
            return (
              <div key={i}>
                {i}
              </div>
            );
          })}
        </div>
      );
    }
    return this.props.children;
  }
}

class Broken extends React.Component {
  constructor(props) {
    super(props);
    this.state = { throw: false, count: 0 };
  }

  render() {
    if (this.state.throw) {
      throw new Error("YOLO");
    }

    return (
      <div>
        <button
          onClick={e => {
            this.setState({ throw: true });
          }}
        >
          button will render error.
        </button>

        <button onClick={e => {
          this.setState(({ count }) => ({
            count: count + 1
          }));
        }}>button will not throw</button>

        <div>
          {"All good here. Count: "}{this.state.count}
        </div>
      </div>
    );
  }
}

export default class About extends React.Component {
  render() {
    const styles = {
      fontFamily: "sans-serif",
      textAlign: "center"
    };
    return (
      <div>
        <p style={{maxWidth: "400px", margin: "0 auto", lineHeight: "1.5rem", border: "1px solid black", borderRadius: "8px", padding: "10px 15px", background: "gold"}}>
          CODESANDBOX is running in an environment that prevents <code>componentDidCatch</code> from working properly.
          <br/>
          <a href="https://codepen.io/blairbear/pen/GQrMPW">Checkout this CodePen instead</a>
          <br/>
          component preserved below for posterity.
        </p>
        <div style={styles}>
          <Hello name="ShowMyError" />
          <h2>Start clicking to see some {"\u2728"}magic{"\u2728"}</h2>
          <ShowMyError>
            <Broken />
          </ShowMyError>
        </div>
      </div>
    );
  }
}

