import React from 'react'

function AntenDahiItem(props) {
  return (
    <div className='operatorAntenInfBox'>
        <div className='imageOperatorInf'></div>
        <div className='conditionRadioBox'>
        <div className='radioBoxOp'>
            <div className='labelradioOp greenLabelRadioOp'><span>خوب</span></div>
            <div className='radioBtnOp'></div>    
        </div>    
        <div className='radioBoxOp'>
            <div className='labelradioOp redLabelRadioOp'><span>متوسط</span></div>
            <div className='radioBtnOp'></div>    
        </div>  
        <div className='radioBoxOp'>
            <div className='labelradioOp blueLabelRadioOp'><span>ضعیف</span></div>
            <div className='radioBtnOp'></div>    
        </div>  
        </div>
  </div>
  )
}

export default AntenDahiItem