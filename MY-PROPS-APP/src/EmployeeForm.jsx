import React, { useState } from 'react'

const EmployeeForm = ({sendEmp}) => {

    let [empName, setEmpName] = useState("")

    return (
        <div>

            Emp Name : <input type="text" onChange={(e) => setEmpName(e.target.value)}  />

            <button onClick={()=> sendEmp(empName)}>Send Employee</button>
        </div>
    )
}

export default EmployeeForm