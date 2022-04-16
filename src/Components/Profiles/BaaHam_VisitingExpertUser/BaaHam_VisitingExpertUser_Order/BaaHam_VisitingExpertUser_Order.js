import React from 'react'
import BaaHam_VEU_OrderBox from './BaaHam_VEU_OrderBox'
import './BaaHam_VisitingExpertUser_Order.css'

function BaaHam_VisitingExpertUser_Order() {
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
    <div className='BaaHam_PropertyUser_Order'>
      <div className='BaaHam_PU_OrderMarketerBoxHeader'>
        <span>معرفی کاربران از طریق بازاریاب</span>
    </div>
    <BaaHam_VEU_OrderBox Data={table} TableNumber={1}/>
    <BaaHam_VEU_OrderBox Data={table} TableNumber={2}/>
    </div>
  )
}

export default BaaHam_VisitingExpertUser_Order