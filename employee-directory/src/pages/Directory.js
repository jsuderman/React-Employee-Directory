import React, { Component } from "react";
import EmployeeDataCard from "../components/EmployeeDataCard";
import SearchFrom from "../components/SearchFrom";
import EmployeeDataRow from "../components/EmployeeDataRow";

export default class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            loading: true,
            employees: [],
        };
    }
    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=10";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results)

        const people = data.results.map(person => {

            const newObj = {
                email: person.email,
                login: person.login.uuid,
                firstName: person.name.first,
                lastName: person.name.last,
                picture: person.picture.medium,
                dob: person.dob.date,
                cell: person.cell
            }
            return newObj;
        })

        this.setState({ employees: people, loading: false });
        this.setState({ search: "" });


    }

    handleInputChange = event => {
        let value = event.target.value;
        const search = event.target.name;
        console.log(value);
        this.setState({ search: value });

    };

    // search = row => {

    
    // return rows.filter(row => row.firstName.toLowerCase().indexof(this.state.search) > -1)

    // }


    render() {
        // if (this.state.loading) {
        //     return <div>loadin...</div>;
        // }
        // if (!this.state.employees.length) {
        //     return <div>didnt get person</div>;
        // }

    return (
        <div>
            {/* <div>
                    <input type="text" vaule={search} onChange={(e) => this.state.search(e.target.value)} />
                </div> */}
            <SearchFrom
                handleInputChange={this.handleInputChange}
                value={this.state.search}
            />
            <EmployeeDataRow />
            {this.state.employees.map(person => (
                <EmployeeDataCard person={person}

                />


                // <div key={person.login.uuid}>

                //     <img alt="self" src={person.picture} />
                //     <div>{person.firstName}</div>
                //     <div>{person.lastName}</div>
                //     <div>{person.cell}</div>
                //     <div>{person.dob}</div>
                //     <div>{person.email}</div>
                // </div>
            ))}

        </div>
    )
}


}
