import React from 'react'
import '../../BaaHam_MarketerUser/BaaHam_MarketerUser_Introduction/BaaHam_MarketerUser_Introduction.css'
import BaaHam_VU_IntroductionTable from './BaaHam_VU_IntroductionTable'

function BaaHam_VisitingExpertUser_Introduction() {
    let Tables = [ 
        {
            TableNumber : 1,
            FirstName : "محمد",
            LastName : "احمدی" ,
            PhoneNumber : "09157922402",
            RemainTime : "15:63:23",
            Status : "تبدیل شده" ,
            Description : "ندارد" 
        },
        
        {
            TableNumber : 2,
            FirstName : "علی",
            LastName : "احمدی" ,
            PhoneNumber : "09157922402",
            RemainTime : "1:97:23",
            Status : "تبدیل نشده" ,
            Description : "ندارد" 
        },
        {
            TableNumber : 3,
            FirstName : "ارسلان",
            LastName : "حسینی" ,
            PhoneNumber : "09393544886",
            RemainTime : "15:63:23",
            Status : "تبدیل شده" ,
            Description : "ندارد" 
        },
        {
            TableNumber : 3,
            FirstName : "ارسلان",
            LastName : "حسینی" ,
            PhoneNumber : "09393544886",
            RemainTime : "15:63:23",
            Status : "تبدیل شده" ,
            Description : "ندارد" 
        },
        {
            TableNumber : 3,
            FirstName : "ارسلان",
            LastName : "حسینی" ,
            PhoneNumber : "09393544886",
            RemainTime : "15:63:23",
            Status : "تبدیل شده" ,
            Description : "ندارد" 
        },
        {
            TableNumber : 3,
            FirstName : "ارسلان",
            LastName : "حسینی" ,
            PhoneNumber : "09393544886",
            RemainTime : "15:63:23",
            Status : "تبدیل شده" ,
            Description : "ندارد" 
        },
        {
            TableNumber : 3,
            FirstName : "ارسلان",
            LastName : "حسینی" ,
            PhoneNumber : "09393544886",
            RemainTime : "15:63:23",
            Status : "تبدیل شده" ,
            Description : "ندارد" 
        },
        {
            TableNumber : 3,
            FirstName : "ارسلان",
            LastName : "حسینی" ,
            PhoneNumber : "09393544886",
            RemainTime : "15:63:23",
            Status : "تبدیل شده" ,
            Description : "ندارد" 
        },
        {
            TableNumber : 3,
            FirstName : "ارسلان",
            LastName : "حسینی" ,
            PhoneNumber : "09393544886",
            RemainTime : "15:63:23",
            Status : "تبدیل شده" ,
            Description : "ندارد" 
        },
        {
            TableNumber : 3,
            FirstName : "ارسلان",
            LastName : "حسینی" ,
            PhoneNumber : "09393544886",
            RemainTime : "15:63:23",
            Status : "تبدیل شده" ,
            Description : "ندارد" 
        },
        {
            TableNumber : 3,
            FirstName : "ارسلان",
            LastName : "حسینی" ,
            PhoneNumber : "09393544886",
            RemainTime : "15:63:23",
            Status : "تبدیل شده" ,
            Description : "ندارد" 
        },
    ]
  return (
    <div className='BaaHam_MarketerUser_Introduction'>
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
        </div>
        <div className='BaaHam_NU_ProfileButtonContainer'>
            <div className='BaaHam_NU_ProfileButton'>
                <span>ثبت</span>
            </div>
        </div>
        <div className='BaaHam_MU_IntroductionTables'>
            <BaaHam_VU_IntroductionTable TableNumber={1} Tables={Tables}/>
         
        </div>
        <div className='FooternoneForAb'>

        </div>


    </div>
  )
}

export default BaaHam_VisitingExpertUser_Introduction