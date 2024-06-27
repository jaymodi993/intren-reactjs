import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeAdd from "./EmployeeAdd";
import EmployeeList from "./EmployeeList";
import { EmployeeContext } from "./Store/EmployeeStore";

function App() {

  const[employeeList,setEmployeeList] = useState([]);
  const[employee,setEmployee] = useState({});

  function addEmp(firstName,lastName,email){
    const newEmployeeList = [...employeeList, {'firstName':firstName,'lastName':lastName,'email':email,}];
    setEmployeeList(newEmployeeList);
    
  }

  function handleDeleteEmployee(index) {
    const newEmployees = employeeList.filter((_, i) => i !== index);
    setEmployeeList(newEmployees);
  };

const fillEmpForm = (emp)=>{
  console.log(emp);
  setEmployee(emp);
};

  function editEmployee(updatedEmployee)  {
    const newEmployees = employeeList.filter(i => i.firstName !== updatedEmployee.firstName);
    const updatedEmployeeList = [...newEmployees,updatedEmployee];
    setEmployeeList(updatedEmployeeList);
    setEmployee({});
  };

  return (
    <EmployeeContext.Provider value={{employeeList,addEmp,handleDeleteEmployee,editEmployee,fillEmpForm,employee}}>
      <EmployeeAdd handleAddEmployee={addEmp} handleEditEmployee={editEmployee} empData = {employee} /> 
      <EmployeeList employeeData={employeeList} handleDeleteEmployee={handleDeleteEmployee} 
      handlefillEmpForm={fillEmpForm}/>
    </EmployeeContext.Provider>
  );
}

export default App;