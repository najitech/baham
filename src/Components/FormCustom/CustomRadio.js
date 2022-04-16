import React from 'react'

function CustomRadio(props) {
  return (
    <div style={{borderColor:props.color &&props.check? "var(--color)":props.color? "#ABABAB":''}} className={!props.check?'radioCustomKarUncheck':'radioCustomKarChecked'}>
        <div></div>
    </div>
  )
}

export default CustomRadio