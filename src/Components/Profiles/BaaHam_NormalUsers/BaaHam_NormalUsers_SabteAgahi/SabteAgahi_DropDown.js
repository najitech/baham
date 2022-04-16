import React from 'react'
import './SabteAgahi_DropDown.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive'






function SabteAgahi_DropDown(props) {

    const res500 = useMediaQuery({ query: '(max-width: 500px)' })
    const res600 = useMediaQuery({ query: '(max-width: 600px)' })
    const res700 = useMediaQuery({ query: '(max-width: 700px)' })
    const q1380 = useMediaQuery({ query: '(max-width: 1380px)' })
    const q1230 = useMediaQuery({ query: '(max-width: 1230px)' })
    const q920 = useMediaQuery({ query: '(max-width: 920px)' })
    const q775 = useMediaQuery({ query: '(max-width: 775px)' })
    const q715 = useMediaQuery({ query: '(max-width: 715px)' })
    let fontSizeRes = "13px"
    let selectHeight = "36px";
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
    if (res500) {
      selectHeight = "30px"
      fontSizeRes = "10px"
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
      width:"100%",
      border:'2px solid rgb(159, 159, 159)',
      borderRadius:"10px",
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
    
      paddingBottom:'5px',
      display:'flex',
      fontSize:fontSizeRes,
      color: 'rgb(98, 98, 98)',
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
  return (
    <div>
        <Select
        placeholder={props.placeholder}
        styles={customStyles}
        options={optionsList1}
        >
  
        </Select>
    </div>
  )
}

export default SabteAgahi_DropDown