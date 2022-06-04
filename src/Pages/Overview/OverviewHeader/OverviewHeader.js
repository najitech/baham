import React from 'react'
import './OverviewHeader.css'
import Logo from '../../../OverviewLogo.png'
import LogoText from '../../../overviewLogoText.png'
import Barcode from '../../../overviewBarcode.png'

function OverviewHeader() {
  return (
    <div className='OverviewHeader'>
        <div className='OverviewHeaderRight'>
            <img alt="logo" src={Logo} className="OverviewHeaderLogo"/>
            <div className='OverviewHeaderLogoTextContainer'>
                <img alt="logo" src={LogoText} className="OverviewHeaderLogoText"/>
            </div>
          
   
        </div>
        <div className='OverviewHeaderCenter'>
            <div className='OverviewHeaderCenterTop'>
                <div className='OverviewHeaderCenterTopAbs'>
                    <div className='OverviewHeaderCenterTopAbs_BahamContainer'>
                        <h2 className='OverviewHeaderCenterTopAbs_Baham'>باهم</h2>
                    </div>
            
                    <div className='OverviewHeaderCenterTopAbs_Texts'>
                        <h3><span>ب</span>رنامه</h3>
                        <h3><span>ا</span>نتخاب</h3>
                        <h3><span>ه</span>وشمندانه</h3>
                        <h3><span>م</span>سکن</h3>
                    </div>
                </div>
            </div>
            <div className='OverviewHeaderCenterBottom'>
                <span>آدرس: تهران بلوار مرزداران خیابان سرسبز جنوبی پلاک 1</span>
                <span>تلفن: 44262200</span>
            </div>
        </div>
        <div className='OverviewHeaderLeft'>
            <img alt="logo" src={Barcode} className="OverviewHeaderBarcode"/>
            <div className='OverviewHeaderLeftTitleContainer'>
                <span className='OverviewHeaderLeftTitle'>اسکن کنید</span>
            </div>
            
            
        </div>
    </div>
  )
}

export default OverviewHeader