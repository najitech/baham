import React from 'react'
import './BaaHam_MarketerUser_Money.css'
import BaaHam_MU_MoneyInProgressTable from './BaaHam_MU_MoneyInProgressTable'
import BaaHam_MU_MoneyPaidTable from './BaaHam_MU_MoneyPaidTable'

function BaaHam_MarketerUser_Money() {
    let Tables = [ 
        {
            TableNumber : 1,
            OrderNumber : "3645128",
            Date : "15/09/1400" ,
            Price : "1/521/000",
            Type : "شبا",
        },
        {
            TableNumber : 1,
            OrderNumber : "3645128",
            Date : "15/09/1400" ,
            Price : "1/521/000",
            Type : "شبا",
        },
        {
            TableNumber : 1,
            OrderNumber : "3645128",
            Date : "15/09/1400" ,
            Price : "1/521/000",
            Type : "شبا",
        },
        {
            TableNumber : 1,
            OrderNumber : "3645128",
            Date : "15/09/1400" ,
            Price : "1/521/000",
            Type : "شبا",
        },
        {
            TableNumber : 1,
            OrderNumber : "3645128",
            Date : "15/09/1400" ,
            Price : "1/521/000",
            Type : "شبا",
        },
        {
            TableNumber : 1,
            OrderNumber : "3645128",
            Date : "15/09/1400" ,
            Price : "1/521/000",
            Type : "شبا",
        },
    ];
    let Tables2 = [ 
        {
            TableNumber : 1,
            PhoneNumber : "09157922402",
            Date : "15/09/1400" ,

        },
        {
            TableNumber : 1,
            PhoneNumber : "09157922402",
            Date : "15/09/1400" ,

        },
        {
            TableNumber : 1,
            PhoneNumber : "09157922402",
            Date : "15/09/1400" ,

        },
        {
            TableNumber : 1,
            PhoneNumber : "09157922402",
            Date : "15/09/1400" ,

        },

    ]
  return (
    <div className='BaaHam_MarketerUser_Money'>
        <div className='BaaHam_MarketerUser_MoneyInProgressContainer'>
            <div className='BaaHam_MarketerUser_MoneyInProgressTitle'>
                <span>در حال انجام</span>
            </div>
            <div className='BaaHam_MarketerUser_MoneyInProgressTables34'>
                <BaaHam_MU_MoneyInProgressTable Tables={Tables2}/>
            </div>
        </div>
        <div className='BaaHam_MarketerUser_MoneyInProgressContainer'>
            <div className='BaaHam_MarketerUser_MoneyInProgressTitle'>
                <span>در حال انجام</span>
            </div>
            <div className='BaaHam_MarketerUser_MoneyInProgressTables34'>
                <BaaHam_MU_MoneyPaidTable Tables={Tables}/>
            </div>
        </div>
        <div className='BaaHam_MarketerUser_MoneyFooter'>
            <div className='BaaHam_MarketerUser_MoneyFooterBox'>
                <div className='BaaHam_MarketerUser_MoneyFooterBoxTitle'>
                    <span>مبلغ کل نقدینگی در انتظار تایید</span>
                </div>
                <span className='BaaHam_MarketerUser_MoneyFooterBoxNumber'>33/253/741 تومان</span>
            </div>
            <div className='BaaHam_MarketerUser_MoneyFooterBox'>
                <div className='BaaHam_MarketerUser_MoneyFooterBoxTitle'>
                    <span>مبلغ کل نقدینگی در انتظار تایید</span>
                </div>
                <span className='BaaHam_MarketerUser_MoneyFooterBoxNumber'>33/253/741 تومان</span>
            </div>
        </div>

    </div>
  )
}

export default BaaHam_MarketerUser_Money