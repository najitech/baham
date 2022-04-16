import React , {useState} from 'react'
import './BaaHam_VEU_MyHousesBox.css'

function BaaHam_VEU_MyHousesBox(props) {
    const {Data} = props;
    const [ShowMore , SetShowMore] = useState(false)
  return (
      <div className='BaaHam_VEU_Marketer_Table'>
        
        <div className='BaaHam_PU_Marketer_Table '>
            <div className='BaaHam_PU_Marketer_TableNumberContainer'>
                <div className='BaaHam_PU_Marketer_TableNumber'>
                    <span>{props.TableNumber}</span>
                </div>
            </div>
            <div className='BaaHam_PU_Marketer_TableContainer BaaHam_VEU_Marketer_TableContainer'>

                <div className='BaaHam_PU_Marketer_TableTitles'>
                    <span  className='BaaHam_PU_Marketer_TableTitle'>وضعیت</span>
                    <span  className='BaaHam_PU_Marketer_TableTitle'>تعداد سفارش</span>
                    <span  className='BaaHam_PU_Marketer_TableTitle'>شماره تماس</span>
                    <span  className='BaaHam_PU_Marketer_TableTitle'>جزئیات</span>
                </div>
                <div className='BaaHam_PU_Marketer_TableContents'>
                    <span className='BaaHam_PU_Marketer_TableContent BaaHam_PU_Marketer_TableContentFirst'>{Data.Lastname}</span>
                    <span className='BaaHam_PU_Marketer_TableContent'>{Data.Count}</span>
                    <span className='BaaHam_PU_Marketer_TableContent'>{Data.Number}</span>
                    <span className='BaaHam_PU_Marketer_TableContent BaaHam_PU_Marketer_TableContentShow' onClick={() => SetShowMore(!ShowMore)}>نمایش</span>
                </div>
                {
                    ShowMore ?
                    <div>
                    <div className='BaaHam_VEU_MyHousesBoxMoreHeader'>
                        <div className='BaaHam_VEU_MyHousesBoxMoreHeaderTitle'>
                            <span>نمایش جزییات</span>
                        </div>
                
                    </div>
                    <div className='BaaHam_VEU_MyHousesBoxMoreContentContainer'>
                        <div className='BaaHam_VEU_MyHousesBoxMoreItem'>
                            <span className='BaaHam_NU_ProfileInputTitle BaaHam_VEU_ProfileInputTitleRes'>شماره سفارش</span>
                            <span className='BaaHam_VEU_MyHousesBoxMoreItemContent'></span>
                        </div>
                        <div className='BaaHam_VEU_MyHousesBoxMoreItem'>
                            <span className='BaaHam_NU_ProfileInputTitle BaaHam_VEU_ProfileInputTitleRes'>نام و نام خانوادگی</span>
                            <span className='BaaHam_VEU_MyHousesBoxMoreItemContent'></span>
                        </div>
                    </div>
                    <div className='BaaHam_VEU_MyHousesBoxMoreContentContainer2'>
                        <div className='BaaHam_VEU_MyHousesBoxMoreContainer2AdressContainer'>
                            <span className='BaaHam_NU_ProfileInputTitle BaaHam_VEU_ProfileInputTitleRes'>آدرس </span>
                            <span className='BaaHam_VEU_MyHousesBoxMoreContainer2AdressContent'></span>
                        </div>
                        <div className='BaaHam_VEU_MyHousesBoxMoreContainer2Contacts'>
                            <div className='BaaHam_VEU_MyHousesBoxMoreItem BaaHam_VEU_MyHousesBoxMoreItem2'>
                                <span className='BaaHam_NU_ProfileInputTitle BaaHam_VEU_ProfileInputTitleRes'>شماره تماس</span>
                                <span className='BaaHam_VEU_MyHousesBoxMoreItemContent'></span>
                            </div>
                            <div className='BaaHam_VEU_MyHousesBoxMoreItem BaaHam_VEU_MyHousesBoxMoreItem2'>
                                <span className='BaaHam_NU_ProfileInputTitle BaaHam_VEU_ProfileInputTitleRes'>کد پستی</span>
                                <span className='BaaHam_VEU_MyHousesBoxMoreItemContent'></span>
                            </div>
                        </div>

                    </div>
                    <div className='BaaHam_VEU_MyHousesBoxMoreFooter'> 
                        <div className='BaaHam_VEU_MyHousesBoxMoreFooterItem'>
                            <span className='BaaHam_NU_ProfileInputTitle BaaHam_VEU_ProfileInputTitleRes'>ارسال پیگیری</span>
                            <span className='BaaHam_VEU_MyHousesBoxMoreFooterItemBox'></span>
                        </div>
                    </div>
                </div>
                : 
                <></>
                }
                
            </div>
        
        
        </div>
        <div className='BaaHam_NU_RequestBottomButtons BaaHam_VEU_RequestBottomButtons'>
          <div className='BaaHam_NU_RequestBottomButton BaaHam_NU_RequestBottomButton1 '>
            <span>نسخه چاپی </span>
          </div>
          <div className='BaaHam_NU_RequestBottomButton'>
            <span>نسخه آنلاین</span>
          </div>
        </div>
    </div>
  )
}

export default BaaHam_VEU_MyHousesBox