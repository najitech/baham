import * as React from 'react';
import { styled } from '@mui/material/styles';
import {MdOutlineExpandMore} from 'react-icons/md';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Accardion.css'
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1.5px solid #E5E5E5`,
  paddingBottom:0,
  borderRadius:14,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': { 
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    className='summaryStyleAcc'
    expandIcon={<MdOutlineExpandMore style={{color:'#949494',fontSize:'19px'}}/>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : '#fffffff',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  borderTop: '1px solid #ffff',
}));

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='accContainer'>
      <Accordion defaultExpanded={false} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <div className='headerDivFiltersAmlak accTitle'><h6>{props.title}</h6></div>
        </AccordionSummary>
        <AccordionDetails>
         {props.children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
