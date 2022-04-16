import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import './CheckBox.css';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes(props) {
  return (
    <div>
      <Checkbox
        size={props.small ? 'small':'medium'}
        className='colorCheckBoxKar'
        {...label}
        defaultChecked
        sx={{
          color: "#868686",
          '&.Mui-checked': {
            color:"#fd4900",
          },
        }}
      />
    </div>
  );
}
