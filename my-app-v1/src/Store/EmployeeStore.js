import { createContext } from "react";

export const EmployeeContext = createContext(
    {
        employeeList: [],
        addEmployee: () => {},
        deleteEmployee: () => {},
        editEmployee: () => {},
        fillEmpForm: () => {},
        empData: {}
    }
);