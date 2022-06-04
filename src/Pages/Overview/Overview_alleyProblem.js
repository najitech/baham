import React from 'react'
import AlleyProblemBox from '../../Components/AlleyProblemBox/AlleyProblemBox'
import './Overview_alleyProblem.css'

function Overview_alleyProblem() {
  return (
    <div className='Overview_alleyProblem'>
        <div className='meduimheaderCardOp Overview_alleyProblemHeader'>
            <div><h4><span>مشکلات کوچه</span> ارکیده </h4></div>
        </div>
        <div className='Overview_alleyProblemHeader2'>
            <span>نسبت درصد مشکلات مختلف شهروندی</span>
            <span>در شعاع 100 متری کوچه ارکیده به محله مرزداران </span>
        </div>
        <div className='AlleyProblemBoxes'>
            <AlleyProblemBox title="مشکلات مربوط به زباله" rate={89} average={85}/>
            <AlleyProblemBox title="مشکلات مربوط به حیوانات" rate={48} average={85} />
            <AlleyProblemBox title="مزاحمت افراد، اصناف و یا اماکن" rate={92} average={85} />
            <AlleyProblemBox title="نظافت معابر" rate={29} average={85} />
            <AlleyProblemBox title="سد معبر" rate={75} average={85} />
            <AlleyProblemBox title="در این محل کارتن خواب وجود دارد" rate={97} average={85} />
        </div>
        <div className='Overview_alleyProblemFooter'>
            <div className='Overview_alleyProblemFooter_right'>
                <div className='Overview_alleyProblemFooter_rightText'>
                    <span className='Overview_alleyProblemFooter_rightText1'>نسبت درصد جمعیت کوچه</span>
                    <span className='Overview_alleyProblemFooter_rightText2'>ارکیده</span>
                </div>
                <div className='Overview_alleyProblemFooter_rightText'>
                    <span className='Overview_alleyProblemFooter_rightText1'>تا شعاع 100 متری به جمعیت کلی محله</span>
                    <span className='Overview_alleyProblemFooter_rightText2'>مرزداران</span>
                </div>
            </div>
            <div className='Overview_alleyProblemFooter_left'>
                <div className='Overview_alleyProblemFooter_leftRateContainer'>
                    <span className='Overview_alleyProblemFooter_leftRate'>85</span>
                </div> 
                <div className='Overview_alleyProblemFooter_leftguides'>
                    <div className='Overview_alleyProblemFooter_leftguide'>
                        <span className='Overview_alleyProblemFooter_leftguideTitle'>نسبت درصد جمعیت</span>
                        <div className='Overview_alleyProblemFooter_leftguideIcon1'></div>
                    </div>
                    <div className='Overview_alleyProblemFooter_leftguide'>
                        <span className='Overview_alleyProblemFooter_leftguideTitle'>بیشتر از محله مرزداران</span>
                        <div className='Overview_alleyProblemFooter_leftguideIcon2'></div>
                    </div>
                    <div className='Overview_alleyProblemFooter_leftguide'>
                        <span className='Overview_alleyProblemFooter_leftguideTitle'>کمتر از محله مرزداران</span>
                        <div className='Overview_alleyProblemFooter_leftguideIcon3'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview_alleyProblem