import React from 'react'
import './BaaHam_PU_MoneyInProgressTable.css'

function BaaHam_PU_MoneyInProgressTable(props) {
  const {Tables} = props;
  return (
    <div className='BaaHam_MU_MoneyInProgressTable'>
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
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin'>
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
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>تاریخ </div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.Date}</span>
                    )
                }

                
                )
            }
        </div>

    </div>
  )
}

export default BaaHam_PU_MoneyInProgressTable