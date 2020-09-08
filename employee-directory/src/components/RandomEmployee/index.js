import React from "react";
import EmployeeDataCard from "../EmployeeDataCard";

export default class RandomEmployee extends React.Component {
    state = {
        loading: true,
        people: [],
    };

    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=10";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false });
        console.log(data.results)
        
        const random = [];
        this.state.people.forEach(person => {
            random.push(
                <div>
                    <img alt="self" src={person.picture.medium} />
                    <div>{person.name.first}</div>
                    <div>{person.name.last}</div>
                    <div>{person.cell}</div>
                    <div>{person.dob.date}</div>
                    <div>{person.email}</div>
                </div>
            );
            console.log(random)

        })
    }

    

    render() {
        if (this.state.loading) {
            return <div>loadin...</div>;
        }
        if (!this.state.people.length) {
            return <div>didnt get person</div>;
        }

        const employeeConst = this.state.people.map(person => (
            <div key={person.login.uuid}>
                <img alt="self" src={person.picture.medium} />
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <div>{person.cell}</div>
                <div>{person.dob.date}</div>
                <div>{person.email}</div> 
            </div>
        ));
        return (
            <div>
                <EmployeeDataCard 
                
                />
                {this.state.people.map(person => (
                    <div key={person.login.uuid}>
                        
                    <img alt="self" src={person.picture.medium} />
                    <div>{person.name.first}</div>
                    <div>{person.name.last}</div>
                    <div>{person.cell}</div>
                    <div>{person.dob.date}</div>
                    <div>{person.email}</div> 
                </div>
                ))}
               
            </div>
        )
        
        
        
        
        // (
            
        //     <div>
            
        //         {this.state.loading || !this.state.people ? (
        //             <div>loading...</div>
        //         ) : (
        //                 <div>
        //                     {enployeeConst}

        //                 </div>


        //             )}
        //     </div>
        // )
    }


}
//     render() {
//         if (this.state.loading) {
//             return <div>loading...</div>;
//         }
//         if (this.state.people.length) {
//             return <div>didnt get a random employee</div>;
//         }
//         return (
//             <div>
//                 {this.state.people.map(person => (

//                     <div>
//                         <div>{person.name.title}</div>
//                         <div>{person.name.last}</div>
//                         <div>{person.name.first}</div>
//                         <img src={person.picture.large} />
//                     </div>
//                 ))}
//             </div>
//         );
//     }

// }