import React from 'react'
import {IoClose} from 'react-icons/io5'
function Budges(props) {
  return (
    <div className='budge'>
        <div className='closeBTNBudge'><IoClose/></div>
        <span>{props.text}</span>
    </div>
  )
}

export default Budges