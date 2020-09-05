import React, { Component } from "react";
import API from "../utils/API";
// import { render } from "react-dom";



class Directory extends Component {
    state = {
        results: [],
        error: null,
    };


    componentDidMount() {
        // API.GetEmployees()
        //     .then(res => {
        //         console.log(res.data.results)
        //         // const results = res.data.results.map(obj => obj.data);
        //         this.setState({ results: res.data.results });
        //         console.log("this is update state")
        //         console.log(this.state.results)
        //     })
        API.GetMultiEmployees()
            .then(res => {
                console.log(res.data.results)
                this.setState({ results: res.data.results });
                console.log("state updated")
                console.log(this.state.results)

            })
    }


    render() {
        return (
            <div>
                <div> {this.state.results.map(item => {
                    return <div 
                    key={item.phone}>
                    <div> name: {item.name.first} {item.name.last} </div>
                    email: {item.email}
                    <div>{item.picture.thumbnail}</div>
                    phone: {item.phone} <div>DOB:{item.dob.date}</div>
                    </div>
                })}

                </div>


            </div>

        );
    };
}


export default Directory;
