import React from 'react';
import "./style.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h3 className="display-5">Employee Directory</h3>
        <p className="lead">Click on carrots to filter search or use the search form to narrow results </p>
      </div>
    </div>
  );
}

export default Header;
