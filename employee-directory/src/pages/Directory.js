import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import SearchFrom from "../components/SearchFrom";
import EmployeeDataRow from "../components/EmployeeDataRow";
import EmployeeDataCard from "../components/EmployeeDataCard";
// import { render } from "react-dom";



class Directory extends Component {
    state = {
        search: "",
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
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        console.log(value);
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div>
                <Header />
                <SearchFrom 
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeDataRow />
                <EmployeeDataCard />
            </div>
        )

    }


}
export default Directory;

//             <div>
//                 <Header />
//                 <SearchFrom
//                     handleInputChange={this.handleInputChange}
//                 />
//                 <EmployeeDataRow />
//                 <EmployeeDataCard 
//                     firstName={this.state.results.name}
//                     lastName={this.state.results.name}
//                     phone={this.state.results.phone}
//                     email={this.state.results.email}
//                     dob={this.state.results.dob}
//                     picture={this.state.results.picture}


//                 />
//                     <div> {this.state.results.map(item => {
//                         return <div key={item.phone}>
//                                     phone: {item.phone}
//                                     email: {item.email}
//                                 )

//                         </div>
//                     })}

//                     </div>


//             </div>

//         );
//     };
// }

{/* <div>{item.picture.thumbnail}</div>
                            <div> name: {item.name.first} {item.name.last} </div> 
                            <div>DOB:{item.dob.date}</div> */}