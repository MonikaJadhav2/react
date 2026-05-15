import React from 'react'

const Child = ({sendButtonMsg , sendNormalMsg}) => {

   sendNormalMsg("Normal Msg from Child..")

  return (
    <div>
      
      <button onClick={ () => sendButtonMsg("button msg from child..")}>send msg to parent </button>
    </div>
  )
}

export default Child