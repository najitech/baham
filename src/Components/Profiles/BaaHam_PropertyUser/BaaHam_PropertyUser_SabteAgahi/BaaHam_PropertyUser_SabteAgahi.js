import React , {useState} from 'react'
import './BaaHam_PropertyUser_SabteAgahi.css'
import SabteAgahi_DropDown from '../../BaaHam_NormalUsers/BaaHam_NormalUsers_SabteAgahi/SabteAgahi_DropDown'
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive'
import image1 from '../../../../pic1.jpg'
import {BiImageAdd} from 'react-icons/bi'



const blue = {
  500: '#007FFF',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#6F7E8C',
};

const Root = styled('span')(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 30px;
  height: 16px;

  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 13px;
    height: 13px;
    top: 1.5px;
    left: 1.5px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 15px;
      top: 1.5px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `,
);




function BaaHam_PropertyUser_SabteAgahi() {
  const [ImageSrcs , setImageSrc] = useState([]);
  const HandlesetImageSrc = (e) => {
    let temp = ImageSrcs;
    temp.push(e);
    setImageSrc(temp);
  }
  

  const q1380 = useMediaQuery({ query: '(max-width: 1380px)' })
  const q1230 = useMediaQuery({ query: '(max-width: 1230px)' })
  const q920 = useMediaQuery({ query: '(max-width: 920px)' })
  const q775 = useMediaQuery({ query: '(max-width: 775px)' })
  const q715 = useMediaQuery({ query: '(max-width: 715px)' })
  let fontSizeRes = "13px";
  let selectWidth ="275px"
  if (q1380) {
    selectWidth = "245px"
  }


  if (q1230) {
    selectWidth = "200px"
  }
  if (q920) {
    fontSizeRes="11px"
  }
  if (q775 ) {
    fontSizeRes = "9.5px"
  }
  if (q715 ) {
    fontSizeRes = "11px"
  }
  const res500 = useMediaQuery({ query: '(max-width: 500px)' })
  const res600 = useMediaQuery({ query: '(max-width: 600px)' })
  const res700 = useMediaQuery({ query: '(max-width: 700px)' })
  const [AgahiSwitch, setAgahiSwitch] = useState(1);
  let selectHeight = "36px";
  if (res700) {
      selectHeight = "30px"
  }

const customStyles = {
  
  control: (base, state) => ({
    ...base,
    /*borderColor: state.isFocused ? "yellow" : "green",
    "&:hover": {
      borderColor: state.isFocused ? "red" : "blue"
    }*/
    minHeight:selectHeight,
    height:selectHeight,
    width:'100%',
    border:'none',
    borderRadius:"10px",
    backgroundColor:'rgb(245, 245, 245)',
    "&:hover": {
      borderColor: "#d1d1d1"
    },
    '&:focus':{
      borderColor: "#d1d1d1"
    },
    "&:active":{ 
      borderColor: "#d1d1d1"
    },
    display:'flex',
  }),
  option: (provided, state) => ({
      ...provided,

  }),
  indicatorSeparator: (styles) => ({display:'none'}),
  singleValue: (provided) => ({
    ...provided,
    color: 'rgb(98, 98, 98)',
    fontSize:res500?'8px' :res600?'9px' : res700?'10px':'12px',
    display:'flex',
    
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: selectHeight,
    padding: '0 6px',

    display:'flex',
    fontSize:fontSizeRes,
    color: 'rgb(178, 178, 178)',
    fontWeight : 'bold'
  }),
  input: (provided, state) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height:selectHeight,
  }),
  
  dropdownIndicator: base => ({
    ...base,
    fontSize:res600?'6px' : '8px',

    "&:hover": {
      color: "#5843b1" 
    },
    paddingTop: 2,
    paddingBottom:2 ,
  }),
  clearIndicator: (styles) => ({
    ...styles,
    paddingTop: 2,
    paddingBottom: 2,
  }),
  menu: base => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0
  }),   
 
};


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const optionsList1 = [
      { label: 'Option 1', value: 'Option 1'},
      { label: 'Option 2', value: 'Option 2'},
      { label: 'Option 3', value: 'Option 3'},
      { label: 'Option 4', value: 'Option 4'},
  ];
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

  return (
    <div className='BaaHam_NormalUsers_SabteAgahi'>
  <span className='BaaHam_NormalUsers_SabteAgahiTitle1'>ثبت آگهی</span>
        <div className='BaaHam_NU_SabteAgahiTopGrid'>
            <SabteAgahi_DropDown placeholder="اجاره مسکونی"/>
            <SabteAgahi_DropDown placeholder="فروش مسکونی"/>
            <SabteAgahi_DropDown placeholder="اجاره اداری و تجاری"/>
            <SabteAgahi_DropDown placeholder="فروش اداری و تجاری"/>
            <SabteAgahi_DropDown placeholder="اجاره کوتاه مدت"/>
            <SabteAgahi_DropDown placeholder="پروژه های ساخت و ساز"/>
            <SabteAgahi_DropDown placeholder="متفرقه"/>
        </div>
        <span className='BaaHam_NormalUsers_SabteAgahiTitle1'>ثبت آگهی / اجاره مسکونی</span>
        <div className='BaaHam_NU_SabteAgahiTopGrid'>
            <SabteAgahi_DropDown placeholder="آپارتمان"/>
            <SabteAgahi_DropDown placeholder="ویلا"/>
            <SabteAgahi_DropDown placeholder="متفرقه"/>
        </div>
        <div className='BaaHam_NormalUsers_SabteAgahiTitle1Container'>
          <span className='BaaHam_NormalUsers_SabteAgahiTitle1'>ثبت آگهی / اجاره مسکونی /</span>
          <span className='BaaHam_NormalUsers_SabteAgahiTitle1 BaaHam_NormalUsers_SabteAgahiTitle1Active'> آپارتمان</span>
        </div>
        <div className='BaaHam_NormalUsers_SabteAgahiButton1'>
          <span>آپارتمان</span>
        </div>
        <div className='BaaHam_NormalUsers_SabteAgahiAreaContainer'>
          <div className='BaaHam_NormalUsers_SabteAgahiAreaSelects'>
              <div className='BaaHam_NormalUsers_SabteAgahiAreaSelect BaaHam_NormalUsers_SabteAgahiAreaSelectNoTopMargin'>
                <span className='BaaHam_NormalUsers_SabteAgahiAreaSelectTitle'> شهر</span>
                <div className='BaaHam_NormalUsers_SabteAgahiAreaSelectContain'>
                  <Select
                    placeholder="تهران"
                    styles={customStyles}
                    options={optionsList1}
                    >
              
                  </Select>
                </div>
              </div>
              <div className='BaaHam_NormalUsers_SabteAgahiAreaSelect'>
                <span className='BaaHam_NormalUsers_SabteAgahiAreaSelectTitle'> محدوده آگهی</span>
                <div className='BaaHam_NormalUsers_SabteAgahiAreaSelectContain'>
                  <Select
                    placeholder="انتخاب محله"
                    styles={customStyles}
                    options={optionsList1}
                    >
              
                  </Select>
                </div>
              </div>
              <div className='BaaHam_NormalUsers_SabteAgahiAreaSelectSwitch'>
                <span className='BaaHam_NormalUsers_SabteAgahiAreaSelectSwitchTitle'>موقعیت دقیق نمایش داده نشود</span>
                <div className='BaaHam_NormalUsers_SabteAgahiAreaSelectSwitchCotainer'>
                  <SwitchUnstyled component={Root} {...label} />
                </div>
 
              </div>
          </div>
          <div className='BaaHam_NormalUsers_SabteAgahiAreaMapContainer'>
            <span>انتخاب محدوده ملک روی نقشه</span>
          </div>
        </div>
        <div className='BaaHam_NU_SabteAgahiPicsBigContainer'>         
          <span className='BaaHam_NormalUsers_SabteAgahiAreaSelectTitle'>عکس آگهی</span>
          <span className='BaaHam_NormalUsers_SabteAgahiTitle1 BaaHam_NU_SabteAgahiPicsTitle'>عکس هایی از داخل و بیرون ملک اضافه کنید.آگهی های دارای عکس تا ((3 برابر)) بیشتر توسط کاربران دیده میشوند.</span>
          <div className="BaaHam_NU_SabteAgahiPicsContainer">

              <div className="waitforimage">
              <input className="imageInput" id="Imageinput" type="file" onChange = {(e) => setImageSrc([...ImageSrcs,URL.createObjectURL(e.target.files[0])])} />
              <label className="ImageInputLabel" htmlFor="Imageinput"><BiImageAdd /></label>             
              </div>
              {ImageSrcs.map((ImageSrc) => {
                  return (
                      <img className="BaaHam_NU_SabteAgahiPic" alt="" src={ImageSrc} />      
                      )   
                } )
              }
          
          </div>
          <span className='BaaHam_NormalUsers_SabteAgahiTitle1 BaaHam_NU_SabteAgahiPicsTitle'> تعداد عکس های انتخاب شده نباید بیشتر از 20 باشد.</span>
        </div>
        <div className='BaaHam_NU_SabteAgahiBottomGrids'>
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>متراژ <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
            </div>
            <div className='BaaHam_NU_SabteAgahiDahandeContainer'>
              <span className='BaaHam_NU_SabteAgahiDahandeContinerTitle'>آگهی دهنده :</span>
              <div className='BaaHam_NU_SabteAgahiDahandeContainerRes'>
                <div className='BaaHam_NU_SabteAgahiDahande BaaHam_NU_SabteAgahiDahandeRes'>
                  <div className={['BaaHam_NU_SabteAgahiDahandeCircle ',AgahiSwitch===1? "BaaHam_NU_SabteAgahiDahandeCircleActive" : ""].join(" ")} onClick={() => setAgahiSwitch(1)}>
                    <div className={['BaaHam_NU_SabteAgahiDahandeCircleIn BaaHam_NU_SabteAgahiDahandeCircleInExact',AgahiSwitch===1?'BaaHam_NU_SabteAgahiDahandeCircleInActive' : ""].join(" ")}></div>
                  </div>
                  <div className='BaaHam_NU_SabteAgahiDahandeTitle'>
                    <span >شخصی</span>
                  </div>
      
                </div>
                <div className='BaaHam_NU_SabteAgahiDahande'>
                  <div className={['BaaHam_NU_SabteAgahiDahandeCircle',AgahiSwitch===2? "BaaHam_NU_SabteAgahiDahandeCircleActive" : ""].join(" ")} onClick={() => setAgahiSwitch(2)}>
                    <div className={['BaaHam_NU_SabteAgahiDahandeCircleIn',AgahiSwitch===2?'BaaHam_NU_SabteAgahiDahandeCircleInActive' : ""].join(" ")}></div>
                  </div>
                  <div className='BaaHam_NU_SabteAgahiDahandeTitle'>
                    <span >مشاور املاک</span>
                  </div>

                </div>
              </div>
            </div>
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>ودیعه <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
            </div>
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>اجاره ماهانه <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
  
            </div>
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>ودیعه و اجاره <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
            </div>
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>مناسب برای <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
            </div>
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>تعداد اتاق <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
            </div>
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>سال ساخت <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
            </div>      
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>طبقه <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
            </div>     
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>آسانسور <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
            </div>
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>پارکینگ <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
            </div>
            <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>انباری <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
              </div>
            </div>
        </div>
        <div className='BaaHam_NU_SabteAgahiMoreFeaturesTitle'>
          <span>انتخاب سایر ویژگی ها و امکانات</span>
        </div>
        <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle BaaHam_NU_SabteAgahiBottomGridTitleExact' >شماره موبایل <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <span className='BaaHam_NU_SabteAgahiBottomGridDescribe'>کد تایید به شماره موبایل شما ارسال خواهد شد. تماس و چت نیز با این شماره انجام می شود.</span>
              <span className='BaaHam_NU_SabteAgahiBottomGridDescribe'>توجه: لطفا پس از ثبت آگهی، به پیامک های پرداخت وجه بی اعتنا باشید.</span>
              <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2 BaaHam_NU_SabteAgahiBottomGridInputForBack2Agahi'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput2'></input>
              </div>
        </div>
        <div className='BaaHam_NU_SabteAgahiBottomGrid'>
          <span className='BaaHam_NU_SabteAgahiBottomGridTitle BaaHam_NU_SabteAgahiBottomGridTitleExact'>عنوان آگهی <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
          <span className='BaaHam_NU_SabteAgahiBottomGridDescribe'>در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید</span>
          <div className='BaaHam_NU_SabteAgahiBottomGridInputForBack2 BaaHam_NU_SabteAgahiBottomGridInputForBack2Agahi'>
            <input className='BaaHam_NU_SabteAgahiBottomGridInput2'></input>
          </div>
        </div>
        <div className='BaaHam_NU_SabteAgahiBottomGrid'>
              <span className='BaaHam_NU_SabteAgahiBottomGridTitle BaaHam_NU_SabteAgahiBottomGridTitleExact'>توضیحات آگهی <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
              <span className='BaaHam_NU_SabteAgahiBottomGridDescribe'>در توضیحات آگهی به مواردی مانند شرایط اجاره، جزئیات و ویژگی های قابل توجه، دسترسی های مجلی و موقعیت قرارگیری ملک اشاره کنید.</span>
              <div className='InputExactContainerForBackTextArea InputExactContainerForBackTextAreaSabteAgahi2'>
               <textarea  className='BaaHam_NU_ProfileTextArea' />
              </div>
        </div>
        <div className='BaaHam_NU_SabteAgahiBottomButtons'>
          <div className='BaaHam_NU_SabteAgahiBottomButton BaaHam_NU_SabteAgahiBottomButton2'> 
            <span>انصراف</span>
          </div>
          <div className='BaaHam_NU_SabteAgahiBottomButton '>
            <span>ارسال آگهی</span>
          </div>
        </div>
        <div className='BaaHam_NU_SabteAgahiFooter'>
          <div className='BaaHam_NU_SabteAgahiFooterTitle'>
            <span>اگهی های قبلی</span>
          </div>
          <div className='BaaHam_NU_SabteAgahiFooter3Last3'>
              <div className='BaaHam_NU_SabteAgahiFooter3Last'>
                  <div className='BaaHam_NU_SabteAgahiFooter3LastImageContainer'>
                    <img alt="hi" src={image1} className='BaaHam_NU_SabteAgahiFooter3LastImage'/>
                  </div>
                  <div className='BaaHam_NU_SabteAgahiFooter3LastTitleDescribe'>
                    <span className='BaaHam_NU_SabteAgahiFooter3LastTitle'>عنوان</span>
                    <span className='BaaHam_NU_SabteAgahiFooter3LastDescribe'>توضیح کوتاه</span>
                  </div>
              </div>
              <div className='BaaHam_NU_SabteAgahiFooter3Last'>
                  <div className='BaaHam_NU_SabteAgahiFooter3LastImageContainer'>
                    <img alt="hi" src={image1} className='BaaHam_NU_SabteAgahiFooter3LastImage' />
                  </div>
                  <div className='BaaHam_NU_SabteAgahiFooter3LastTitleDescribe'>
                    <span className='BaaHam_NU_SabteAgahiFooter3LastTitle'>عنوان</span>
                    <span className='BaaHam_NU_SabteAgahiFooter3LastDescribe'>توضیح کوتاه</span>
                  </div>
              </div>
              <div className='BaaHam_NU_SabteAgahiFooter3Last'>
                  <div className='BaaHam_NU_SabteAgahiFooter3LastImageContainer'>
                    <img alt="hi" src={image1} className='BaaHam_NU_SabteAgahiFooter3LastImage'/>
                  </div>
                  <div className='BaaHam_NU_SabteAgahiFooter3LastTitleDescribe'>
                    <span className='BaaHam_NU_SabteAgahiFooter3LastTitle'>عنوان</span>
                    <span className='BaaHam_NU_SabteAgahiFooter3LastDescribe'>توضیح کوتاه</span>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default BaaHam_PropertyUser_SabteAgahi