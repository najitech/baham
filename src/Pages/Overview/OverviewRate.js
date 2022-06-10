import React from 'react'
import OverviewRateBox from '../../Components/OverviewRateBox/OverviewRateBox'
import './OverviewRate.css'

function OverviewRate(props) {
    let StreetRate = "OR_BoxShowItem_green"
    let rateBoxColor = "OR_BoxShowItem_red"
    let rateBoxColorBack = "OR_BoxShowItem_redBack"
    if (props.streetRate > 3 ) {
        StreetRate = "OR_BoxShowItem_blue"
    }
    if (props.streetRate > 6 ) {
        StreetRate = "OR_BoxShowItem_red"
    }
    if (props.rate > 4 ) {
        rateBoxColor = "OR_BoxShowItem_blue"
        rateBoxColorBack = "OR_BoxShowItem_blueBack"
    }
    if (props.rate > 7 ) {
        rateBoxColor = "OR_BoxShowItem_green"
        rateBoxColorBack = "OR_BoxShowItem_greenBack"
    }
    let float = props.rate * 10
  return (
    <div className='OverviewRate'>


        <div className='OverviewRateRes'>
            <div className='OverviewRateCenter'>

                <div className='OverviewRateCenterUp'>
                    <div className='OverviewRateCenterUpTitle'>
                        <span>W  W  W  .  B  A  H  A  M  .  A  P  P</span>
                    </div>
                    <div className='OverviewRateCenterRightMoon'>

                    </div>

                    <div className='OverviewRateCenterLeftMoon'>

                    </div>
                </div>
                <div className='OverviewRateCenterDown'>
                    <div className='OR_centerAbsolute'>
                        <div className='OR_centerAbsoluteContent'>
                            <div className='OR_centerAC_Top'>
                                <div className='OR_centerAC_TopItem OR_centerAC_TopItemNoborder'>
                                    <span className='OR_centerAC_TopItemTitle'>مشخصات ملک:</span>
                                    <span className='OR_centerAC_TopItemNumber'>4352</span>
                                </div>
                                <div className='OR_centerAC_TopItem'>
                                    <span className='OR_centerAC_TopItemTitle'>نوع سند ملکی:</span>
                                    <span className='OR_centerAC_TopItemNumber'>شخصی منگوله دار</span>
                                </div>
                            </div>
                            <div className='OR_centerAC_Middle'>
                                <div className='OR_centerAC_MiddleAbs'>
                                    <div className='OR_centerAC_MiddleAbsItem1'>
                                        <span className='OR_centerAC_MiddleAbsItem1First'>نمره کلی ملک:</span>
                                        <span className='OR_centerAC_MiddleAbsItem1Second'> (از 1 تا 10)</span>
                                    </div>
                                    <div className={['OR_centerAC_MiddleAbsItem2Container',rateBoxColorBack].join(" ")}>
                                        <div className={['OR_centerAC_MiddleAbsItem2' ,rateBoxColor].join(" ")} style={{width:`${float}%`}}>

                                        </div>
                                        <div className='OR_centerAC_MiddleAbsItem2Number'>
                                                8.23
                                        </div>
                                    </div>
                                    <div className='OR_centerAC_MiddleAbsItem3'>
                                        <div className='OR_centerAC_MiddleAbsItem3Text'>
                                            <span className='OR_centerAC_MiddleAbsItem1First OR_centerAC_MiddleAbsItem3First'>درجه کیفی کوچه یا خیابان:</span>
                                            <span className='OR_centerAC_MiddleAbsItem1Second OR_centerAC_MiddleAbsItem3Second'> (از 1 تا 8)</span>
                                        </div>
                                        <div className={['OR_centerAC_MiddleAbsItem3RateContainer' ,StreetRate].join(" ")}>
                                            <span className='OR_centerAC_MiddleAbsItem3Rate'>{props.streetRate}</span>
                                        </div>
                                    </div>
                                    <span className='OR_centerAC_MiddleAbsItem4 OR_centerAC_MiddleAbsItem1First'>
                                        قیمت اعلامی مالک(هر متر مربع):
                                    </span>
                                    <span className='OR_centerAC_MiddleAbsItem5'>
                                        45,000,000
                                    </span>
                                </div>
                            </div>
                            <span className='OR_centerAC_Bottom'>همسایگی</span>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>





        <div className='OverviewRateBefRes'>
            <div className='OverviewRateRight'>
                <OverviewRateBox title="نور" rate={9.23} bordern={true}/>
                <OverviewRateBox title="نقشه" rate={4.74}/>
                <OverviewRateBox title="متریال داخلی" rate={7.21}/>
                <OverviewRateBox title="مشاعات" rate={2.95}/>
                <OverviewRateBox title="تعداد واحد" rate={9}/>
                <OverviewRateBox title="پارکینگ" rate={3}/>
                <OverviewRateBox title="انباری" rate={5}/>
                <OverviewRateBox title="متراژ" rate={9}/>
                <OverviewRateBox title="طبقه" rate={6}/>
            </div> 
            <div className='OverviewRateCenter'>

                <div className='OverviewRateCenterUp'>
                    <div className='OverviewRateCenterUpTitle'>
                        <span>W  W  W  .  B  A  H  A  M  .  A  P  P</span>
                    </div>
                    <div className='OverviewRateCenterRightMoon'>

                    </div>

                    <div className='OverviewRateCenterLeftMoon'>

                    </div>
                </div>
                <div className='OverviewRateCenterDown'>
                    <div className='OR_centerAbsolute'>
                        <div className='OR_centerAbsoluteContent'>
                            <div className='OR_centerAC_Top'>
                                <div className='OR_centerAC_TopItem OR_centerAC_TopItemNoborder'>
                                    <span className='OR_centerAC_TopItemTitle'>مشخصات ملک:</span>
                                    <span className='OR_centerAC_TopItemNumber'>4352</span>
                                </div>
                                <div className='OR_centerAC_TopItem'>
                                    <span className='OR_centerAC_TopItemTitle'>نوع سند ملکی:</span>
                                    <span className='OR_centerAC_TopItemNumber'>شخصی منگوله دار</span>
                                </div>
                            </div>
                            <div className='OR_centerAC_Middle'>
                                <div className='OR_centerAC_MiddleAbs'>
                                    <div className='OR_centerAC_MiddleAbsItem1'>
                                        <span className='OR_centerAC_MiddleAbsItem1First'>نمره کلی ملک:</span>
                                        <span className='OR_centerAC_MiddleAbsItem1Second'> (از 1 تا 10)</span>
                                    </div>
                                    <div className={['OR_centerAC_MiddleAbsItem2Container',rateBoxColorBack].join(" ")}>
                                        <div className={['OR_centerAC_MiddleAbsItem2' ,rateBoxColor].join(" ")} style={{width:`${float}%`}}>

                                        </div>
                                        <div className='OR_centerAC_MiddleAbsItem2Number'>
                                                8.23
                                        </div>
                                    </div>
                                    <div className='OR_centerAC_MiddleAbsItem3'>
                                        <div className='OR_centerAC_MiddleAbsItem3Text'>
                                            <span className='OR_centerAC_MiddleAbsItem1First OR_centerAC_MiddleAbsItem3First'>درجه کیفی کوچه یا خیابان:</span>
                                            <span className='OR_centerAC_MiddleAbsItem1Second OR_centerAC_MiddleAbsItem3Second'> (از 1 تا 8)</span>
                                        </div>
                                        <div className={['OR_centerAC_MiddleAbsItem3RateContainer' ,StreetRate].join(" ")}>
                                            <span className='OR_centerAC_MiddleAbsItem3Rate'>{props.streetRate}</span>
                                        </div>
                                    </div>
                                    <span className='OR_centerAC_MiddleAbsItem4 OR_centerAC_MiddleAbsItem1First'>
                                        قیمت اعلامی مالک(هر متر مربع):
                                    </span>
                                    <span className='OR_centerAC_MiddleAbsItem5'>
                                        45,000,000
                                    </span>
                                </div>
                            </div>
                            <span className='OR_centerAC_Bottom'>همسایگی</span>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className='OverviewRateLeft'>
                <OverviewRateBox title="نور" rate={9.23} bordern={true}/>
                <OverviewRateBox title="نقشه" rate={4.74}/>
                <OverviewRateBox title="متریال داخلی" rate={7.21}/>
                <OverviewRateBox title="مشاعات" rate={2.95}/>
                <OverviewRateBox title="تعداد واحد" rate={9}/>
                <OverviewRateBox title="پارکینگ" rate={3}/>
                <OverviewRateBox title="انباری" rate={5}/>
                <OverviewRateBox title="متراژ" rate={9}/>
                <OverviewRateBox title="طبقه" rate={6}/>
            </div>
        </div>
        
    </div>
  )
}

export default OverviewRate