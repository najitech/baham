import React , {useState} from 'react'
import './BaaHam_ContentproductionUser_Make.css'

import {AiOutlinePlusCircle} from 'react-icons/ai'
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive'
import {TiTick} from 'react-icons/ti'
import {BiImageAdd} from 'react-icons/bi'
import {AiOutlinePicture} from 'react-icons/ai'
import Image6 from '../../../../pic6.png'


function BaaHam_ContentproductionUser_Make() {
  const [ImageSrc , setImageSrc] = useState("");
  const [Tick , setTick] = useState(1);
  const res500 = useMediaQuery({ query: '(max-width: 500px)' })
  const res600 = useMediaQuery({ query: '(max-width: 600px)' })
  const res700 = useMediaQuery({ query: '(max-width: 700px)' })
  const [AgahiSwitch, setAgahiSwitch] = useState(1);
  let selectHeight = "36px";
  if (res700) {
      selectHeight = "33px"
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
      display:'flex',
      fontSize:'13px',
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

  const optionsList1 = [
    { label: 'Option 1', value: 'Option 1'},
    { label: 'Option 2', value: 'Option 2'},
    { label: 'Option 3', value: 'Option 3'},
    { label: 'Option 4', value: 'Option 4'},
];

  return (
    <div className='BaaHam_ContentproductionUser_Make'>
          <div className='BaaHam_NU_ProfileButtonContainer'>
            <div className='BaaHam_NU_ProfileButton BaaHam_CPU_MakeTopButton'>
                <AiOutlinePlusCircle className='BaaHam_CPU_MakeTopButtonPlus'/>
                <span>افزودن نوشته</span>
            </div>
          </div>
          <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>نوشته تازه <span className='BaaHam_NU_ProfileInputTitleStar'>*</span></span>
                <div className='InputExactContainerForBack'>
                  <input className='BaaHam_NU_ProfileInput' type="text" />
                </div>
          </div>
        {/*<CKEditor
          editor={ClassicEditor}
          config={ {
      
            // Use the German language for this editor.
            language: {
              // The UI will be English.
              ui: 'ar',
  
              // But the content will be edited in Arabic.
              content: 'ar'
          }
    
            // ...
        } }
      />*/}
      <div className='BaaHam_ContentproductionUser_MakeEditorContianer'>

      </div>
      
      <div className='BaaHam_CU_MakeFooter'>
          <div className='BaaHam_CU_MakeFooterRight'>
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
                <div className='BaaHam_CU_MakeFooterRightFooter'>
                    <span className='BaaHam_NormalUsers_SabteAgahiAreaSelectTitle BaaHam_ContentproductionUser_MakeTitleRes '>وضعیت:</span>
                    <div className='BaaHam_ContentproductionUser_MakePishMonContainer'>
                        <div className='BaaHam_CU_MakeFooterRightFooterItem'>
                            <div className='BaaHam_CU_MakeFooterRightTick' onClick={() => setTick(1)}>
                                {Tick === 1 ? <TiTick className='BaaHam_CU_MakeFooterRightTickExact' /> : ""}
                            </div>  
                            <span className='BaaHam_NormalUsers_SabteAgahiAreaSelectTitle BaaHam_ContentproductionUser_MakeTitleRes'>پیش نویس</span>
                        </div>
                        <div className='BaaHam_CU_MakeFooterRightFooterItem'>
                            <div className='BaaHam_CU_MakeFooterRightTick' onClick={() => setTick(2)}>
                                {Tick === 2 ? <TiTick className='BaaHam_CU_MakeFooterRightTickExact'/> : ""}
                            </div>
                            <span className='BaaHam_NormalUsers_SabteAgahiAreaSelectTitle BaaHam_ContentproductionUser_MakeTitleRes'>منتشر شده </span>
                        </div>
                    </div>
                </div>

          </div>
          <div className='BaaHam_CU_MakeFooterLeft'>
            <span className='BaaHam_NormalUsers_SabteAgahiAreaSelectTitle'>ویرایش تصویر </span>
            <div className="BaaHam_CU_SabteAgahiPicsContainer">

                {ImageSrc ? <img className="BuyCardImage" alt="" src={ImageSrc} /> :
                <div className="waitforimage2">
                <input className="imageInput" id="Imageinput" type="file" onChange = {(e) => setImageSrc(URL.createObjectURL(e.target.files[0]))} />
                <label className="ImageInputLabel2" htmlFor="Imageinput"> <img className="ImageInputLabel2Pic" alt="" src={Image6} />  </label>
                </div>
            
                }         
                <div className='BaaHam_CU_SabteAgahiPicsContainerDeleteContainer'>
                  <span className='BaaHam_CU_SabteAgahiPicsContainerDeleteTitle' onClick={() => setImageSrc("")}>حذف تصویر</span>
                </div>
          

              </div>
          </div>
      
      </div>

    </div>
  )
}

export default BaaHam_ContentproductionUser_Make

