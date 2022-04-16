import React from 'react'
import './BaaHam_NormalUsers_AgahiBox.css'
import Image1 from '../../../pic1.jpg'
import {BsShare} from 'react-icons/bs'

function BaaHam_NormalUsers_AgahiBox() {
  return (
    <div className="BaaHam_NormalUsers_AgahiBox">
        <div className='BaaHam_NormalUsers_AgahiBoxImageContainer'>
            <img alt="hi2" src={Image1} className="BaaHam_NormalUsers_AgahiBoxImage" />
        </div>
        <div className='BaaHam_NormalUsers_AgahiBoxContent'>
            <span className='BaaHam_NU_AgahiBoxContentTitle'>عنوان آگهی</span>
            <span className='BaaHam_NU_AgahiBoxContentNumber'>شماره آگهی</span>
            <div className='BaaHam_NU_AgahiBoxContentEditDelete'>
                <span className='BaaHam_NU_AgahiBoxContentEdit'>ویرایش</span>
                <span className='BaaHam_NU_AgahiBoxContentDelete'>حذف</span>
            </div>
            <div className='BaaHam_NU_AgahiBoxFooter'>
                <div className='BaaHam_NU_AgahiBoxFooterDateTime'>
                    <span className='BaaHam_NU_AgahiBoxFooterDate'>تاریخ: 1400/6/2</span>
                    <span className='BaaHam_NU_AgahiBoxFooterTime'>ساعت: 16:28</span>
                </div>
                <div className='BaaHam_NU_AgahiBoxFooterIconContainer'>
                    <div className='BaaHam_NU_AgahiBoxFooterIcon'>
                        <BsShare/>
                    </div>
                  
                </div>
          
            </div>
        </div>
    </div>
  )
}

export default BaaHam_NormalUsers_AgahiBox