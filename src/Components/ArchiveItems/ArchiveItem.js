import React from 'react'
import './ArchiveItem.css'
function ArchiveItem(props) {
  return (
    <div className='archiveItemComp' style={{width:props.width}}>
        <img alt={props.alt} src={props.image}/>
        <div style={{marginRight:'-5px'}}><h3>{props.title}</h3></div>
        <p>{props.text}</p> 
        <div className='infoTimesBlogItemArchive'><span>مطالعه {props.time} دقیقه </span><span>{props.date}</span></div>
    </div>
  )
}

export default ArchiveItem