import { useEffect, useRef, useState } from "react"


export default function EmployeeAdd({ handleAddEmployee,empData,handleEditEmployee }) {

    const [isEdit,setIsEdit] = useState(false);

    const firstName = useRef('');
    const lastName = useRef('');
    const email = useRef('');

    useEffect(() => {
        if (empData.firstName==undefined){
            firstName.current.value = '';
            lastName.current.value = '';
            email.current.value = '';
            setIsEdit(false);
            
        } else{

        firstName.current.value = empData.firstName;
        lastName.current.value = empData.lastName;
        email.current.value = empData.email;
        setIsEdit(true);
        }
    });
 
    function submitEmployee(e) {
        e.preventDefault();
        const pFirstName = firstName.current.value;
        const pLasttName = lastName.current.value;
        const pEmail = email.current.value;
        firstName.current.value = '';
        lastName.current.value = '';
        email.current.value = '';
        if(isEdit){
            setIsEdit(false);
            handleEditEmployee({"firstName":pFirstName,"lastName":pLasttName, "email":pEmail});
            
        }else{
            handleAddEmployee(pFirstName, pLasttName, pEmail);
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
                    (isEdit)?<input className="btn btn-primary" type="submit" value="Update" /> :<input className="btn btn-primary" type="submit" value="Save" />
                        
                  }

            </form>
        </>
    )
}