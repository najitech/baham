import React from 'react'
import {HiCheck} from 'react-icons/hi'
function CustomCheckBox(props) {
  return (
    <div className={props.checked?'customCheckBoxKarchecked':'customCheckBoxKarUnchecked'}>
        {props.checked?<HiCheck/>:''}
    </div>
  )
}

export default CustomCheckBox