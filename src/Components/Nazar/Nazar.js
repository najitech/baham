import React from 'react'
import './Nazar.css'
export default function Nazar(props) {
  return (
    <div className='nazar'>
        <div className='nazarInfo'>
            <div className='nazarProf'>
                <div className='nazarAvatar'></div>
                <div className='nazarUserInf'>
                    <h3>{props.name}</h3>
                    <span>{props.rule}</span>
                </div>
            </div>
            <div className='nazarText'>
                {props.text}
            </div>
        </div>
        <div className='nazarAks'>
            <div className='picNazar'>
                <img alt='' src={props.image}/>
            </div>
        </div>
    </div>
  )
}
