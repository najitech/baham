import React from 'react'
import './ADBanner.css'
function ADBanner(props) {
  return (
    <div className='adBannerContainer'>
        <img alt={props.alt} src={props.image}/>
    </div>
  )
}

export default ADBanner