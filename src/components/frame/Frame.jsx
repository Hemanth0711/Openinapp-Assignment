import React from 'react'
import "./Frame.css"
export default function Frame(props) {
    console.log(props);
  return (
    <div className='frame'>
      <div className="FrameLogo" style = {{background: props.background}}>
        <img  src = {props.icon} alt = ""/>
        
      </div>
      <div>Total Revenus</div>
      <div className="revenue">
        <div className="amount">{props.amount}</div>
        <div className="percentage">{props.percentage}</div>
      </div>
    </div>
  )
}
