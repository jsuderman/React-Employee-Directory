import React, { Component } from "react";
import API from "../utils/API";
// import { render } from "react-dom";



class Directory extends Component {
    state = {
        results: [],
        error: null,
    };

    
    componentDidMount() {
        API.GetEmployees()
            .then(res => {
                console.log(res.data.results)
                // const results = res.data.results.map(obj => obj.data);
                this.setState({ results: res.data.results });
                console.log("this is update state")
                console.log(this.state.results)
                // this.setState({ results: res.data.results })
               
            // .catch(err => console.log(err));
            // const results = res.data.results.map(obj => obj.data);
            // this.setState({ results });
        }


     
    )}


    render() {
        return (
        <div>
            <p> name:  {this.state.results.map(item=>{
                return <p>{item.email}</p>
            })}
            </p>


        </div>
       
        );
    };   
}


export default Directory;
