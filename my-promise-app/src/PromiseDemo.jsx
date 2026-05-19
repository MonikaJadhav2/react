import React from 'react'

const PromiseDemo = () => {

    function fetchData() {

        let success = false;

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (success) {
                    resolve("Data Resolve Success")
                } else {
                    reject("Rejected Data.. ")
                }
            }, 2000);
        })
    }




    fetchData().then((res) => {
        console.log("Congratualtions.. Data Fetched...")
        console.log(res)
    }).catch((err) => {

        console.log("Sorry.. Data Not Fetched...")
        console.log(err)
    })


    return (
        <div>

        </div>
    )
}

export default PromiseDemo