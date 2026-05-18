import React, { useEffect, useState } from 'react'
import { allEmployeesList } from './database'

const ShowEmployee = () => {

    let [allemployees, setAllemployees] = useState([])

    let [count, setCount] = useState(0)

    useEffect(() => {
        loadEmployees();
        console.log("useEffect [] is executed...")
    }, [])
    useEffect(() => {
        console.log("useEffect [count] is executed...")
    }, [count])

    const loadEmployees = () => {
        let allemps = allEmployeesList();
        setAllemployees(allemps)

    }
    const greet = () => {

        console.log('hello from normal greet..')
    }

    greet();


    const handleDelete = (id) => {
        console.log('delete emp id = ', id)


    }

    return (
        <div>

            <h1>All Employees List</h1>

            <button onClick={() => setCount(count + 1)}>Increase</button>
            <br />
            <h3>Count = {count}</h3>
            <br />

            <table border='1'>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>SALARY</th>
                        <th>ACTION</th>
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
                                <td>
                                    <button onClick={() => handleDelete(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ShowEmployee