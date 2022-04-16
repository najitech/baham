import React from 'react'
import './BaaHam_PropertyUser_Order.css'
import BaaHam_PU_OrderManagerBox from './BaaHam_PU_OrderManagerBox'
import BaaHam_PU_OrderMarketerBox from './BaaHam_PU_OrderMarketerBox'

function BaaHam_PropertyUser_Order() {
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
        <BaaHam_PU_OrderMarketerBox Data={table} TableNumber={1}/>
        <BaaHam_PU_OrderMarketerBox Data={table} TableNumber={2}/>
        <BaaHam_PU_OrderMarketerBox Data={table} TableNumber={3}/>



        <div className='BaaHam_PU_OrderMarketerBoxHeader'>
            <span>معرفی کاربران از طریق مدیر</span>
        </div>
        <BaaHam_PU_OrderManagerBox Data={table} TableNumber={1}/>
        <BaaHam_PU_OrderManagerBox Data={table} TableNumber={2}/>
        <BaaHam_PU_OrderManagerBox Data={table} TableNumber={3}/>

    </div>
  )
}

export default BaaHam_PropertyUser_Order