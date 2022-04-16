import React from 'react'
import {IoLocationOutline} from 'react-icons/io5'
import {MdApartment} from 'react-icons/md'
import {BsHouseFill,BsBookmark,BsBookmarkFill} from 'react-icons/bs'
import {IoMdCall} from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'
import {MdOutlineCropRotate} from 'react-icons/md'
import './MelkCard.css'
function MelkCard(props) {
  return (
    <div className={['melkCard',props.boxshodow?'boxMargin':''].join(" ")} style={{width:props.width?props.width:'   ',backgroundColor: props.backgroundColor ? props.backgroundColor:"",margin:props.margin ? props.margin : ''}}>
        <div style={{height : props.boxshodow ?"150px":'' }} className='imageContainerMelkCard'>
            <img alt='' src={props.image}/>
            <div className='tagAndStar'>
                <div className={props.star ? 'starIconMelkCard':''}>{props.star ? <AiFillStar/>:''}</div>
                <div className='tagIconMelkCard'>{!props.mark?<BsBookmark/>:<BsBookmarkFill style={{color:'var(--color)'}}/>}</div>
            </div>
        </div>
        <div className='melkCardHeader'><h4 style={{marginBottom: props.boxshodow ? '5px':""}}>{props.title}</h4></div>
        <div className={props.boxshodow ? "iconsDivMelkCardBoxShSlider":'iconsDivMelkCard'}>
            <div className='r1MelkCard'><IoLocationOutline/><span>{props.position}</span></div>
            <div className='r2MelkCard'>
                <div><MdApartment/><span>{props.type}</span></div>
                <div style={{justifyContent:'flex-end'}}><BsHouseFill/><span>{props.amlak}</span></div>
            </div>
            <div className='r2MelkCard'>
                <div><MdOutlineCropRotate/><span>{props.meter} متر</span></div>
                <div style={{justifyContent:'flex-end'}}><span>{props.time}</span></div>
            </div>
        </div>
        <div className='priceAndCallMelkCard'>
            <div className='priceMelkCard'><h3 style={{fontSize:props.boxshodow? '11px':''}}><span>قیمت :</span>{props.price}</h3></div>
            {!props.boxshodow?<div className='callIconMelkCard'><IoMdCall/></div>:''}
        </div>
    </div>
            

  )
}
 
export default MelkCard