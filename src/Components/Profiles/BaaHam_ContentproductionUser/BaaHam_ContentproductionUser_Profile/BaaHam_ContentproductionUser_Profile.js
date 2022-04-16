import React from 'react'
import './BaaHam_ContentproductionUser_Profile.css'

function BaaHam_ContentproductionUser_Profile() {
  return (
    <div className='BaaHam_ContentproductionUser_Profile'>
        <div className='BaaHam_NU_ProfileInputsContainer'>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>نام</span>
                <div className='InputExactContainerForBack'>
                    <input className='BaaHam_NU_ProfileInput' type="text" />
                </div>
                
            </div>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>نام خانوادگی</span>
                <div className='InputExactContainerForBack'>
                    <input className='BaaHam_NU_ProfileInput' type="text" />
                </div>
            </div>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>شماره تلفن</span>
                <div className='InputExactContainerForBack'>
                    <input className='BaaHam_NU_ProfileInput' type="text" />
                </div>
            </div>
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>ایمیل</span>
                <div className='InputExactContainerForBack'>
                    <input className='BaaHam_NU_ProfileInput' type="text"  />
                </div>
            </div>
        </div>
        <div className='BaaHam_NU_ProfileTextAreaContainer'>
            <span className='BaaHam_NU_ProfileInputTitle'>آدرس</span>
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

export default BaaHam_ContentproductionUser_Profile