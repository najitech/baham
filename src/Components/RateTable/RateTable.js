import React from 'react'
import './RateTable.css'

function RateTable(props) {
  return (
    <div className='RateTable'>
        <div className='RT_Number'>
            <span>{props.tableNumber}</span>
        </div>
        <div className='RT_title'>
            <span>{props.tableTitle}</span>
        </div>
        <div className='RT_features'>
            <div className='RT_feature'>
                <div className='RT_featureName'>
                    
                </div>
                <div className='RT_featureRate'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default RateTable