import React from 'react'
import './OverviewRateBox.css'

function OverviewRateBox(props) {
    const rates = {
        r1 : 1,
        r2 : 0.3,

    }
    let rateBoxColor = "OR_BoxShowItem_red"
    if (props.rate > 4 ) {
        rateBoxColor = "OR_BoxShowItem_blue"
    }
    if (props.rate > 7 ) {
        rateBoxColor = "OR_BoxShowItem_green"
    }
    let integer = Math.trunc(props.rate);
    let float = props.rate - integer
    float = float*100
    console.log(float)
    let rateArr = []
    for (let i = 0; i < integer ;i++) {
        rateArr.push("true")
      } 
      console.log(rateArr)
  return (
    <div className='OverviewRateBox'>
        <span className='OverviewRateBox_title'>{props.title}</span>
        <div className='OR_BoxShow'>
            {
                rateArr.map(() => {
            
                return (
                    <div className={['OR_BoxShowItem' ,rateBoxColor].join(" ")}> </div>
                )
                }
                )
            }
            {
                float > 0 ?
                <div className={['OR_BoxShowItem' ,rateBoxColor].join(" ")} style={{width:`${float}%`}}> </div>
                :
                <></>
            }
        
        </div>
        <span className='OverviewRateBox_Rate'>{props.rate}</span>
    </div>
  )
}

export default OverviewRateBox