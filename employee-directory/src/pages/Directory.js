import React from "react";
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
            matchedEmployee: [],
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
        
        this.setState({ employees: people, loading: false, });
        this.setState({ search: "" });
        this.setState({ matchedEmployee: this.state.employees })
    }

    handleInputChange = event => {
        event.preventDefault();
        console.log(this.state.employees)
        let value = event.target.value;
        let newArr = this.state.employees.filter(employee => {
            console.log(employee.firstName)
            let name = employee.firstName.toLowerCase()

            if (name.indexOf(value) !== -1) {
                return employee
            }
            else {
                return null
            }
        })
        this.setState({ matchedEmployee: newArr })
    };

    render() {

        return (
            <div>

                <SearchFrom
                    handleInputChange={this.handleInputChange}
                    value={this.state.search}
                />
                <EmployeeDataRow />

                {this.state.matchedEmployee.map(person => (
                    <EmployeeDataCard person={person} />
                ))}

            </div>
        )
    }
}
