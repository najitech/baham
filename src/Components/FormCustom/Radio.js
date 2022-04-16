import React from 'react'
import Radio from '@mui/material/Radio';

export default function ColorRadioButtons(props) {

  
    const handleChange = (event) => {
      props.changer(props.value);
    };
    return (
      <div>
        <Radio
          onClick={handleChange}
          name={props.name}
          checked={props.rentVal === props.value}
          value={props.value}
          sx={{
            color: "#868686",
            '&.Mui-checked': {
              color: "#fd4900",
            },
          }}
        />
      </div>
    );
  }