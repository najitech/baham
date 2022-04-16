import React , {useState} from 'react'
import './BaaHam_SupervisorUser_Waiting.css'
import BaaHam_SU_WaitingBox from './BaaHam_SU_WaitingBox'
import { useMediaQuery } from 'react-responsive'
import Select from 'react-select'

function BaaHam_SupervisorUser_Waiting() {
  const res500 = useMediaQuery({ query: '(max-width: 500px)' })
  const res600 = useMediaQuery({ query: '(max-width: 600px)' })
  const res700 = useMediaQuery({ query: '(max-width: 700px)' })
  let selectHeight = "40px";
  if (res700) {
      selectHeight = "33px"
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
    const [Choose, SetChoose] = useState(1)
  return (
    <div className='BaaHam_SupervisorUser_Waiting'>
            <div className='BaaHam_SU_WaitingBoxes'>
                <BaaHam_SU_WaitingBox Choose={Choose===1? true : false} SetChoose={SetChoose} BoxNumber={1}/>
                <BaaHam_SU_WaitingBox Choose={Choose===2? true : false}  SetChoose={SetChoose} BoxNumber={2}/>
                <BaaHam_SU_WaitingBox Choose={Choose===3? true : false} SetChoose={SetChoose} BoxNumber={3}/>
                <BaaHam_SU_WaitingBox Choose={Choose===4? true : false} SetChoose={SetChoose} BoxNumber={4}/>
                <BaaHam_SU_WaitingBox Choose={Choose===5? true : false} SetChoose={SetChoose} BoxNumber={5}/>
                <BaaHam_SU_WaitingBox Choose={Choose===6? true : false} SetChoose={SetChoose} BoxNumber={6}/>
            </div>
        <div className='BaaHam_SupervisorUser_WaitingBlank'>

        </div>
        <div className='BaaHam_SupervisorUser_WaitingInformation'>
            
        </div>
        <div className='BaaHam_SupervisorUser_WaitingFooter'>
          <span className='BaaHam_SupervisorUser_WaitingFooterTitle' >دلیل رد آگهی</span>
          <div className='BaaHam_MU_Information_ChooseBankSelect BaaHam_SupervisorUser_WaitingFooterSelect'>
              <Select
                      placeholder=" "
                      styles={customStyles}
                      options={optionsList1}
                      maxMenuHeight={80}
                      >
              
              </Select>
          </div>

        </div>
        <div className='BaaHam_NU_SabteAgahiBottomButtons BaaHam_SupervisorUser_WaitingBottomButtons'>
          <div className='BaaHam_NU_SabteAgahiBottomButton BaaHam_NU_SabteAgahiBottomButton2'> 
            <span>رد</span>
          </div>
          <div className='BaaHam_NU_SabteAgahiBottomButton '>
            <span> تایید</span>
          </div>
        </div>
    </div>
  )
}

export default BaaHam_SupervisorUser_Waiting