import React from 'react'
import './Alert.css'

function Alert(props) {
  let AlertBack = "AlertComponentGreen"
  let AlertText = "AlertTextGreen"
  if (props.color==="Orange") {
    AlertBack = "AlertComponentOrange"
    AlertText = "AlertTextOrange"
  }
  if (props.color==="Red") {
    AlertBack = "AlertComponentRed"
    AlertText = "AlertTextRed"
  }
  return (
    <div className={['AlertComponent',AlertBack].join(" ")}>
        {
            props.Alerts.map((alert) => 
                <span className={['AlertText',AlertText].join(" ")}>{alert}</span>
            )
        }
    </div>
  )
}

export default Alert