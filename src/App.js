import React, { Component } from "react";

const MyContext = React.createContext();

// Create a provider
class MyProvider extends Component {

  state = {
    name: "Rupertt",
    age: 29
  };

  render() {
    return (
      // The value is passed on as an object.
      <MyContext.Provider value={{
          state: this.state
        }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div>
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div>
        {/* Context.Consumer uses a render prop to pass the data.*/}
        <MyContext.Consumer>
          {/* Render props always requires a function as its consumer */}
          {(context) => (
            // React.Fragment provides a blank tag to wrap tags in.
            <React.Fragment>
              <div>My name is {context.state.name}</div>
              <div>My age is {context.state.age}</div>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className='App'>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
