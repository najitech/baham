import React from 'react'
import BaaHam_VEU_MyHousesBox from './BaaHam_VEU_MyHousesBox'
import './BaaHam_VisitingExpertUser_MyHouses.css'

function BaaHam_VisitingExpertUser_MyHouses() {
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
    <div className='BaaHam_VisitingExpertUser_MyHouses'>
        <BaaHam_VEU_MyHousesBox  Data={table} TableNumber={1}/>
    </div>
  )
}

export default BaaHam_VisitingExpertUser_MyHouses