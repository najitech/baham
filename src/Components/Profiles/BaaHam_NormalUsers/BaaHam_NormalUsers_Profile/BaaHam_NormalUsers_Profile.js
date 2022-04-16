import React from 'react'
import './BaaHam_NormalUsers_Profile.css'
import Alert from '../../../Alert/Alert'

function BaaHam_NormalUsers_Profile() {
    let Alerts = [
        "این میتواند ارور اول باشد که نمایان میشود",
        "ارور دوم در اینجا به نمایش در می آید",
        "سومین نکته میتواند اینجا به کاربر نمایش داده شود"
    ]
  return (
    <div className='BaaHam_NormalUsers_Profile'>
        <Alert Alerts={Alerts}/>
        <Alert Alerts={Alerts} color="Orange"/>
        <Alert Alerts={Alerts} color="Red"/>
        <div className='BaaHam_NU_ProfileInputsContainer'>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>نام <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
                <div className='InputExactContainerForBack'>
                    <input className='BaaHam_NU_ProfileInput' type="text" />
                </div>
                
            </div>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>نام خانوادگی <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
                <div className='InputExactContainerForBack'>
                    <input className='BaaHam_NU_ProfileInput' type="text" />
                </div>
            </div>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>شماره تلفن <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
                <div className='InputExactContainerForBack'>
                    <input className='BaaHam_NU_ProfileInput' type="text" />
                </div>
            </div>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>ایمیل <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
                <div className='InputExactContainerForBack'>
                    <input className='BaaHam_NU_ProfileInput' type="text"  />
                </div>
            </div>
        </div>
        <div className='BaaHam_NU_ProfileTextAreaContainer'>
            <span className='BaaHam_NU_ProfileInputTitle'>آدرس <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
            <div className='InputExactContainerForBackTextArea'>
                <textarea  className='BaaHam_NU_ProfileTextArea' />
            </div>
              
        </div>
        <div className='BaaHam_NU_ProfileButtonContainer'>
            <div className='BaaHam_NU_ProfileButton'>
                <span>ثبت</span>
            </div>
        </div>
    </div>
  )
}

export default BaaHam_NormalUsers_Profile