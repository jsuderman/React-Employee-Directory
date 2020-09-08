import React, { Component } from 'react';
import RandomEmployee from "./components/RandomEmployee";
// import ReactDOM from 'react-dom';
import Header from "./components/Header";
import SearchFrom from "./components/SearchFrom";
import EmployeeDataRow from "./components/EmployeeDataRow";
// import EmployeeDataCard from "./components/EmployeeDataCard";
// import Container from "./components/Container"
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
