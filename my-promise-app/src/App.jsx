import React from 'react'
import './App.css'
import PromiseDemo from './PromiseDemo'
import ShowAllEmployees from './ShowAllEmployees'

const App = () => {

  // let count = 0;

  // console.log("Start")

  // function fetchData() {

  //   setTimeout(() => {
  //     count += 5;
  //     return "Data Recieved.."
  //   }, 2000);
  // }

  // let fd = fetchData();
  // console.log(fd)


  // function fetchPromise() {
  //   let success = false;
  //   let promise = new Promise((resolve, reject) => {

  //     setTimeout(() => {
  //       if (success) {
  //         count += 3 ; 
  //         resolve("Data Resolve Success")
  //       } else {
  //         count += 13 ; 
  //         reject("Rejected Data.. ")
  //       }
  //     }, 3000);
  //   }
  //   )

  //   return promise;
  // }

  // fetchPromise()
  //   .then((tejas) => {
  //     console.log("Success : ", tejas)
  //   })
  //   .catch((err) => {
  //     console.log("Error : ", err)
  //   });



  // console.log("End = ", count)

  return (
    <div>
      <center>
        <h1>
          Welcome to my promise app..
        </h1>

        {/* <PromiseDemo/> */}

        <ShowAllEmployees/>
      </center>
    </div>
  )
}

export default App