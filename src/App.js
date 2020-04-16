import React, { Component } from "react";

const Family = (props) => (
  <div>
    <Person name={props.name} />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className='App'>
        <p>Hey, I am { this.props.name }</p>
      </div>
    );
  }
}

class App extends Component {
  state = {
    name: "Rupertt",
    age: 29
  };

  render() {
    return (
      <div className='App'>
        <Family name={ this.state.name } />
      </div>
    );
  }
}

export default App;
