import React from 'react'
import './DropDown1.css'
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive'



function DropDown1(props) {
    const q1380 = useMediaQuery({ query: '(max-width: 1380px)' })
    const q1230 = useMediaQuery({ query: '(max-width: 1230px)' })
    const q920 = useMediaQuery({ query: '(max-width: 920px)' })
    const q775 = useMediaQuery({ query: '(max-width: 775px)' })
    const q715 = useMediaQuery({ query: '(max-width: 715px)' })
    const q434 = useMediaQuery({ query: '(max-width: 434px)' })
    let fontSizeRes = "12px";
    let selectWidth ="275px"
    let minwidthM = "220px"
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
      fontSizeRes = "11px"
    }
    if (q715 ) {
      fontSizeRes = "11px"
      minwidthM = "150px"
    }

    const res500 = useMediaQuery({ query: '(max-width: 500px)' })
    const res600 = useMediaQuery({ query: '(max-width: 600px)' })
    const res700 = useMediaQuery({ query: '(max-width: 700px)' })
    let selectHeight = "32px";
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
          minWidth:minwidthM,
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
          borderLeft:'2px solid rgb(228, 228, 228)',
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
        menu: base => ({
          ...base,
          // override border radius to match the box
          borderRadius: 0,
          // kill the gap
          marginTop: 0
        }),   
       
      };
      


  return (
    <div className='DropDown1'>
        <span className='DropDown1Title'>{props.title}</span>
        <Select
            placeholder="انتخاب کنید ..."
            styles={customStyles}
            options={props.optionsList}
        >
    
        </Select>
    </div>
  )
}

export default DropDown1