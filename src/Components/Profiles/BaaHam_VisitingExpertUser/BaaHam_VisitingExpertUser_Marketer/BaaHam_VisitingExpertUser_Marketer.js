import React from 'react'
import BaaHam_PU_Marketer_Table from '../../BaaHam_PropertyUser/BaaHam_PropertyUser_Marketer/BaaHam_PU_Marketer_Table'
import './BaaHam_VisitingExpertUser_Marketer.css'

function BaaHam_VisitingExpertUser_Marketer() {
    let table = {
        Firstname : "علی",
        Lastname: "محمدی" ,
        Count : 5,
        Percent : 15,
        Number : "09125737294",
        Money:"200/000",
        Active:true,
    }
  return (
    <div className='BaaHam_VisitingExpertUser_Marketer'>
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
    <div className='BaaHam_PU_MarketerInputPercentBigContainer'>
        <div className='BaaHam_PU_MarketerInputPercentContainer'>
            <div className='BaaHam_PU_MarketerInputTitleContainer BaaHam_PU_MarketerInputTitleContainer3'>
                <span className='BaaHam_PU_MarketerInputTitle '>درصد سهم از خود</span>
            </div>
            <div className='InputExactContainerForBack InputExactContainerForBackVXUMarketer' >
                <input className='BaaHam_NU_ProfileInput BaaHam_PU_MarketerInput' type="text"  />
            </div>
        </div>
    </div>
    <div className='BaaHam_NU_ProfileButtonContainer BaaHam_PU_MarketerButtonContainer'>
        <div className='BaaHam_NU_ProfileButton'>
            <span>ثبت</span>
        </div>
    </div>
    <div className='BaaHam_PU_Marketer_TablesContainer'>
        <BaaHam_PU_Marketer_Table Data={table} TableNumber={1}/>
        <BaaHam_PU_Marketer_Table Data={table} TableNumber={2}/>
    </div>
    </div>
  )
}

export default BaaHam_VisitingExpertUser_Marketer