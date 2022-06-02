import React from 'react'
import OverviewRateBox from '../../Components/OverviewRateBox/OverviewRateBox'
import './OverviewRate.css'

function OverviewRate() {
  return (
    <div className='OverviewRate'>
        <div className='OverviewRateRight'>
            <OverviewRateBox title="نور" rate={9}/>
        </div> 
        <div className='OverviewRateCenter'>

        </div>
        <div className='OverviewRateLeft'>

        </div>
    </div>
  )
}

export default OverviewRate