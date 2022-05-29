import React , {useState} from 'react'
import './RateTable.css'

function RateTable(props) {
    const {ratedata} = props
    console.log(ratedata)
    const [rate , setRate] = useState(1)
  return (
    <div className='RateTable'>
        <div className='RT_Number'>
            <span>{ratedata.tableNumber}</span>
        </div>
        <div className='RT_title'>
            <span>{ratedata.tableTitle}</span>
        </div>
        <div className='RT_features'>
            
            {
                ratedata.tableFeatures.map((table) => {
                    let rate = table.featureRate
                return (
                    <div className='RT_feature'>
                        <div className='RT_featureName'>
                            {table.featureName}
                        </div>
                        <div className='RT_featureRates'>
                            <div className={['RT_featureRate' , rate===1 ? "RT_featureRateRed" : ""].join(" ")}>
                                <span>خیلی ضعیف</span>
                            </div>
                            <div className={['RT_featureRate' , rate===2 ? "RT_featureRateRed" : ""].join(" ")}>
                                <span>ضعیف</span>
                            </div>
                            <div className={['RT_featureRate' , rate===3 ? "RT_featureRateBlue" : ""].join(" ")}>
                                <span>متوسط</span>
                            </div>
                            <div className={['RT_featureRate' , rate===4 ? "RT_featureRateGreen" : ""].join(" ")}>
                                <span>خوب</span>
                            </div>
                            <div className={['RT_featureRate' , rate===5 ? "RT_featureRateGreen" : ""].join(" ")}>
                                <span>عالی</span>
                            </div>
                        </div>
                    </div>
                )                 
                }  
                )
            }

    

        </div>
    </div>
  )
}

export default RateTable