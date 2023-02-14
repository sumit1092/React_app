import React from 'react'

function Alert(props) {
    // const capital=(word)=>{
    //     const lower = word.toLowercase();
    //     return lower.charAt(0).toUppercase()+lower.slice(1);
    // }
  return (
       <div style={{height:'40px'}}>
       {props.alert && <div className={`alert alert-${props.alert.type} alert-dissmisable fade show`} role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}   
       </div>}
       </div>
  )
}

export default Alert
