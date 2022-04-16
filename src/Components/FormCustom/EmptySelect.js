import React from 'react'
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive';
function EmptySelect(props) {
    
  const res800 = useMediaQuery({query :'(max-width : 820px)'});
  const res700 = useMediaQuery({query :'(max-width : 700px)'});
  const res600 = useMediaQuery({query :'(max-width : 600px)'});
  const res500 = useMediaQuery({query :'(max-width : 500px)'});
  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor:'#ffffff',
      "&:hover": {
        borderColor: "#ffffff"
      },
      color: '#828282',
      backgroundColor:'#ffffff',
      minHeight:res800 ? '20px':'28px',
      height:res800 ? '20px':'28px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#828282',
      fontSize:res800 ? '10px': '12px',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: res800 ?'20px' :'28px',
      padding: '0 3px',
       
    }),
    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height:res800 ? '20px':'28px',
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
      borderColor: "#ffffff",
      "&:hover": {
        borderColor: "#ffffff"
      },
      backgroundColor:'#ffffff',
      fontSize:res800 ? '10px':'12px',
      // override border radius to match the box
      borderRadius:res800 ? 7: 10,
      width:res800 ? '105%':'100%',
      padding:"0px 10px",
      // kill the gap
      marginTop: 10
    }),   
   
  };
  
  const options = props.options;
  return <div className='customSelectCatSelect' style={{width:`${props.width}`}}>
     <Select classNamePrefix="select" className="customSelectCatSelect" options={options} value={props.value} onChange={(newVal)=>{props.change(props.id,newVal)}} styles={customStyles}
     components={{
        IndicatorSeparator: () => null
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 10 ,
        height:'20px',
        colors: {
          ...theme.colors,
          primary25: '#ffffff',
          primary: '#ffffff',
        },
      })} 
      placeholder={<div className='DP_SelectPlaceHolderSabt res800PlaceholderEpty'>{props.placeholder}</div>} />
  </div>;
}

export default EmptySelect