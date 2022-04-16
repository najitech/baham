import React from 'react'
import '../../BaaHam_MarketerUser/BaaHam_MarketerUser_Money/BaaHam_MU_MoneyPaidTable.css'

function BaaHam_VU_MoneyPaidTable(props) {
    const {Tables} = props;
  return (
    <div className='BaaHam_MU_MoneyPaidTable'>
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
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin BaaHam_MU_MoneyPaidTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>شماره سفارش</div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.OrderNumber}</span>
                    )
                }

                
                )
            }
        </div>
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin BaaHam_MU_MoneyPaidTableItem'>
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
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin BaaHam_MU_MoneyPaidTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>مبلغ </div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.Price}</span>
                    )
                }

                
                )
            }
        </div>
        <div className='BaaHam_MU_IntroductionTableItem BaaHam_MU_IntroductionTableItemMargin BaaHam_MU_MoneyPaidTableItem'>
            <div className='BaaHam_MU_IntroductionTableItemTitle'>نوع انتقال </div>
            {
                Tables.map ( (Table) => {
                    return (
                        <span className='BaaHam_MU_IntroductionTableItemContent'>{Table.Type}</span>
                    )
                }

                
                )
            }
        </div>
    </div>
  )
}

export default BaaHam_VU_MoneyPaidTable