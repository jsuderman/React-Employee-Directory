import React from 'react';
import "./style.css"

function SearchFrom(props) {
  return (
    <div>
      <form className="form-inline">
        
          <div className="form-group mx-sm-3 mb-2">
            <label for="search" className="sr-only">Search</label>
            <input
            value={props.search} 
            onChange={props.handleInputChange}
            type="text" 
            className="form-control" 
            id="employeeSearch" 
            placeholder="Search">
            </input>
          </div>
  
      </form>
      
    </div>
  );
}

export default SearchFrom;
