import React from 'react'
import './BaaHam_PropertyUser_Profile.css'

function BaaHam_PropertyUser_Profile() {
  return (
    <div className='BaaHam_PropertyUser_Profile'>
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

export default BaaHam_PropertyUser_Profile