import React from 'react';
import "./style.css";


function EmployeeDataCard(props) {
    return (
        <div>
            <table class="table table-striped">
               
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>{props.name}</td>
                        <td>{props.phone}</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeDataCard;












