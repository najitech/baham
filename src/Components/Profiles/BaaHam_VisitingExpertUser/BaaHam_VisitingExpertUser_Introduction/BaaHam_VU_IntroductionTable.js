import React from 'react'
import '../../BaaHam_MarketerUser/BaaHam_MarketerUser_Introduction/BaaHam_MU_IntroductionTable.css'

function BaaHam_VU_IntroductionTable(props) {
    const {Tables} = props;
  return (
    <div className='BaaHam_MU_IntroductionTable'>
        <div className='BaaHam_MU_IntroductionTableRow'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'><span>ردیف</span></div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.TableNumber}</span>
                    )
                }

                
                )
            }
           
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>نام</div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.FirstName}</span>
                    )
                }

                
                )
            }
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>نام خانوادگی</div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.LastName}</span>
                    )
                }

                
                )
            }
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>شماره تماس</div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.PhoneNumber}</span>
                    )
                }

                
                )
            }
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>زمان باقی مانده</div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.RemainTime}</span>
                    )
                }

                
                )
            }
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>وضعیت</div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.Status}</span>
                    )
                }

                
                )
            }
        </div>
        <div className='BaaHam_MU_IntroductionTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>توضیحات</div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.Description}</span>
                    )
                }

                
                )
            }
        </div>

    </div>
  )
}

export default BaaHam_VU_IntroductionTable