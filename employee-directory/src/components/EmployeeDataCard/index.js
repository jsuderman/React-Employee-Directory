import React from 'react';
import "./style.css";


function EmployeeDataCard(props) {
    
    return (
        <div>
            
            <table cellPadding={0} cellSpacing={0} className="table table-striped">
                <tbody>
                    <tr>
                        <img alt="self" src={props?.person?.picture  || null} />
                        <td>{props?.person?.firstName || ''} {props?.person?.lastName || ''}</td>
                        <td>{props?.person?.cell || ''}</td>
                        <td>{props?.person?.email || ''}</td>
                        <td>{props?.person?.dob || ''}</td>
                        
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default EmployeeDataCard;












