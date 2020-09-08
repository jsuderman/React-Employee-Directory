import React, { Component } from 'react';

// import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Directory from "./pages/Directory";




class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Directory />
      </div>
    );
  }
}

export default App;
