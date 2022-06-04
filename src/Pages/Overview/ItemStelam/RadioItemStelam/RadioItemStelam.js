import React from 'react'

function RadioItemStelam(props) {
  return (
    <div className='radioItemEstelamOp' style={{margin:props.margin?'5px 0px':''}}>
       <div><span>{props.label}</span></div>
       <div className={!props.active? 'radioBtnEstelamOp':'radioBtnEstelamOpActive'}><div></div></div>
  </div>
  )
}

export default RadioItemStelam