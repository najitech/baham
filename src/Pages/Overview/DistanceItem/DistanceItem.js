import React from 'react'

function DistanceItem(props) {
  const Icon = props.Icon
  return (
  <div className='distanceItemOp'>
    <div className='iconAndNameDistanceObj'><Icon/><span>{props.label}</span></div>
    <div className='meterBoxDistanceObj'><span>{props.num}</span></div>
  </div>
  )
}

export default DistanceItem