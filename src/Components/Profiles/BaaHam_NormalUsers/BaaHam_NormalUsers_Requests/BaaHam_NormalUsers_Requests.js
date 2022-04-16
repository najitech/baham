import React from 'react'
import './BaaHam_NormalUsers_Requests.css'

function BaaHam_NormalUsers_Requests(props) {
  const {Stepper} = props;
  return (
    <div className="BaaHam_NormalUsers_Requests">
        <div className="BaaHam_NormalUsers_RequestsHeader">
            <span className='BaaHam_NormalUsers_RequestsHeaderTitle'>شماره درخواست</span>
            <div className='BaaHam_NormalUsers_RequestsHeaderNumberContainer'>
              <span className='BaaHam_NormalUsers_RequestsHeaderNumber'>3654512</span>
            </div>
        </div>
        <div className='BaaHam_NormalUsers_RequestsStepperBigContainer'>
          <div className='BaaHam_NormalUsers_RequestsStepperContainer'>

                <div className='BaaHam_NormalUsers_RequestsStepperBox'>
                  <div className={['BaaHam_NormalUsers_RequestsStepperTopBox' , Stepper > 0 ? "BaaHam_NormalUsers_RequestsStepperTopBoxActive" :""].join(" ")}>
                      <span>ثبت سفارش ارزیابی ملک</span>
                  </div>
                  <div className={['BaaHam_NormalUsers_RequestsStepperBottomBox' , Stepper > 0 ? "BaaHam_NormalUsers_RequestsStepperBottomBoxActive" :""].join(" ")}>

                  </div>
                  <div  className={['BaaHam_NormalUsers_RequestsStepperCircle' , Stepper > 0 ? "BaaHam_NormalUsers_RequestsStepperCircleActive" :""].join(" ")}>

                  </div>
                </div>
                <div className='BaaHam_NormalUsers_RequestsStepperBox'>
                  <div className={['BaaHam_NormalUsers_RequestsStepperTopBox' , Stepper > 1 ? "BaaHam_NormalUsers_RequestsStepperTopBoxActive" :""].join(" ")}>
                    <span>در حال بررسی</span>
                  </div>
                  <div className={['BaaHam_NormalUsers_RequestsStepperBottomBox' , Stepper > 1 ? "BaaHam_NormalUsers_RequestsStepperBottomBoxActive" :""].join(" ")}>

                  </div>
                  <div  className={['BaaHam_NormalUsers_RequestsStepperCircle' , Stepper > 1 ? "BaaHam_NormalUsers_RequestsStepperCircleActive" :""].join(" ")}>

                  </div>
                </div>
                <div className='BaaHam_NormalUsers_RequestsStepperBox'>
                  <div className={['BaaHam_NormalUsers_RequestsStepperTopBox' , Stepper > 2 ? "BaaHam_NormalUsers_RequestsStepperTopBoxActive" :""].join(" ")}>
                      <span>هماهنگی بازدید</span>
                  </div>
                  <div className={['BaaHam_NormalUsers_RequestsStepperBottomBox' , Stepper > 2 ? "BaaHam_NormalUsers_RequestsStepperBottomBoxActive" :""].join(" ")}>

                  </div>
                  <div  className={['BaaHam_NormalUsers_RequestsStepperCircle' , Stepper > 2 ? "BaaHam_NormalUsers_RequestsStepperCircleActive" :""].join(" ")}>

                  </div>
                </div>
                <div className='BaaHam_NormalUsers_RequestsStepperBox'>
                  <div className={['BaaHam_NormalUsers_RequestsStepperTopBox' , Stepper > 3 ? "BaaHam_NormalUsers_RequestsStepperTopBoxActive" :""].join(" ")}>
                      <span>آماده سازی ارزیابی</span>
                  </div>
                  <div className={['BaaHam_NormalUsers_RequestsStepperBottomBox' , Stepper > 3 ? "BaaHam_NormalUsers_RequestsStepperBottomBoxActive" :""].join(" ")}>

                  </div>
                  <div  className={['BaaHam_NormalUsers_RequestsStepperCircle' , Stepper > 3 ? "BaaHam_NormalUsers_RequestsStepperCircleActive" :""].join(" ")}>

                  </div>
                </div>
                <div className='BaaHam_NormalUsers_RequestsStepperBox'>
                  <div className={['BaaHam_NormalUsers_RequestsStepperTopBox' , Stepper > 4 ? "BaaHam_NormalUsers_RequestsStepperTopBoxActive" :""].join(" ")}>
                      <span>دریافت گزارش ارزیابی</span>
                  </div>
                  <div className={['BaaHam_NormalUsers_RequestsStepperBottomBox' , Stepper > 4 ? "BaaHam_NormalUsers_RequestsStepperBottomBoxActive" :""].join(" ")}>

                  </div>
                  <div  className={['BaaHam_NormalUsers_RequestsStepperCircle' , Stepper > 4 ? "BaaHam_NormalUsers_RequestsStepperCircleActive" :""].join(" ")}>

                  </div>
            </div>
           
          </div>

        </div>
        <textarea  className='BaaHam_NU_ProfileTextArea BaaHam_NU_RequestTextArea' />
        <div className='BaaHam_NU_RequestBottomButtons'>
          <div className='BaaHam_NU_RequestBottomButton BaaHam_NU_RequestBottomButton1 '>
            <span>نسخه چاپی </span>
          </div>
          <div className='BaaHam_NU_RequestBottomButton'>
            <span>نسخه آنلاین</span>
          </div>
        </div>
        <div className='BaaHam_NU_RequestTicketsContainer'>
            <div className='BaaHam_NU_RequestTicket'>
                <span className='BaaHam_NU_RequestTicketTitle'>تیکت شماره</span>
                <span className='BaaHam_NU_RequestTicketNumber'>274195316</span>
                <span className='BaaHam_NU_RequestTicketDate'>تاریخ: 1400/8/4</span>
                <span className='BaaHam_NU_RequestTicketTime'>ساعت: 23:45</span>
                <span className='BaaHam_NU_RequestTicketDescribe'>متن نمایش</span>
            </div>
            <div className='BaaHam_NU_RequestTicket'>
                <span className='BaaHam_NU_RequestTicketTitle'>تیکت شماره</span>
                <span className='BaaHam_NU_RequestTicketNumber'>274195316</span>
                <span className='BaaHam_NU_RequestTicketDate'>تاریخ: 1400/8/4</span>
                <span className='BaaHam_NU_RequestTicketTime'>ساعت: 23:45</span>
                <span className='BaaHam_NU_RequestTicketDescribe'>متن نمایش</span>
            </div>
            <div className='BaaHam_NU_RequestTicket'>
                <span className='BaaHam_NU_RequestTicketTitle'>تیکت شماره</span>
                <span className='BaaHam_NU_RequestTicketNumber'>274195316</span>
                <span className='BaaHam_NU_RequestTicketDate'>تاریخ: 1400/8/4</span>
                <span className='BaaHam_NU_RequestTicketTime'>ساعت: 23:45</span>
                <span className='BaaHam_NU_RequestTicketDescribe'>متن نمایش</span>
            </div>
            <div className='BaaHam_NU_RequestTicket'>
                <span className='BaaHam_NU_RequestTicketTitle'>تیکت شماره</span>
                <span className='BaaHam_NU_RequestTicketNumber'>274195316</span>
                <span className='BaaHam_NU_RequestTicketDate'>تاریخ: 1400/8/4</span>
                <span className='BaaHam_NU_RequestTicketTime'>ساعت: 23:45</span>
                <span className='BaaHam_NU_RequestTicketDescribe'>متن نمایش</span>
            </div>
            <div className='BaaHam_NU_RequestTicket'>
                <span className='BaaHam_NU_RequestTicketTitle'>تیکت شماره</span>
                <span className='BaaHam_NU_RequestTicketNumber'>274195316</span>
                <span className='BaaHam_NU_RequestTicketDate'>تاریخ: 1400/8/4</span>
                <span className='BaaHam_NU_RequestTicketTime'>ساعت: 23:45</span>
                <span className='BaaHam_NU_RequestTicketDescribe'>متن نمایش</span>
            </div>
            <div className='BaaHam_NU_RequestTicket'>
                <span className='BaaHam_NU_RequestTicketTitle'>تیکت شماره</span>
                <span className='BaaHam_NU_RequestTicketNumber'>274195316</span>
                <span className='BaaHam_NU_RequestTicketDate'>تاریخ: 1400/8/4</span>
                <span className='BaaHam_NU_RequestTicketTime'>ساعت: 23:45</span>
                <span className='BaaHam_NU_RequestTicketDescribe'>متن نمایش</span>
            </div>
            <div className='BaaHam_NU_RequestTicket'>
                <span className='BaaHam_NU_RequestTicketTitle'>تیکت شماره</span>
                <span className='BaaHam_NU_RequestTicketNumber'>274195316</span>
                <span className='BaaHam_NU_RequestTicketDate'>تاریخ: 1400/8/4</span>
                <span className='BaaHam_NU_RequestTicketTime'>ساعت: 23:45</span>
                <span className='BaaHam_NU_RequestTicketDescribe'>متن نمایش</span>
            </div>
            <div className='BaaHam_NU_RequestTicket'>
                <span className='BaaHam_NU_RequestTicketTitle'>تیکت شماره</span>
                <span className='BaaHam_NU_RequestTicketNumber'>274195316</span>
                <span className='BaaHam_NU_RequestTicketDate'>تاریخ: 1400/8/4</span>
                <span className='BaaHam_NU_RequestTicketTime'>ساعت: 23:45</span>
                <span className='BaaHam_NU_RequestTicketDescribe'>متن نمایش</span>
            </div>
            <div className='BaaHam_NU_RequestTicket'>
                <span className='BaaHam_NU_RequestTicketTitle'>تیکت شماره</span>
                <span className='BaaHam_NU_RequestTicketNumber'>274195316</span>
                <span className='BaaHam_NU_RequestTicketDate'>تاریخ: 1400/8/4</span>
                <span className='BaaHam_NU_RequestTicketTime'>ساعت: 23:45</span>
                <span className='BaaHam_NU_RequestTicketDescribe'>متن نمایش</span>
            </div>
            <div className='BaaHam_NU_RequestTicket'>
                <span className='BaaHam_NU_RequestTicketTitle'>تیکت شماره</span>
                <span className='BaaHam_NU_RequestTicketNumber'>274195316</span>
                <span className='BaaHam_NU_RequestTicketDate'>تاریخ: 1400/8/4</span>
                <span className='BaaHam_NU_RequestTicketTime'>ساعت: 23:45</span>
                <span className='BaaHam_NU_RequestTicketDescribe'>متن نمایش</span>
            </div>
            
        </div>
    </div>
  )
}

export default BaaHam_NormalUsers_Requests