import React from 'react'

function TarakomKoche(props) {
  return (
    <div className='tarakomContainer'>
    <div className='meduimheaderCardOp rightmeduimLableHeaderOp'>
      <div><h4><span>تراکم جمعیت کوچه </span> ارکیده </h4></div>
    </div>
    <div className='explanationRowTarakom'>
      <div className='itemTarakomOp'>
        <div className='labelRowTarakom'>
          <div className='labletextTarakom'><span>نسبت وسعت به جمعیت کوچه ارکیده تا شعاع 100 متری</span></div>
          <div className='rateTarakomItemOp'><span>75</span></div>
        </div>
        <div className='mapTarakomOp'></div>
      </div>
      <div className='itemTarakomOp'>
        <div className='labelRowTarakom'>
          <div className='labletextTarakom' style={{marginRight:'15px'}}><span>نسبت وسعت به جمعیت محله مرزداران</span></div>
          <div className='rateTarakomItemOp'><span>96</span></div>
        </div>
        <div className='mapTarakomOp'  style={{marginRight:'5px'}}></div>
      </div>
    </div>
    <div className='levelTarakomRow'>
      <div className='levelTarakomItem activeLevelTrakomItem' style={{marginRight:'0px'}}><span>شلوغ</span></div>
      <div className='levelTarakomItem'><span>متوسط</span></div>
      <div className='levelTarakomItem'><span>خلوت</span></div>
    </div>
    </div>  
  )
}

export default TarakomKoche