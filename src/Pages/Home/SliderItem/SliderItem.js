import React from 'react'
import './SliderItem.css'
function SliderItem(props) {
  return (
    <div className='sliderItemHomePage'>
        <div className='pictureItemSllider'>
          <img alt='' src={props.image}/>
        </div>
        <div className='textAndTiteItemSlider'>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
        </div>
        <div className='infItemSlider'>
           <div>نوشته شده توسط {props.username}</div>
           <div style={{display:'flex',justifyContent:'space-between',width:'100px'}}>
             <span>{props.date}</span>
             <span >{props.time}</span>
           </div>
        </div>
    </div>
  )
}

export default SliderItem