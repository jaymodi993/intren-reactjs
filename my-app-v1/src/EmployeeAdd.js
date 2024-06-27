import { useContext,useEffect, useRef, useState } from "react"
import { EmployeeContext } from './Store/EmployeeStore';


export default function EmployeeAdd() {

    const {addEmp,editEmployee,employee} = useContext(EmployeeContext);


    const [isEdit, setIsEdit] = useState(false);

    const firstName = useRef('');
    const lastName = useRef('');
    const email = useRef('');

    useEffect(() => {
        if (employee.firstName == null) {
            firstName.current.value = '';
            lastName.current.value = '';
            email.current.value = '';
            setIsEdit(false);
        }
        else {
            firstName.current.value = employee.firstName;
            lastName.current.value = employee.lastName;
            email.current.value = employee.email;
            setIsEdit(true);
        }
    }, [employee.firstName, employee.lastName, employee.email]);

    function submitEmployee(e) {
        e.preventDefault();
        const pFirstname = firstName.current.value;
        const pLastname = lastName.current.value;
        const pemail = email.current.value;
        firstName.current.value = '';
        lastName.current.value = '';
        email.current.value = '';
        if(isEdit) {
            editEmployee({"firstName":pFirstname,"lastName":pLastname,"email":pemail});
        }
        else {
            addEmp(pFirstname,pLastname, pemail);
        }
   

    }
    return (
        <>
            <form onSubmit={submitEmployee}>
                <div className="mb-3 mt-3">
                    <label className="form-label" htmlFor="fname">First name:</label>
                    <input className="form-control" type="text" id="fname" name="fname" ref={firstName} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label" htmlFor="lname">Last name:</label>
                    <input className="form-control" type="text" id="lname" name="lname" ref={lastName} />

                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label" htmlFor="email">Email id:</label>
                    <input className="form-control" type="text" id="email" name="email" ref={email} />
                </div>
                {
                    (isEdit) ? 
                    <input className="btn btn-primary" type="submit" value="Update" /> 
                    :
                    <input className="btn btn-primary" type="submit" value="Save" />

                }

            </form>
        </>
    )
}