import React from 'react'

function NetSabetItem(props) {
  return (
    <div className={[props.level===0?'meduimNetSabetOp' : props.level===1?'goodNetSabetOp':'weakNetSabetOp' ,'netSabetItemOp'].join(" ")}>
        <div className='imgItemNetSabet'>
        </div>
        <div className={['labelItemNetSabet' ,props.level===0?'meduimNetSabetLabelOp':props.level===1?'goodNetSabetLabelOp':'weakNetSabetLabelOp'].join(" ")}><span>{props.label}</span></div>
    </div>
  )
}

export default NetSabetItem