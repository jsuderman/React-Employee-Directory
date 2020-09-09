import React from 'react';
import "./style.css"

function EmployeeDataRow(props) {
    return (
        <div>
            <table cellPadding={0} cellSpacing={0}  className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default EmployeeDataRow;
