import React from 'react'
import './BaaHam_NormalUsers_Check.css'
import { deepOrange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

function BaaHam_NormalUsers_Check() {
  return (
    <div className='BaaHam_NormalUsers_Checks'>
        <div className='BaaHam_NormalUsers_ChecksHeader'>
            <Checkbox
            defaultChecked
            className=''
            sx={{
            color: deepOrange[500],
            '&.Mui-checked': {
                color: deepOrange[500],
            },
            }}
            />
            <span className='BaaHam_NormalUsers_ChecksHeaderTitle'>میخواهم ملکم را ارزیابی کنم</span>
        </div>
        <div className='BaaHam_NormalUsers_ChecksInputs'>
            <div className='BaaHam_NormalUsers_ChecksRightInputs'>
                <div className='BaaHam_NU_SabteAgahiBottomGrid'>
                <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>منطقه </span>
                <div className='InputExactContainerForBack'>
                <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
                </div>
                </div>
                <div className='BaaHam_NU_SabteAgahiBottomGrid BaaHam_NU_SabteAgahiBottomGridCheck2'>
                <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>کد پستی </span>
                <div className='InputExactContainerForBack'>
                    <input className='BaaHam_NU_SabteAgahiBottomGridInput'></input>
                </div>
                </div>
            </div>
            <div className='BaaHam_NormalUsers_ChecksLeftInput'>
                <div className='BaaHam_NU_SabteAgahiBottomGrid'>
                    <span className='BaaHam_NU_SabteAgahiBottomGridTitle'>آدرس دقیق </span>
                    <div className='InputExactContainerForBackTextArea InputExactContainerForBackTextAreaCheckNormal'>
                        <textarea  className='BaaHam_NU_ProfileTextArea BaaHam_NU_ProfileTextAreaCheck' />
                    </div>
                </div>
            </div>
        </div>
        <div className='BaaHam_NU_ProfileButtonContainer'>
            <div className='BaaHam_NU_ProfileButton BaaHam_NU_ProfileButtonCheck2'>
                <span>ثبت</span>
            </div>
        </div>
    </div>
  )
}

export default BaaHam_NormalUsers_Check