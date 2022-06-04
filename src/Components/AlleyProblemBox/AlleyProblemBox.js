import React from 'react'
import './AlleyProblemBox.css'

function AlleyProblemBox(props) {
    let rateBoxColor = "OR_BoxShowItem_red"
    if (props.rate < props.average ) {
        rateBoxColor = "OR_BoxShowItem_green"
    }

  return (
    <div className='AlleyProblemBox'>
        <div className='AlleyProblemBoxTitleContainer'>
            <div className='AlleyProblemBoxTitleContainerDot'></div>
            <span className='AlleyProblemBoxTitle'>{props.title}</span>
        </div>
        <div className='AlleyProblemBoxBarContainer'>
            <span className='AlleyProblemBoxBarRate'>%{props.rate}</span>
            <div className={['AlleyProblemBoxBar' , rateBoxColor].join(" ")} style={{width:`${props.rate*0.91}%`}}>

            </div>
            {
                props.rate > props.average + 3 ?

                <div className='AlleyProblemBoxBarContainerAbs' style={{width:`${props.average*0.91}%`}}>
                    <div className='AlleyProblemBoxBarContainerAbsBox'>
                        <span className='AlleyProblemBoxBarContainerAbsBoxRate'>{props.average}</span>
                    </div>
                </div>
                :
                <></>
            }
           
       
        </div>
    </div>
  )
}

export default AlleyProblemBox