import React,  {useState} from 'react'
import './BuildingBox.css'
import {BsCheckLg,BsPlusSquare} from 'react-icons/bs'
import {RiUploadCloudLine} from 'react-icons/ri'
import {BiGlasses,BiTrash} from 'react-icons/bi'
import {HiOutlinePencilAlt} from 'react-icons/hi'


function BuildingBox(props) {
    const {building} =props;
    let StateClass = "BuildingBoxItemStateNew";
    if (building.state ==="جدید") {
        StateClass = "BuildingBoxItemStateNew";
    }
    if (building.state ==="در حال ارزیابی") {
        StateClass = "BuildingBoxItemStateInProgress";
    }
    if (building.state ==="ارجاع شده") {
        StateClass = "BuildingBoxItemStateReferred";
    }
    if (building.state ==="تکمیل شده") {
        StateClass = "BuildingBoxItemStateCompleted";
    }

    const [tick , setTick] = useState(false);
  return (
    <div className='BuildingBox'>
        <div className='BuildingBoxItem1'>
            <div className='SCheckboxTick BuildingBoxItem1Tick' onClick={() => setTick(!tick)}>
                {
                    tick ?
                    <BsCheckLg/>
                    : 
                    <></>
                }
                
            </div>
            <span className='BuildingBoxItemTitle BuildingBoxItemTitle1'>{building.rowNumber}</span>
        </div>

        <div className='BuildingBoxItem2'>
            <span className='BuildingBoxItemTitle'>{building.buildingCode}</span>
        </div>
        <div className='BuildingBoxItem3'>
            <span className='BuildingBoxItemTitle'>{building.owner}</span>
        </div>          
        <div className='BuildingBoxItem4'>
            <span className='BuildingBoxItemTitle'>{building.expertName}</span>
        </div>
        <div className='BuildingBoxItem5'>
            <span className='BuildingBoxItemTitle'>{building.from}</span>
        </div>
        <div className='BuildingBoxItem6'>
            <span className={['BuildingBoxItemTitle BuildingBoxItemTitleState',StateClass].join(" ")}>{building.state}</span>
        </div>
        <div className='BuildingBoxItem7'>
            <span className='BuildingBoxItemTitle'>{building.paid}</span>
        </div>
      
        <div className='BuildingBoxItem8'>
            <div className='ChiefDashbord_FeedContentEvaluationButtonC'>
            
                <span className='ChiefDashbord_FeedContentEvaluationButtonTitleBuildingBox'>ارسال</span>
            </div>
            <div className='BuildingBoxItem8Icons'>
                <div className='BuildingBoxItem8Icon'>
                    <RiUploadCloudLine/>
                </div>
                <div className='BuildingBoxItem8Icon'>
                    <BiGlasses/>
                </div>
                <div className='BuildingBoxItem8Icon'>
                    <HiOutlinePencilAlt/>
                </div>
                <div className='BuildingBoxItem8Icon BuildingBoxItem8IconLast'>
                    <BiTrash/>
                </div>
            </div>
          
        </div>



    </div>
  )
}

export default BuildingBox