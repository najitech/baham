import React from 'react'

function Square(props) {
  return (
    <div onClick={()=>props.click(props.page)} className={[props.two  ? 'squareClassName2':'squareClassName',props.active ?'squareClassNameActive':''].join(" ")}></div>
  )
}

export default Square