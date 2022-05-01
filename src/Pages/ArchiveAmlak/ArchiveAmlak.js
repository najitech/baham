import React, {useEffect,useRef} from 'react'
import './ArchiveAmlak.css'
import banner from '../../Images/bannerArchiveAmlak.jpg';
import ColorCheckboxes from '../../Components/FormCustom/CheckBox'
import MelkCard from '../../Components/MelkCard/MelkCard'
import CustomSelect from '../../Components/FormCustom/Select'
import CustomCheckBox from '../../Components/FormCustom/CustomCheckBox';
import useDocumentTitle from '../../Components/TitleSetter/useDocumentTitle';
import Budges from '../../Components/FormCustom/Budges'
import ColorRadioButtons from '../../Components/FormCustom/Radio';
import {MdOutlineMyLocation} from 'react-icons/md'
import { useState } from 'react';
import {GoSettings} from 'react-icons/go'
import CustomRadio from '../../Components/FormCustom/CustomRadio';
import Accardion from '../../Components/Accardion/Accardion';
import { useMediaQuery } from 'react-responsive';
import { Drawer } from '@mui/material';
function ArchiveAmlak(props) {
  const [renOrbuy,setRentOruy] = useState(0);
  useDocumentTitle('باهم | آرشیو املاک')
  const res800 = useMediaQuery({query :'(max-width : 820px)'});
  const res700 = useMediaQuery({query :'(max-width : 706px)'});
  const [sideBar,setSideBar] = useState(0);
  const header= useRef(null);
  useEffect(() => {
        header.current.scrollIntoView({ behavior: "smooth" });
      }, []);
  return (
    <div className='amlak' ref={header}>
      <Drawer
       anchor={"rigth"}
       open={sideBar}
       className="drawerMUIStylesArchive"
       onClose={()=>{setSideBar(0)}}
      >
          <div className='sideBarAmlak2'>
                <div className='filtersHeaderAmlak'>
                    <h5>اعمال فیلتر</h5>
                </div>
                <div className='rentOrBuyAmlak'>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>آگهی خرید و فروش</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio check/><span style={{color:'var(--color)'}}>آگهی رهن و اجاره</span></div>
                </div>  
                <div className='locationFilterAmlak'>
                  <div className='budgesDives'><MdOutlineMyLocation style={{color:'#808080'}}/><Budges text="مرزداران"/></div>
                  <div className='inputFilterBoxAmlak'><input placeholder='جستجو شهر، محله یا منطقه'/></div>
                </div>
                <div>
                  <Accardion title="نوع کاربر" content="hello">
                    
                  <div className='radioRowRBAmlak'><CustomRadio check/><span style={{color:'var(--color)'}}>همه</span></div>
                  <div className='radioRowRBAmlak'><CustomRadio/><span>مسکونی</span></div>
                  <div className='radioRowRBAmlak'><CustomRadio/><span>اداری تجاری</span></div>
                  </Accardion>
                </div>
                
                <div>
                  <Accardion title="نوع ملک" content="hello">
                    
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox  checked/><span style={{color:'var(--color)'}}>همه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>آپارتمان/برج</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span> ویلایی/باخ و باخچه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span> پنت هاوس</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span> مستغلات</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span> زمین/کلنگی</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span> سایر</span></div>
                  </Accardion>
                </div>
                <div>
                  <Accardion title="تعداد اتاق خواب" content="hello">
                    
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox  checked/><span style={{color:'var(--color)'}}>همه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>سوییت</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>1 خوابه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>2 خوابه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>3 خوابه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>4 خوابه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>5 خوابه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>+6 خوابه</span></div>
                  </Accardion>
                </div>
                <div>
                  <Accardion title="سن بنا" content="hello">
                    
                    <div className='radioRowRBAmlak'><CustomRadio check/><span style={{color:'var(--color)'}}>همه</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>نوساز</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>5-2</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>10-5</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>15-10</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>20-15</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>20 سال به بالا</span></div>
                  </Accardion>
                </div>
                <div>
                  <Accardion title="امکانات ملک" content="hello">
                    
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox  checked/><span style={{color:'var(--color)'}}>آسانسور</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>پارکینگ</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>انباری</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>لابی</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>استخر</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>سونا</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>سالن ورزش</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>بالکن</span></div>
                  </Accardion>
                </div>
                <div className='divStyleFiltersAmlak'>
                  <div className='headerDivFiltersAmlak'><h6>متراژ</h6></div>
                  <div className='inputFilterBoxAmlak'><input placeholder='حداقل متراژ'/></div>
                  <div className='intoLableAmlakFilter'><span>تا</span></div>
                  <div className='inputFilterBoxAmlak'><input placeholder='حداکثر متراژ'/></div>
                </div>
                <div className='divStyleFiltersAmlak'>
                  <div className='headerDivFiltersAmlak'><h6>قیمت</h6></div>
                  <div className='inputFilterBoxAmlak'><input placeholder='حداقل قیمت'/></div>
                  <div className='intoLableAmlakFilter'><span>تا</span></div>
                  <div className='inputFilterBoxAmlak'><input placeholder='حداکثر قیمت'/></div>
                </div>
            </div>
          
      </Drawer>
        <div className='amlakBanner'>
            <div className='headerAmlakBanner'><h2>در سامانه <span>باهم</span> ملک خود را رایگان آگهی کنید</h2></div>
            <div className='imakeAmlakBanner'><img alt='' src={banner}/></div>
        </div>
        <div className='AmlakContainer'>
            <div className='sideBarAmlak'>
                <div className='filtersHeaderAmlak'>
                    <h5>اعمال فیلتر</h5>
                </div>
                <div className='rentOrBuyAmlak'>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>آگهی خرید و فروش</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio check/><span style={{color:'var(--color)'}}>آگهی رهن و اجاره</span></div>
                </div>  
                <div className='locationFilterAmlak'>
                  <div className='budgesDives'><MdOutlineMyLocation style={{color:'#808080'}}/><Budges text="مرزداران"/></div>
                  <div className='inputFilterBoxAmlak'><input placeholder='جستجو شهر، محله یا منطقه'/></div>
                </div>
                <div>
                  <Accardion title="نوع کاربر" content="hello">
                    
                  <div className='radioRowRBAmlak'><CustomRadio check/><span style={{color:'var(--color)'}}>همه</span></div>
                  <div className='radioRowRBAmlak'><CustomRadio/><span>مسکونی</span></div>
                  <div className='radioRowRBAmlak'><CustomRadio/><span>اداری تجاری</span></div>
                  </Accardion>
                </div>
                
                <div>
                  <Accardion title="نوع ملک" content="hello">
                    
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox  checked/><span style={{color:'var(--color)'}}>همه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>آپارتمان/برج</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span> ویلایی/باخ و باخچه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span> پنت هاوس</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span> مستغلات</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span> زمین/کلنگی</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span> سایر</span></div>
                  </Accardion>
                </div>
                <div>
                  <Accardion title="تعداد اتاق خواب" content="hello">
                    
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox  checked/><span style={{color:'var(--color)'}}>همه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>سوییت</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>1 خوابه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>2 خوابه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>3 خوابه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>4 خوابه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>5 خوابه</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>+6 خوابه</span></div>
                  </Accardion>
                </div>
                <div>
                  <Accardion title="سن بنا" content="hello">
                    
                    <div className='radioRowRBAmlak'><CustomRadio check/><span style={{color:'var(--color)'}}>همه</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>نوساز</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>5-2</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>10-5</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>15-10</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>20-15</span></div>
                    <div className='radioRowRBAmlak'><CustomRadio/><span>20 سال به بالا</span></div>
                  </Accardion>
                </div>
                <div>
                  <Accardion title="امکانات ملک" content="hello">
                    
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox  checked/><span style={{color:'var(--color)'}}>آسانسور</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>پارکینگ</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>انباری</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>لابی</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>استخر</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>سونا</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>سالن ورزش</span></div>
                  <div className='radioRowRBAmlakCheck'><CustomCheckBox/><span>بالکن</span></div>
                  </Accardion>
                </div>
                <div className='divStyleFiltersAmlak'>
                  <div className='headerDivFiltersAmlak'><h6>متراژ</h6></div>
                  <div className='inputFilterBoxAmlak'><input placeholder='حداقل متراژ'/></div>
                  <div className='intoLableAmlakFilter'><span>تا</span></div>
                  <div className='inputFilterBoxAmlak'><input placeholder='حداکثر متراژ'/></div>
                </div>
                <div className='divStyleFiltersAmlak'>
                  <div className='headerDivFiltersAmlak'><h6>قیمت</h6></div>
                  <div className='inputFilterBoxAmlak'><input placeholder='حداقل قیمت'/></div>
                  <div className='intoLableAmlakFilter'><span>تا</span></div>
                  <div className='inputFilterBoxAmlak'><input placeholder='حداکثر قیمت'/></div>
                </div>
            </div>
            <div className='feedAmlak'>
              <div className='lineBetweenAmlakPage'></div>
              <div className='sortRowAmlak'>
                <div className='sortItmesAmlak'>
                  {res700? <div className='filtersIcon' onClick={()=>setSideBar(1)}><GoSettings/></div>:''}
                  <div className='selectAmlakFilter'><CustomSelect value={{value:0,label:'جدید ترین'}} options={[{value:0,label:'جدید ترین'},{value:3,label:'ارزان ترین'},{value:4,label:'گران ترین'}]} width={res700 ? '60px': res800 ?'80px': "120"}/></div>
                  <div className='selectAmlakFilter23'><CustomSelect placeholder="آگهی دهنده"  options={[{value:0,label:'مشاور املاک'},{value:3,label:'شخصی'}]} width={res700 ? '60px': res800 ?'80px': "120"}/></div>
                  <div className='aksDarOrNotAmlak'><CustomCheckBox checked/><span>نمایش آگهی های عکس دار</span></div>
                  <div className='numberFoundAmlak'><span>تعداد 36 ملک</span></div>
                </div>
                <div className='textADFeedAmlak'>
                  <span>خرید و فروش املاک آپارتمان، برج مسکونی در مرزداران منطقه 5 تهران</span>
                </div>
              </div>
              <div className='gridAgahiAmlak'>
                <MelkCard 
                  mark 
                  
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                  
                  
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                 
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                  
                  star
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
                <MelkCard 
                  
                  
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                 
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                  
                  star
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
                <MelkCard 
                  
                  
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                 
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                  
                  star
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
                <MelkCard 
                  
                  
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                 
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                  
                  star
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              
              <MelkCard 
                 
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                  mark 
                  
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
                  mark 
                  
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              <MelkCard 
             
                  title="فروش آپارتمان/برج 2 خوابه" 
                  width={res800 ? 'auto':"167px"}
                  position="مرزداران"
                  type="مسکونی"
                  amlak="ملک آریا"
                  meter={74}
                  price="5/3 میلیارد تومان"
                  time="11 ساعت پیش"
                  image="https://www.thespruce.com/thmb/GAAoaH9fg3QmEhVAz9gZAS8kaSE=/1080x810/smart/filters:no_upscale()/tayandmckay_101098619_262104118458071_5380096268996586698_n-1213a0190ed1404d8deba9eb65697bb2.jpg"/>
              
              </div>
            </div>
        </div>
    </div>
  )
}

export default ArchiveAmlak