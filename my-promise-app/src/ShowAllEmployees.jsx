import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ShowAllEmployees = () => {

    let [allemployees, setAllemployees] = useState([])

    useEffect(() => {
        loadEmployees();
    }, [])

    function loadEmployees() {

        // fetch('http://localhost:8080/employees')
        //     .then((resp) => {
        //         console.log("Success : ", resp)
        //         resp.json().then(
        //             (data) => {
        //                 setAllemployees(data)
        //             })
        //     })
        //     .catch((err) => {
        //         console.log("Error : ", err)
        //     })

        axios.get('http://localhost:8080/employees')
        .then((res) => {
            console.log("Axios Success : " , res)
           setAllemployees(res.data)
        }).catch((err)=>{
            console.log("Axios Failed : " , err)
        })

        // Promise , async ,await , fetch , axios , db.json , server 

    }

    const handleDelete = async (id) => {

        let res = await axios.delete(`http://localhost:8080/employees/${id}`).then(
            (res) => {
                loadEmployees() ; 
            }
        )

      
    }
    return (
        <div>

            <h1>All Employees</h1>
            <table border='1'>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>SALARY</th>
                        <th>CITY</th>
                        <th>ACTIONS</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        allemployees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.role}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.city}</td>
                                <td>
                                    <button onClick={()=> handleDelete(emp.id)}>Delete</button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowAllEmployees