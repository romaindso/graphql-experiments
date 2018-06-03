import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
    this.launchRequest = this.launchRequest.bind(this);
  }

  launchRequest() {
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: "{ hello }" }),
    })
      .then(res => res.json())
      .then(data => this.setState({ data: data.data }))
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <button onClick={() => this.launchRequest()}>Launch Request</button>
        <p className="App-intro">
          GraphQL query => {this.state.data && this.state.data.hello ? this.state.data.hello : '...no data'}
        </p>
      </div>
    );
  }
}

export default App;
