import React from 'react'

import {BsCheckLg} from 'react-icons/bs'
function CheckCust(props) {
  return (
    <div className={props.check ? 'checkCustomSabtchekced':'checkCustomSabt'}>
        {props.check ? <BsCheckLg/>:''}
    </div>
  )
}

export default CheckCust