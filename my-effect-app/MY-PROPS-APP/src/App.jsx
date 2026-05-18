
import { useState } from 'react';
import './App.css'
import Child from './Child';
import Difference from './Difference'
import Greet from './Greet';
import Multiply from './Multiply'
import Sum from './Sum'
import EmployeeForm from './EmployeeForm';
import ShowEmployees from './ShowEmployees';

function App() {


  // data exchange using props 

  let name = "Monika";

  // 1) parent to child : we can directly pass the data to child components
  // 2) child to parent : we use function to accept the data from child components

  let [buttonmsg, setButtonmsg] = useState("")
  let [normalmsg, setNormalmsg] = useState("")

  const acceptButtonMsg = (abc) => {

    setButtonmsg(abc)
  }

  const acceptNormalMsg = (xyz) => {

    setNormalmsg(xyz)
  }

  let [emp, setEmp] = useState("")

  const acceptEmp = (e) => {

    setEmp(e)
  }

  return (
    <>
      <center>
        <h1>Welocme to My Props App</h1>
        <EmployeeForm sendEmp={acceptEmp} />

        <ShowEmployees data={emp} /> <br /><br /><br />

        <Greet nm={name} />


        <Sum a={10} b={5} />

        <Multiply x={2} y={3} z={5} />

        <Difference p={10} q={2} />

        <Child sendButtonMsg={acceptButtonMsg} sendNormalMsg={acceptNormalMsg} />

        <h1>Normal Msg From Child = {normalmsg}</h1>
        <h1>Button Msg From Child = {buttonmsg}</h1>

      </center>
    </>
  )
}

export default App