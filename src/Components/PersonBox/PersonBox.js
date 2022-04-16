import React, {useState} from 'react'
import './PersonBox.css'
import {BsCheckLg} from 'react-icons/bs'
import {BiTrash} from 'react-icons/bi'
import {FiChevronDown,FiChevronUp} from 'react-icons/fi'

function PersonBox(props) {
    const {person} = props;
    const [tick , setTick] = useState(false);
    const [openAcc, setOpenAcc] = useState(false);
  return (
    <div className='PersonBox'>
        <div className='PersonBoxTop'>
            <div className='BuildingBoxItem1'>
                <div className='SCheckboxTick BuildingBoxItem1Tick' onClick={() => setTick(!tick)}>
                    {
                        tick ?
                        <BsCheckLg/>
                        : 
                        <></>
                    }
                    
                </div>
                <span className='BuildingBoxItemTitle BuildingBoxItemTitle1'>{person.rowNumber}</span>
            </div>

            <div className='BuildingBoxItem2'>
                <span className='BuildingBoxItemTitle'>{person.userName}</span>
            </div>
            <div className='BuildingBoxItem3'>
                <span className='BuildingBoxItemTitle'>{person.name}</span>
            </div>          
            <div className='BuildingBoxItem4'>
                <span className='BuildingBoxItemTitle'>{person.email}</span>
            </div>
            <div className='BuildingBoxItem5'>
                <span className='BuildingBoxItemTitle'>{person.status}</span>
            </div>

            <div className='BuildingBoxItem8'>
                <div className='BuildingBoxItem8Icons'>
                    <div className='BuildingBoxItem8Icon BuildingBoxItem8IconLast'>
                        <BiTrash/>
                    </div>
                    <div className='BuildingBoxItem8Icon BuildingBoxItem8IconLast personBoxOpenIconContainer' onClick={() => setOpenAcc(!openAcc)}>
                        {
                            !openAcc ? 
                            <FiChevronDown/>
                            :
                            <FiChevronUp/>
                        }
                        
                    </div>
                
                </div>
            
            </div>
        </div>
        <div className='PersonBoxAcc' style={{display:openAcc? "block" : "none" }}>
            <div className='PersonBoxAccInputsContainer'>
                <div className='PersonBoxAccInputContainer'>
                    <span className='PersonBoxAccInputTitle'>نام و نام خانوادگی</span>
                    <div className='ChiefDashbord_FeedTextingFormRow1Left PersonBoxAccInputContainerExact'>
                        <input className='ChiefDashbord_FeedTextingFormRow1Input'/>
                    </div>

                </div>
                <div className='PersonBoxAccInputContainer'>
                    <span className='PersonBoxAccInputTitle'> ایمیل</span>
                    <div className='ChiefDashbord_FeedTextingFormRow1Left PersonBoxAccInputContainerExact'>
                        <input className='ChiefDashbord_FeedTextingFormRow1Input'/>
                    </div>

                </div>
                <div className='PersonBoxAccInputContainer'>
                    <span className='PersonBoxAccInputTitle'> نقش</span>
                    <div className='ChiefDashbord_FeedTextingFormRow1Left PersonBoxAccInputContainerExact'>
                        <input className='ChiefDashbord_FeedTextingFormRow1Input'/>
                    </div>

                </div>
             
            </div>
            <div className='PersonBoxAccInformationsContainer'>
                <div className='PersonBoxAccInformationContainer'>
                    <div className='PersonBoxAccInformation'>
                        <span className='PersonBoxAccInformationTitle'>ساعت ورود به سایت:</span>
                        <span className='PersonBoxAccInformationTitle'>12:30</span>
                    </div>
                    <div className='PersonBoxAccInformation'>
                        <span className='PersonBoxAccInformationTitle'>ثبت آگهی:</span>
                        <span className='PersonBoxAccInformationTitle'>13:30 &nbsp;&nbsp;&nbsp;&nbsp; 1400/11/15</span>
                    </div>
                </div>
                <div className='PersonBoxAccInformationContainer NoBorder'>
                    <div className='PersonBoxAccInformation '>
                        <span className='PersonBoxAccInformationTitle'>ساعت خروج از سایت:</span>
                        <span className='PersonBoxAccInformationTitle'>12:30</span>
                    </div>
                    <div className='PersonBoxAccInformation'>
                        <span className='PersonBoxAccInformationTitle'>ویرایش آگهی:</span>
                        <span className='PersonBoxAccInformationTitle'>13:30 &nbsp;&nbsp;&nbsp;&nbsp; 1400/11/15</span>
                    </div>
                </div>
                <div className='PersonBoxAccInformationContainer'>
                    <div className='PersonBoxAccInformation PersonBoxAccInformationLast'>
                        <span className='PersonBoxAccInformationTitle'>بازدید:</span>
                        <span className='PersonBoxAccInformationTitle PersonBoxAccInformationTitleLast'>صفحه کارشناسی ملک با ضمانت باهم</span>
                    </div>
                    <div className='PersonBoxAccInformation'>
                       
                    </div>
                </div>
            </div>
            <div className='PersonBoxAccButtonContainer'>
                <div className='ChiefDashbord_FeedTextingFormButton'>ثبت ویرایش</div>
            </div>
        </div>

    </div>
  )
}

export default PersonBox