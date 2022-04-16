import React from 'react';
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive';
function CustomSelect(props) {
  
  const res800 = useMediaQuery({query :'(max-width : 820px)'});
  const res700 = useMediaQuery({query :'(max-width : 700px)'});
  const res600 = useMediaQuery({query :'(max-width : 600px)'});
  const res500 = useMediaQuery({query :'(max-width : 500px)'});
  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: "#f5f5f5",
      "&:hover": {
        borderColor: "#f5f5f5"
      },
      
      color: '#828282',
      backgroundColor:'#f5f5f5',
      borderRadius:res800 ? '9px':'11px',
      minHeight:res800 ?'24px' :'28px',
      height:res800 ?'24px' :'28px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#828282',
      fontSize: res800?'9px':'12px',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: res800 ?'24px':'28px',
      padding: '0 6px',
       
    }),
    input: (provided, state) => ({
      ...provided,
      
      margin: '0px',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,  
      height:res800 ?'24px' : '28px',
    }),
    dropdownIndicator: base => ({
      ...base,
      fontSize:'4px',
      color: "#828282" ,
      "&:hover": {
        color: "#828282" 
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
      borderColor: "#f5f5f5",
      "&:hover": {
        borderColor: "#f5f5f5"
      },
      backgroundColor:'#f5f5f5',
      fontSize:res800 ?'10px' : '12px',
      // override border radius to match the box
      borderRadius: 14,
      // kill the gap
      marginTop: 0
    }),   
   
  };
  
  const options = props.options;
  return <div className='customSelectCatSelect' style={{width:`${props.width}px`}}>
     <Select classNamePrefix="select" className="customSelectCatSelect" options={options} value={props.value} onChange={(newVal)=>{props.change(props.id,newVal)}} styles={customStyles}
     components={{
        IndicatorSeparator: () => null
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 11 ,
        borderColor:'#f5f5f5',
        height:'30px',
        backgroundColor:'#f5f5f5',
        colors: {
          ...theme.colors,
          primary25: '#828282',
          primary: '#828282',
        },
      })} 
      placeholder={<div className='DP_SelectPlaceHolder res800PlaceholderEpty'>{props.placeholder}</div>} />
  </div>;
}

export default CustomSelect;
