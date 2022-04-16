import React from 'react'
import './BaaHam_PropertyUser_Information.css'
import { useMediaQuery } from 'react-responsive'
import Select from 'react-select'


function BaaHam_PropertyUser_Information() {
    const res500 = useMediaQuery({ query: '(max-width: 500px)' })
    const res600 = useMediaQuery({ query: '(max-width: 600px)' })
    const res700 = useMediaQuery({ query: '(max-width: 700px)' })
    let selectHeight = "40px";
    if (res700) {
        selectHeight = "40px"
    }

    const optionsList1 = [
        { label: 'Option 1', value: 'Option 1'},
        { label: 'Option 2', value: 'Option 2'},
        { label: 'Option 3', value: 'Option 3'},
        { label: 'Option 4', value: 'Option 4'},
    ];
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
  return (
    <div className='BaaHam_MarketerUser_Information'>
          <div className='BaaHam_MU_InformationInputsContainer'>
            <div className='BaaHam_NU_ProfileInputContainer3 BaaHam_NU_ProfileInputContainer3MURes'>
                <div className='BaaHam_NU_ProfileInputContainer BaaHam_MU_InformationInputContainer'>
                    <span className='BaaHam_NU_ProfileInputTitle'>تلفن ثابت</span>
                    <div className='InputExactContainerForBack InputExactContainerForBackMUinformation'>
                        <input className='BaaHam_NU_ProfileInput BaaHam_MU_InformationInput1 ' type="text" />
                    </div>
                </div>
                 <div className='BaaHam_NU_ProfileInputContainer BaaHam_MU_InformationInputContainer'>
                    <span className='BaaHam_NU_ProfileInputTitle BaaHam_MU_InformationInputTitle '>کد شهر </span>
                    <div className='InputExactContainerForBack InputExactContainerForBackMUinformation'>
                        <input className='BaaHam_NU_ProfileInput BaaHam_MU_InformationInput2 ' type="text" />
                    </div>
                </div>
              
        
            </div>
   
            <div className='BaaHam_NU_ProfileInputContainer '>
                <span className='BaaHam_NU_ProfileInputTitle'> کد ملی</span>
                <div className='InputExactContainerForBack InputExactContainerForBackMUinformation'>
                    <input className='BaaHam_NU_ProfileInput' type="text" />
                </div>
            </div>
        </div>
        <div className='BaaHam_NU_ProfileTextAreaContainer BaaHam_MU_ProfileTextAreaContainer'>
            <span className='BaaHam_NU_ProfileInputTitle'>آدرس</span>
            <div className='InputExactContainerForBackTextArea'>
                <textarea  className='BaaHam_NU_ProfileTextArea' />
            </div>
        </div>
        <div className='BaaHam_MU_ProfileInputsContainer'>
            <div className='BaaHam_NU_ProfileInputContainer BaaHam_MU_ProfileInputsContainerFlex'>
                <span className='BaaHam_NU_ProfileInputTitle '>نام</span>
                <div className='InputExactContainerForBack InputExactContainerForBackMUinformation'>
                    <input className='BaaHam_NU_ProfileInput BaaHam_MU_ProfileInput3 ' type="text" />
                </div>
            </div>
            <div className='BaaHam_MU_Information_ChooseBankContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>نام بانک</span>
                <div className='BaaHam_MU_Information_ChooseBankSelect'>
                    <Select
                            placeholder="انتخاب محله"
                            styles={customStyles}
                            options={optionsList1}
                            >
                    
                    </Select>
                </div>
   
            </div>
        </div>
        <div className='BaaHam_MU_InformationInputsContainer'>
            <div className='BaaHam_NU_ProfileInputContainer3 BaaHam_NU_ProfileInputContainer3MURes'>
                <div className='BaaHam_NU_ProfileInputContainer BaaHam_MU_InformationInputContainer'>
                    <span className='BaaHam_NU_ProfileInputTitle'>نام شعبه </span>
                    <div className='InputExactContainerForBack InputExactContainerForBackMUinformation'>
                        <input className='BaaHam_NU_ProfileInput BaaHam_MU_InformationInput1' type="text" />
                    </div>
                </div>
                <div className='BaaHam_NU_ProfileInputContainer BaaHam_MU_InformationInputContainer'>
                    <span className='BaaHam_NU_ProfileInputTitle BaaHam_MU_InformationInputTitle'>کد شعبه </span>
                    <div className='InputExactContainerForBack InputExactContainerForBackMUinformation'>
                        <input className='BaaHam_NU_ProfileInput BaaHam_MU_InformationInput2' type="text" />
                    </div>
                </div>
            </div>
   
            <div className='BaaHam_NU_ProfileInputContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'> شماره کارت </span>
                <div className='InputExactContainerForBack InputExactContainerForBackMUinformation'>
                    <input className='BaaHam_NU_ProfileInput' type="text" />
                </div>
            </div>
        </div>
        <div className='BaaHam_MU_InformationInputsContainer BaaHam_MU_InformationInputsContainer4'>
            <div className='BaaHam_NU_ProfileInputContainer3 BaaHam_NU_ProfileInputContainer3MURes BaaHam_NU_ProfileInputContainer3MURes2 BaaHam_NU_ProfileInputContainer32'>
                <div className='BaaHam_NU_ProfileInputContainer BaaHam_MU_InformationInputContainer4_1'>
                    <span className='BaaHam_NU_ProfileInputTitle'>شماره حساب </span>
                    <div className='InputExactContainerForBack InputExactContainerForBackMUinformation'>
                        <input className='BaaHam_NU_ProfileInput BaaHam_MU_InformationInput4_1' type="text" />
                    </div>
                </div>
                <div className='BaaHam_NU_ProfileInputContainer BaaHam_MU_InformationInputContainer4'>
                    <span className='BaaHam_NU_ProfileInputTitle BaaHam_MU_InformationInputTitle'>شماره شبا  </span>
                    <div className='InputExactContainerForBack InputExactContainerForBackMUinformation'>
                        <input className='BaaHam_NU_ProfileInput BaaHam_MU_InformationInput4' type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div className='BaaHam_MU_InformationFooterContainer'>
            <div className='BaaHam_MU_InformationLabelContainer'>
                <span className='BaaHam_NU_ProfileInputTitle'>لیبل مشاور املاک</span>
                <div className='BaaHam_MU_InformationLabel'>

                </div>
            </div>
        </div>
        <div className='BaaHam_NU_ProfileButtonContainer BaaHam_MU_InformationButtonContainer'>
            <div className='BaaHam_NU_ProfileButton BaaHam_MU_InformationButton'>
                <span>ثبت</span>
            </div>
        </div>
    </div>
  )
}

export default BaaHam_PropertyUser_Information