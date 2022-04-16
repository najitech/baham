import React, {useState} from 'react'
import './ChiefDashbord_Text.css'
import {BsCheckLg} from 'react-icons/bs'

function ChiefDashbord_Text() {
    const [textToggle , setTextToggle] = useState(1);
    const [textTick , setTextTick] = useState(true);
  return (
    <div className='ChiefDashbord_Text'>
        <div className='ChiefDashbord_FeedTextsBigContainer'>
            <span className='ChiefDashbord_FeedTextsBigContainerTitle'> پیامک</span>
            <div className='ChiefDashbord_FeedTextsContainer'>
                <div className='ChiefDashbord_FeedTextButtonContainerforBorder'>
                    <div className={['ChiefDashbord_FeedTextButton',textToggle===1? "ChiefDashbord_FeedTextButtonActive" : ""].join(" ")} onClick= {() => setTextToggle(1)}>
                        <span>ارسال پیامک </span>
                    </div>
                </div>
                <div className='ChiefDashbord_FeedTextButtonContainerforBorder'>
                    <div className={['ChiefDashbord_FeedTextButton',textToggle===2? "ChiefDashbord_FeedTextButtonActive" : ""].join(" ")} onClick= {() => setTextToggle(2)}>
                        <span>پیامک کاربران</span>
                    </div>
                </div>
                <div className='ChiefDashbord_FeedTextButtonContainerforBorder ChiefDashbord_FeedTextButtonNoBorder'>
                    <div className={['ChiefDashbord_FeedTextButton ',textToggle===3? "ChiefDashbord_FeedTextButtonActive" : ""].join(" ")} onClick= {() => setTextToggle(3)} >
                        <span>پیامک مدیران</span>
                    </div>
                </div>
        
            </div>
        </div>
        <div className='ChiefDashbord_FeedTextingForm'>
            <div className='ChiefDashbord_FeedTextingFormRow1'>
                <div className='ChiefDashbord_FeedTextingFormRow1Right'>
                    <div className='SCheckboxTick ChiefDashbord_FeedTextingFormTick' onClick={() => setTextTick(!textTick)}>
                        {
                            textTick ?
                            <BsCheckLg/>
                            : 
                            <></>
                        }
                        
                    </div>
                    <span className='ChiefDashbord_FeedTextingFormRow1Title'>ارسال پیامک ثبت، ویرایش ، حذف آگهی</span>
                </div>
                <div className='ChiefDashbord_FeedTextingFormRow1Left'>
                    <input className='ChiefDashbord_FeedTextingFormRow1Input'/>
                </div>
            </div>
            <span className='ChiefDashbord_FeedTextingFormRow1Title ChiefDashbord_FeedTextingFormRow2Title'>اگر قصد ارسال پیامک به بیش از یک شماره را دارید، از همدیگر جدا کنید </span>
            <div className='ChiefDashbord_FeedTextingFormRow3'>
                <span className='ChiefDashbord_FeedTextingFormRow1Title ChiefDashbord_FeedTextingFormRow3Title'> شماره تماس:</span>
                <div className='ChiefDashbord_FeedTextingFormRow1Left ChiefDashbord_FeedTextingRow3InputContainer'>
                    <input className='ChiefDashbord_FeedTextingFormRow1Input'/>
                </div>
            </div>
            <div className='ChiefDashbord_FeedTextingFormRow4'>
                <span className='ChiefDashbord_FeedTextingFormRow1Title ChiefDashbord_FeedTextingFormRow3Title ChiefDashbord_FeedTextingFormRow4Title'>  متن پیام:</span>
                <div className='ChiefDashbord_FeedTextingFormRow1Left ChiefDashbord_FeedTextingRow4TextareaContainer'>
                    <textarea className='ChiefDashbord_FeedTextingFormRow1Input ChiefDashbord_FeedTextingFormRow4TextArea'/>
                </div>
            </div>
            <div className='ChiefDashbord_FeedTextingFormButtonContainer'>
                <div className='ChiefDashbord_FeedTextingFormButton'>ارسال</div>
            </div>
        </div> 
    </div>
  )
}

export default ChiefDashbord_Text