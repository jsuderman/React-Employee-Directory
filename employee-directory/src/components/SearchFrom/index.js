import React from 'react';
import "./style.css"

function SearchFrom(props) {
  return (
    <div>
      <form class="form-inline">
        
          <div class="form-group mx-sm-3 mb-2">
            <label for="search" class="sr-only">Search</label>
            <input
            value={props.search} 
            onChange={props.handleInputChange}
            type="text" 
            class="form-control" 
            id="employeeSearch" 
            placeholder="Search"></input>
          </div>
  
      </form>
      
    </div>
  );
}

export default SearchFrom;
