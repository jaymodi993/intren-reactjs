import React, { useContext } from 'react';
import { EmployeeContext } from './Store/EmployeeStore';

export default function EmployeeList() {

    const {employeeList,fillEmpForm,handleDeleteEmployee} = useContext(EmployeeContext);

    const handleEditClick = (index, employee) => {
        // setEditingIndex(index);
        // setEditedEmployee(employee);
        fillEmpForm(employee);
    };

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>        
                            <td>

                            <button className="btn btn-secondary ms-5" onClick={() => handleEditClick(index, employee)} >
                                Edit
                            </button>
                            <button className="btn btn-primary ms-5" onClick={() => handleDeleteEmployee(index)}>
                                Delete
                            </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}