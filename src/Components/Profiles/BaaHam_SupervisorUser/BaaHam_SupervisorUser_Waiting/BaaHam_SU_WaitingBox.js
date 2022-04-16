import React from 'react'
import './BaaHam_SU_WaitingBox.css'
import Image1 from '../../../../pic1.jpg'
import {TiTick} from 'react-icons/ti'
import {MdOutlineBlock} from 'react-icons/md'

function BaaHam_SU_WaitingBox(props) {
  return (
    <div className='BaaHam_SU_WaitingBox' >
        <div className='BaaHam_SU_WaitingBoxImageContainer' onClick= {() => props.SetChoose(props.BoxNumber)}>
            <img className='BaaHam_SU_WaitingBoxImage' src={Image1} alt='hi' />
        </div>
        <div className='BaaHam_SU_WaitingBoxChooseContainer'>
            <div className={['BaaHam_SU_WaitingBoxChooseRightContainer' , !props.Choose? "BaaHam_SU_WaitingBoxDeactive" : ""].join("")}>
                <div className='BaaHam_SU_WaitingBoxChooseRight'>

                </div>
            </div>
        
            <div className='BaaHam_SU_WaitingBoxChooseContainer2'>
                <div className={['BaaHam_SU_WaitingBoxChoose' , !props.Choose? "BaaHam_SU_WaitingBoxDeactive" : ""].join("")}>
                    <div className={['BaaHam_SU_WaitingBoxChooseIconContainer',props.Choose? "BaaHam_SU_WaitingBoxChooseIconContainerChoose" : ""].join(" ")} onClick= {() => props.SetChoose(props.BoxNumber)} >
                        {
                            props.Choose ?
                            <TiTick/> 
                            :
                             <MdOutlineBlock/>
            
                        }

                        
                    </div>
                </div>
            </div>
            <div className={['BaaHam_SU_WaitingBoxChooseLeftContainer' , !props.Choose? "BaaHam_SU_WaitingBoxDeactive" : ""].join("")}>
                <div className='BaaHam_SU_WaitingBoxChooseLeft'>

                </div>
            </div>
    
        </div>
    </div>
  )
}

export default BaaHam_SU_WaitingBox