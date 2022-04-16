import React from 'react'
import './BaaHam_PU_Marketer_Table.css'

function BaaHam_PU_Marketer_Table(props) {
    const {Data} = props;
  return (
    <div className='BaaHam_PU_Marketer_Table'>
        <div className='BaaHam_PU_Marketer_TableNumberContainer'>
            <div className='BaaHam_PU_Marketer_TableNumber'>
                <span>{props.TableNumber}</span>
            </div>
        </div>
        <div className='BaaHam_PU_Marketer_TableContainer'>
            <div className='BaaHam_PU_Marketer_TableTitles'>
                <span  className='BaaHam_PU_Marketer_TableTitle'>نام</span>
                <span  className='BaaHam_PU_Marketer_TableTitle'>نام خانوادگی</span>
                <span  className='BaaHam_PU_Marketer_TableTitle'>شماره تماس</span>
                <span  className='BaaHam_PU_Marketer_TableTitle'>درصد</span>
            </div>
            <div className='BaaHam_PU_Marketer_TableContents'>
                <span className='BaaHam_PU_Marketer_TableContent BaaHam_PU_Marketer_TableContentFirst'>{Data.Firstname}</span>
                <span className='BaaHam_PU_Marketer_TableContent'>{Data.Lastname}</span>
                <span className='BaaHam_PU_Marketer_TableContent'>{Data.Number}</span>
                <span className='BaaHam_PU_Marketer_TableContent'>{Data.Percent} %</span>
            </div>
            <div className='BaaHam_PU_Marketer_TableTitles'>
                <span  className='BaaHam_PU_Marketer_TableTitle'>وضعیت</span>
                <span  className='BaaHam_PU_Marketer_TableTitle BaaHam_PU_Marketer_TableTitle3'>تعداد سفارش</span>
                <span  className='BaaHam_PU_Marketer_TableTitle'>نقدینگی</span>
                <span  className='BaaHam_PU_Marketer_TableTitle'>جزئیات</span>
            </div>
            <div className='BaaHam_PU_Marketer_TableContents'>
                <span className={['BaaHam_PU_Marketer_TableContent BaaHam_PU_Marketer_TableContentFirst',Data.Active ? "BaaHam_PU_Marketer_TableContentActive" : ""].join(" ")}>{Data.Active ? "فعال" : "غیر فعال"}</span>
                <span className='BaaHam_PU_Marketer_TableContent'>{Data.Count}</span>
                <span className='BaaHam_PU_Marketer_TableContent'>{Data.Money} </span>
                <span className='BaaHam_PU_Marketer_TableContent BaaHam_PU_Marketer_TableContentShow'>نمایش</span>
            </div>
        </div>
    </div>
  )
}

export default BaaHam_PU_Marketer_Table