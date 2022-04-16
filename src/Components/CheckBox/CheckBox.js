import React , {useState} from 'react'
import './CheckBox.css'
import {BsCheckLg} from 'react-icons/bs'

function CheckBox(props) {
    const [tick , setTick] = useState(true);
  return (
    <div className='SpringCheckBox' style={{backgroundColor:props.backColor}}>
        <div className='SCheckboxTick' onClick={() => setTick(!tick)}>
            {
                tick ?
                <BsCheckLg/>
                : 
                <></>
            }
            
        </div>
        <span className='SCheckBoxTitle'>{props.title}</span>
    </div>
  )
}

export default CheckBox