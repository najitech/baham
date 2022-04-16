import React from 'react'
import './AgahiPage.css'
import {IoMdArrowForward,IoMdClose} from 'react-icons/io'
import {IoCalendarOutline,IoBedOutline,IoCarOutline} from 'react-icons/io5'
import {BiShapeSquare ,BiCheck} from 'react-icons/bi'
import {MdApartment} from 'react-icons/md'
import MelkCard from '../../Components/MelkCard/MelkCard'
import Carousel  , {consts} from 'react-elastic-carousel'
import {BsChevronLeft,BsChevronRight,BsBookmark} from 'react-icons/bs'
import { useState } from 'react'
import {MdChevronRight,MdKeyboardArrowLeft} from 'react-icons/md'
import {AiOutlineRight,AiOutlineLeft,AiOutlineExclamationCircle,AiOutlineShareAlt} from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'
const pictures = [
    {src :'https://kharidmag.com/wp-content/uploads/2020/11/duplex-house7.jpg',alt:''},
    {src :'https://www.jowhareh.com/images/Jowhareh/galleries/poster_d0eb4d6d-5aa4-4696-87f7-dc756257c110.jpeg',alt:''},
    {src :'https://andishe-estate.com/wp-content/uploads/2019/10/%D8%AE%D8%A7%D9%86%D9%87-%D9%88%DB%8C%D9%84%D8%A7%DB%8C%DB%8C-220-%D9%85%D8%AA%D8%B1%DB%8C-%D8%AF%D8%B1-%D9%81%D8%A7%D8%B2-%D8%AF%D9%88-%D8%A7%D9%86%D8%AF%DB%8C%D8%B4%D9%87-21.jpg',alt:''},
    {src :'https://static2.ilna.news/thumbnail/V1Vj5pTx9Y3V/zD2ly951Lbe1X4vBXmeYxnwvBKd2o-upCBoRpuXWWQ3xVYIwBtE8SJc5CgG8w1SR1HhaeHPcWe7Z4QQxwQ5aCQuC6bW65Yo2vzNA1A_oYcME-xuDHnCGIC-kHgCp4We0QxZgWUBqDYSCKlL5SndO1w96qHB4I0VpXuOejRjZDSys4NdjIqNZJEQ6csj1vAj0lFuBpM2etuk,/Untitled.jpg',alt:''},
    {src :'https://naab-house.com/wp-content/uploads/2021/01/Ankara-Melk.jpg',alt:''},
]
function AgahiPage(props) {

  const res700 = useMediaQuery({query :'(max-width : 750px)'});
  const res600 = useMediaQuery({query :'(max-width : 650px)'});
  const res500 = useMediaQuery({query :'(max-width : 507px)'});
  const res360 = useMediaQuery({query :'(max-width : 360px)'});
  const [imageSlider,setImageSlider] = useState(0)
  const handleRightMove = ()=>{
      if(imageSlider ===0)
        setImageSlider(pictures.length-1)
      else
        setImageSlider(imageSlider-1)
  }
  const handleLeftMove = ()=>{
    if(imageSlider+1 ===pictures.length)
      setImageSlider(0)
    else
      setImageSlider(imageSlider+1)
}
const myArrow=({ type, onClick, isEdge })=> {
    const Pointer = type !== consts.PREV ? MdKeyboardArrowLeft :MdChevronRight
    return (
      <div className='arrowsStyleAgahiCards' onClick={onClick} disabled={isEdge}>
        <Pointer/>
      </div>
    )
}
  return (
    <div className='agahiPage'>
        
        <div className='agahiContainerPage'>
            <div className='informationAgahiContainer'>
                <div className='row1InfoAgahi'>
                    <div className='bazgashtAgahi'><IoMdArrowForward style={{fontSize:'15px',marginTop:'1px',marginLeft:'2px'}}/><span>بازگشت به صفحه قبل</span></div>
                    <div className='codeboxAgahi'><span>کد ملک : 123456789</span></div>
                </div>
                {res600? <div className='pictureSliderAGahi'>
                    <div className='sliderBtnsAgahi'>
                        <div><div className='numberCounterAgahiSliderBtn'>{imageSlider+1}/{pictures.length}</div></div>
                        <div className='arrowDivsAgahi'><div><BsChevronRight onClick={()=>handleRightMove()} className='arrowStyleAgahi'/></div><div><BsChevronLeft onClick={()=>handleLeftMove()} className='arrowStyleAgahi'/></div></div>
                        <div></div> 
                    </div>
                    <img alt={pictures[imageSlider].alt} src={pictures[imageSlider].src}/>
                </div>:''}
                {res600?<div className='picturesSliderPicAgahi'>
                    {pictures.map((item,index)=>{
                        return <div onClick={()=>{setImageSlider(index)}} className='picItemDivAgahiSlider'><img alt={item.alt} src={item.src}/></div>
                    })}
                </div>:''}
                <div style={{marginRight:'8px'}}>
                    <div className='titleAgahiPage'><h2>130 متر غرق نور (مرزداران/اطاعتی جنوبی)</h2></div>
                    <div className='timeAgahiPage'><span>15 دقیقه پیش در بلوار مرزداران</span></div>
                    <div className='priceAgahiPage'><h2>قیمت:7/5 میلیارد تومان</h2></div>
                    <div className='timeAgahiPage'><span style={{color:'#666666'}}>قیمت هر متر: 57/670/000 میلیون تومان</span></div>
                    
                    <div className='resAgahiPagecul'>
                        <div className='featuresAgahiPage'>
                            <div><MdApartment/><span>آپارتمان/برج مسکونی</span></div>
                            <div><IoCalendarOutline/><span>9 سال ساخت</span></div>
                            <div><IoBedOutline/><span>3 خوابه</span></div>
                            <div><BiShapeSquare/><span>130 متر</span></div>
                            <div><IoCarOutline/><span>پارکینگ 1 عدد</span></div>
                        </div>
                        <div className='personInfDivAgahi'>
                            <div className='infPersonContainerAgahi'>
                                <div className='personAvatarAgahi'></div>
                                <div className='personInfAgahi'>
                                    <div><h3>متین نوروزپور</h3></div>
                                    <div><span>املاک بیلی</span></div>
                                </div>
                            </div>
                            <div className='numberPersonContainerAgahi'>
                                <div className='numberBoxAgahi'><h3>0912xxxx683</h3></div>
                            </div>
                        </div>
                    </div>
                    <div className='emkanatHeader'><h4>اکانات و ویژگی ها</h4></div>
                         <div className='emkanatAmlak'>
                            <div><span>انباری</span></div>
                            <div><span>نگهبان</span></div>
                            <div><span>آسانسور</span></div>
                            <div><span>بالکن</span></div>
                            <div><span>استخر</span></div>
                            <div><span>پارکینگ</span></div>
                         </div>
                    <div className='explanationBoxAmlak'>
                        <div className='headerExpBoxAmlak'><h4>توضیحات ملک</h4></div>
                        <div className='textExpBoxAmlak'>
                            <p>
                                <IoMdClose className='redExMarkAmlak'/><IoMdClose className='redExMarkAmlak'/><IoMdClose className='redExMarkAmlak'/><span>مشابه این فایل موجود نیست</span><IoMdClose className='redExMarkAmlak'/><IoMdClose className='redExMarkAmlak'/><IoMdClose className='redExMarkAmlak'/>
                                <br/>
                                <BiCheck/>&nbsp;130 متر / 3 خواب بزرگ
                                <br/>
                                <BiCheck/>&nbsp;فول امکانات/ سالن پرده خور
                                <br/>
                                <BiCheck/>&nbsp;غرق نور/ ویو بدون مشرف
                                <br/>
                                <BiCheck/>&nbsp;لوکیشن خوب با دسترسی عالی
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='leftSizeAgahiContainer'>
               {!res600? <div className='pictureSliderAGahi'>
                    <div className='sliderBtnsAgahi'>
                        <div><div className='numberCounterAgahiSliderBtn'>{imageSlider+1}/{pictures.length}</div></div>
                        <div className='arrowDivsAgahi'><div><BsChevronRight onClick={()=>handleRightMove()} className='arrowStyleAgahi'/></div><div><BsChevronLeft onClick={()=>handleLeftMove()} className='arrowStyleAgahi'/></div></div>
                        <div></div> 
                    </div>
                    <img alt={pictures[imageSlider].alt} src={pictures[imageSlider].src}/>
                </div>:''}
                {!res600?<div className='picturesSliderPicAgahi'>
                    {pictures.map((item,index)=>{
                        return <div onClick={()=>{setImageSlider(index)}} className='picItemDivAgahiSlider'><img alt={item.alt} src={item.src}/></div>
                    })}
                </div>:''}
                <div className='btnsShareRepAgahi'>
                    <div className='reportAgahiBtn'><AiOutlineExclamationCircle/><span> گزارش آگهی </span></div>
                    <div className='reportAgahiBtn'><AiOutlineShareAlt/><span> اشتراک گذاری </span></div>
                    <div className='reportAgahiBtn'><BsBookmark/><span> نشان شدن </span></div>
                </div>
                <div className='positionInMapAgahi'>
                    <div className='headerExpBoxAmlak'><h4>موقعیت در نقشه</h4></div>
                </div>
            </div>
        </div>
        <div className='simularAgahisAgahi'>
                <div className='headerExpBoxAmlak'><h4>آگهی های مشابه</h4></div>
                <div className='agahiAsliderContinaerAghai'>
                <Carousel className='sliderCompo'
                pagination={false}
                showArrows={true}
                isRTL={true}
                renderArrow={myArrow}
                itemsToShow={res360  ? 1: res500 ? 2: res600 ? 3: res700 ? 4: 5}>
                 <MelkCard 
                  
                  backgroundColor="white"
                  margin="16px 4px "
                  boxshodow
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={"163px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                    
                    backgroundColor="white"
                    margin="16px 4px "
                    boxshodow
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={"163px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                     
                     backgroundColor="white"
                     margin="16px 4px "
                     boxshodow
                  star
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={"163px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                    
                    backgroundColor="white"
                    margin="16px 4px "
                    boxshodow
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={"163px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                  mark 
                     
                  backgroundColor="white"
                  margin="16px 4px "
                  boxshodow
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={"163px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                  mark 
                     
                  backgroundColor="white"
                  margin="16px 4px "
                  boxshodow
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={"163px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
            </Carousel>
                </div>
            </div>
    </div>
  )
}

export default AgahiPage