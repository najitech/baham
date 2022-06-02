import React from 'react'
import './OverviewRateBox.css'

function OverviewRateBox(props) {
    const rates = {
        r1 : 1,
        r2 : 0.3,

    }
  return (
    <div className='OverviewRateBox'>
        <span className='OverviewRateBox_title'>{props.title}</span>
        <div className='OR_BoxShow'>
            <div className='OR_BoxShowItem'>

            </div>
        </div>
        <span className='OverviewRateBox_Rate'>{props.rate}</span>
    </div>
  )
}

export default OverviewRateBox