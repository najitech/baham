import React from 'react'
import './Question.css'
function Question(props) {
  return (
    <div className='questionKar'>
      <div className='questionHeader'>
        <h3>{props.question}</h3>
      </div>
      <div className='questionAnswer'>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Question