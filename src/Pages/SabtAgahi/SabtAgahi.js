import React ,{useEffect,useRef} from 'react'
import CustomRadio from '../../Components/FormCustom/CustomRadio'
import CustomCheckBox from '../../Components/FormCustom/CustomCheckBox'
import './SabtAgahi.css'
import {RiImageAddFill} from 'react-icons/ri'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import Budges from '../../Components/FormCustom/Budges'
import CheckCust from './CheckCust'
import { useState } from 'react'
import EmptySelect from '../../Components/FormCustom/EmptySelect'
import { useMediaQuery } from 'react-responsive'
function SabtAgahi(props) {
  const [tabActive , setTabActive] = useState(0);
  const res1000 = useMediaQuery({query :'(max-width : 1000px)'});
  const res800 = useMediaQuery({query :'(max-width : 820px)'});
  const res650 = useMediaQuery({query :'(max-width : 650px)'});
  const res600 = useMediaQuery({query :'(max-width : 670px)'});
  const res500 = useMediaQuery({query :'(max-width : 54 درس   0px)'});
  const res400 = useMediaQuery({query :'(max-width : 400px)'});
  const res360 = useMediaQuery({query :'(max-width : 360px)'});
  const [userType, setUserType] = useState(0);
  const [melkType , setMelkType] = useState(0);
  const [nosaz,setNosaz] = useState(0);
  
  useEffect(() => {
      props.header.current.scrollIntoView({ behavior: "smooth" });
    }, []);
  return (
    <div className='sabtAgahi'>
      <div className='sabtAgahiHeader'>
        <h2>ملک خود را رایگان آگهی کنید</h2>
      </div>
      <div className='tabContainerSabt'>
        <div className='spaceCurveSabtTab'></div>
        <div onClick={()=>setTabActive(0)} className={[tabActive===0 ?'sabtTabdivSabtActive' : '','sabtTabdivSabt'].join(" ")}><h3>آگهی فروش</h3></div>
        <div onClick={()=>setTabActive(1)} className={[tabActive===1 ?'sabtTabdivSabtActive' : '','sabtTabdivSabt'].join(" ")}><h3>رهن و اجاره</h3></div>
        <div className='spaceCurveSabtTab'></div>
      </div>
      <div className='sabtAgahiContainer'>
        <div className='firstSectionSabt'>
          <div className='firstFormSabt'>
            <div>
              <div className='formLabelSabt'><span>شهر</span></div>
              <div className='inputBoxSabt fixPaddingSabt'><EmptySelect options={[{value:0,label:'تهران'},{value:0,label:'مشهد'}]}
              placeholder="شهر مورد نظر را وارد نمایید"
               width="100%"/></div>
              <div className='formLabelSabt'><span>نوع کاربری</span></div>
              <div className='inputBoxSabt'>
                <div onClick={()=>setUserType(0)} className='radioRowSabt'><CustomRadio color check={userType === 0}/><span>مسکونی</span></div>
                <div onClick={()=>setUserType(1)} className='radioRowSabt'><CustomRadio color check={userType === 1}/><span>اداری تجاری</span></div>
              </div>
              <div className='formLabelSabt resSpecialMarginTop'><span>متراژ</span></div>
              <div className='inputBoxSabt fixPaddingSabt'><input className='inputNewAgahiSabt'/></div>
              <div className='formLabelSabt'><span>تعداد اتاق خواب</span></div>
              <div className='inputBoxSabt fixPaddingSabt'><Budges text="1 خوابه"/></div>
            </div>

            <div>
              <div className='formLabelSabt'><span>محله</span></div>
              <div className='inputBoxSabt fixPaddingSabt'>
              <EmptySelect options={[{value:0,label:'تهران'},{value:0,label:'مشهد'}]}
              placeholder="محله مورد نظر را وارد نمایید"
               width="100%"/>
              </div>
              <div className='formLabelSabt'><span>نوع ملک</span></div>
              <div className='inputBoxSabt noemelkBoxSabt'>
                <div className='noemelkSabt'>  
                  <div>
                    <div onClick={()=>setMelkType(0)} className='radioRowSabt'><CustomRadio color check={melkType ===0}/><span>آپارتمان/برج</span></div>
                    <div onClick={()=>setMelkType(1)} className='radioRowSabt'><CustomRadio color check={melkType ===1}/><span>ویلایی/باغ و باغچه</span></div>
                    <div onClick={()=>setMelkType(2)} className='radioRowSabt extramargSabt'><CustomRadio color check={melkType ===2}/><span>پنت هوس</span></div>
                    <div onClick={()=>setMelkType(3)} className='radioRowSabt extramargSabt'><CustomRadio color check={melkType ===3}/><span>مستغلات</span></div>
                  </div>
                  <div style={{marginRight:res800 ? 5 : 0}}>
                    <div onClick={()=>setMelkType(4)} className='radioRowSabt'><CustomRadio color check={melkType ===4}/><span>زمین/کلنگی</span></div>
                    <div onClick={()=>setMelkType(5)} className='radioRowSabt'><CustomRadio color check={melkType ===5}/><span>سایر</span></div>
                  </div>
                </div>
              </div>
              <div className='formLabelSabt'><span>سن بنا</span></div>
              <div className='senbanaContainerSabt'>
              <div className='inputBoxSabt fixPaddingSabt' style={{flex:'0.62'}}><input className='inputNewAgahiSabt'/></div>
                <div onClick={()=>setNosaz(!nosaz)} className='inputBoxSabt fixPaddingSabt' style={{flex:'0.33',marginLeft:'6px'}}><div className='chekcBoxRowSabt'><CheckCust check={nosaz}/><span>نوساز</span></div></div>
              </div> 
            </div>
          </div>
          <div className='mapSectionSabt'>
            <div className='mapExplaceSabt'><AiOutlineExclamationCircle/><span> با حرکت دادن مکان نما محدود ملک خود را مشخص کنید</span></div>
            <div className='mapBoxcontainerSabt'>

            </div>
          </div>
        </div>
        <div className='secondSectionSabtForm'>
          <div className='rightSecondSectionSabtForm'>
            {res500?<div className='borderRigthDivContainerForm'></div>:''}
            <div className='formLabelSabt'><span>عنوان</span></div>
            <div className='inputBoxSabt fixPaddingSabt'><input className='inputNewAgahiSabt'/></div>
            <div className='formLabelSabt'><span>توضیحات</span></div>
            <div className='inputBoxSabt fixPaddingSabt'><textarea/></div>
            <div className='formLabelSabt'><span>قیمت</span></div>
            <div className='gheimatRowBoxSabt'><div style={{flex:res600 ?'0.5' : res800 ? '0.7':'0.72'}} className='inputBoxSabt fixPaddingSabt'><input className='inputNewAgahiSabt'/></div><div style={{flex:res600 ? '0.47':res800 ? '0.27':'0.25'}} className='inputBoxSabt fixPaddingSabt'><div className='chekcBoxRowSabt'><CheckCust/><span style={{fontSize: res600 ? '8px':''}}>قیمت توافقی</span></div></div></div>
          </div>
          <div className='checkBoxesContainerSabtFrom'>
            <div><div className='formLabelSabt marginBtnOffSabt'><span>امکانات </span></div>
            <div className='checkBoxGridSabts'>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust check/><span>لابی</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>انباری</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust check/><span>سالن ورزش</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust check/><span>نگهبان</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>آسانسور</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>بالکن</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>استخر</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust check/><span>سونا</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust check/><span>تهویه مطبوع</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>سالن اجتماعات</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>روف گاردن</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>درب ریموت</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>جکوزی</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>آنتن مرکزی</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>پارکینگ</span></div></div>
            </div>
            </div>
            <div><div className='formLabelSabt marginBtnOffSabt'><span>شرایط</span></div>
            <div className='checkBoxGridSabts'>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>مشارکتی</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust check/><span>معاوضه</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust check/><span>قابل تبدیل</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>پیش فروش</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>موقعیت اداری</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>وام دار</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>قدرالسهم</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>پاساژ</span></div></div>
              <div className='checkBoxContianerItemSabt'><div className='chekcBoxRowSabt'><CheckCust/><span>مال</span></div></div>
            </div>
            </div>
          </div>
        </div>
        <div className='addPictureDivSabt'>
              <div className='formLabelSabt'><span>افزودن تصویر</span></div>
              <div className='explanesdivSabt'><span>عکس هایی از فضای داخل و بیرون ملک اضافه کنید. آگهی های دارای عکس تا 30 برابر بیشتر توسط کاربران دیده می شوند.</span></div>
              <div className='imageChooseComponentSabt'>
                <div className='addnewImageDivSabt'>
                  <RiImageAddFill/>
                </div>
              </div>
              <div className='explanesdivSabt'><span>تعداد عکس های انتخاب شده نباید بیشتر از 20 باشد.</span></div>
        </div>
        <div className='sabtAndTaeedBox'>
          <div><div className='forcheckboxLateer'><CheckCust check/></div><span>ثبت آگهی در سایت باهم، به منزله مطالعه و قبول کردن <span style={{color:'var(--color)'}}>قوانین و مقررات</span> است</span></div>
          <div className='sabtBtnNahaee' style={{cursor:'pointer'}}>ثبت آگهی</div>
        </div>
      </div>
    </div>
  )
}

export default SabtAgahi