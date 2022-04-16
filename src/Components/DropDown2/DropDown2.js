import React from 'react'
import '../DropDown1/DropDown1.css'
import './DropDown2.css'
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive'



function DropDown2(props) {
    const q1380 = useMediaQuery({ query: '(max-width: 1380px)' })
    const q1230 = useMediaQuery({ query: '(max-width: 1230px)' })
    const q920 = useMediaQuery({ query: '(max-width: 920px)' })
    const q775 = useMediaQuery({ query: '(max-width: 775px)' })
    const q715 = useMediaQuery({ query: '(max-width: 715px)' })
    let fontSizeRes = "12px";
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
    let selectHeight = "32px";
    if (res700) {
        selectHeight = "32px"
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
          minWidth:"220px",
          border:'none',
          borderRadius:"10px",
          backgroundColor:'rgb(255, 255, 255)',
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
            backgroundColor: state.isSelected ? 'rgb(255, 236, 229)' : null,
            textAlign:'right',
            color:state.isSelected ?'var(--color)':'rgb(160,160,160)' ,
            "&:hover": {
                color:!state.isSelected ? 'rgba(253, 73, 0,0.6)' : 'var(--color)',
                backgroundColor:!state.isSelected ?'rgba(255, 236, 229,0.5)' :'rgba(255, 236, 229,1)', 
              },
            fontSize:'11px',
            fontFamily:'IRANYekan',
            fontWeight:'bold',
            width:'95%',
            margin:'auto',
            borderRadius:'7px',
            transition:'all 0.1s ease'
        }),
        indicatorSeparator: (styles) => ({display:'none'}),
        singleValue: (provided) => ({
          ...provided,
          color: 'rgb(98, 98, 98)',
          fontSize:res500?'8px' :res600?'9px' : res700?'10px':'12px',
          display:'flex',
          alignItems:'center',
         
        }),
        valueContainer: (provided, state) => ({
          ...provided,

          height: '60%',
          padding: '0 6px',
          display:'flex',
          alignItems:'center',
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
            color: "#5843b1",
            
          },
          paddingTop: 2,
          paddingBottom:2 ,
        }),
        clearIndicator: (styles) => ({
          ...styles,
          paddingTop: 2,
          paddingBottom: 2,
        }),
        placeholder: (defaultStyles) => ({
            ...defaultStyles,
            color: 'rgb(178, 178, 178)',
            fontSize:'11px',
            fontWeight:"400"
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
    <div className='DropDown1 DropDown2'>
        <Select
            placeholder={props.placeholder}
            styles={customStyles}
            options={props.optionsList}
        >
    
        </Select>
    </div>
  )
}

export default DropDown2