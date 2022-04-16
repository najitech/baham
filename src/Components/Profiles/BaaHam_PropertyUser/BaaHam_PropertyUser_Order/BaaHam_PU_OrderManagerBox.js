import React from 'react'
import './BaaHam_PU_OrderManagerBox.css'

function BaaHam_PU_OrderManagerBox(props) {
    const {Data} = props;
  return (
    <div className='BaaHam_PU_OrderManagerBox'>
   
        <div className='BaaHam_PU_Marketer_Table'>
            <div className='BaaHam_PU_Marketer_TableNumberContainer'>
                <div className='BaaHam_PU_Marketer_TableNumber'>
                    <span>{props.TableNumber}</span>
                </div>
            </div>
            <div className='BaaHam_PU_Marketer_TableContainer'>
                <div className='BaaHam_PU_Marketer_TableTitles BaaHam_PU_OrderMarketer_TableTitles'>
                    <span  className='BaaHam_PU_Marketer_TableTitle'>نام</span>
                    <span  className='BaaHam_PU_Marketer_TableTitle'>نام خانوادگی</span>
                    <span  className='BaaHam_PU_Marketer_TableTitle'>شماره تماس</span>
                
                </div>
                <div className='BaaHam_PU_Marketer_TableContents'>
                    <span className='BaaHam_PU_Marketer_TableContent BaaHam_PU_OrderMarketer_TableContent BaaHam_PU_Marketer_TableContentFirst'>{Data.Firstname}</span>
                    <span className='BaaHam_PU_Marketer_TableContent BaaHam_PU_OrderMarketer_TableContent'>{Data.Lastname}</span>
                    <span className='BaaHam_PU_Marketer_TableContent BaaHam_PU_OrderMarketer_TableContent'>{Data.Number}</span>
            
                </div>
                <div className='BaaHam_PU_Marketer_TableTitles BaaHam_PU_OrderManager_TableTitles'>
                    <span  className='BaaHam_PU_Marketer_TableTitle BaaHam_PU_Marketer_TableTitle3'>تعداد سفارش</span>
                    <span  className='BaaHam_PU_Marketer_TableTitle'>نقدینگی</span>
            
                </div>
                <div className='BaaHam_PU_Marketer_TableContents'>
                    <span className={['BaaHam_PU_Marketer_TableContent  BaaHam_PU_OrderManager_TableContent BaaHam_PU_Marketer_TableContentFirst',Data.Active ? "BaaHam_PU_Marketer_TableContentActive" : ""].join(" ")}>{Data.Active ? "فعال" : "غیر فعال"}</span>
                    <span className='BaaHam_PU_Marketer_TableContent  BaaHam_PU_OrderManager_TableContent'>نمایش</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BaaHam_PU_OrderManagerBox