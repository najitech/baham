import React from 'react'

function SarmayeItem(props) {
  return (
    <div className='sarmayeInfoItemOp'>
        <div className='marginWSpanLablOp'><span >{props.text}<span className='spanboldspan'>{props.lim}</span></span></div>
        <div className={['rateSarmayeItemOp',props.red ? "rateSarmayeItemOpred":props.blue ? "rateSarmayeItemOpBlue":''].join(" ")}><span>{props.num}</span></div>
    </div>
  )
}

export default SarmayeItem