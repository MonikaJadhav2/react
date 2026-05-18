import { useState } from "react";
import "./App.css";

function App() {

  // Single Employee State
  const [emp, setEmp] = useState({
    id: "",
    name: "",
    role: "",
    salary: ""
  });

  // All Employees Array State
  const [allEmployees, setAllEmployees] = useState([]);

  // Handle Input Change
  const handleChange = (e) => {

    const { name, value } = e.target;
3
    setEmp({
      ...emp,
      [name]: value
    });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    // Add new employee into array
    setAllEmployees([
      ...allEmployees,
      emp
    ]);

    // Clear form after submit
    setEmp({
      id: "",
      name: "",
      role: "",
      salary: ""
    });
  };

  return (
    <div>

      <h1>Welcome To My Employee App</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>

        Enter ID :
        <input
          type="text"
          name="id"
          value={emp.id}
          onChange={handleChange}
        />
        <br /><br />

        Enter Name :
        <input
          type="text"
          name="name"
          value={emp.name}
          onChange={handleChange}
        />
        <br /><br />

        Enter Role :
        <input
          type="text"
          name="role"
          value={emp.role}
          onChange={handleChange}
        />
        <br /><br />

        Enter Salary :
        <input
          type="text"
          name="salary"
          value={emp.salary}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">
          Add Employee
        </button>

      </form>

      <br /><br />

      {/* TABLE */}
      <table
  border="1"
  cellPadding="10"
  style={{ margin: "auto" }}
>

        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ROLE</th>
            <th>SALARY</th>
          </tr>
        </thead>

        <tbody>

          {
            allEmployees.map((employee, index) => (
              <tr key={index}>

                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>{employee.salary}</td>

              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default App;