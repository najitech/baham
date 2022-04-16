import React, {useState} from 'react'
import CheckBox from '../../../Components/CheckBox/CheckBox'
import DropDown1 from '../../../Components/DropDown1/DropDown1'
import './ChiefDashbord_filters.css'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"


function ChiefDashbord_filters() {
    const optionsList1 = [
        { label: 'املاک', value: 'املاک'},
        { label: 'بازاریاب', value: 'بازاریاب'},
        { label: 'باهم', value: 'باهم'},
        { label: 'مستقیم', value: 'مستقیم'},
    ];
    const [Datevalue, setDateValue] = useState(null)
    const handleDateChange = (value) => {
      setDateValue(Datevalue)
    }
  return (
    <div className='ChiefDashbord_filters'>
        <span className='ChiefDashbord_filtersTitle'>فیلتر بر اساس :</span>
        <div className='ChiefDashbord_filtersContainer'>
            <CheckBox title="کد ملک" backColor="rgb(245, 245, 245)"/>
            <CheckBox title="کد ملک" backColor="rgb(245, 245, 245)"/>
            <CheckBox title="کد ملک" backColor="rgb(245, 245, 245)"/>
            <CheckBox title="کد ملک" backColor="rgb(245, 245, 245)"/>
            <div className='DP_DatePickContainer'>
                    <span className='DP_DatePickTitle'>از تاریخ</span>
                    <DatePicker
                    animations={[
                      opacity(), 
                      transition({ from: 35, duration: 800 })
                    ]} 
                    render={<CustomInput1/>}
                    className="purple DP_DatePick"
                    calendar={persian}
                    locale={persian_fa}
                    value={Datevalue}
                    onChange={handleDateChange}
                
                      />
                    <span className='DP_DatePickTitle'>تا</span>
                    <DatePicker
                    animations={[
                      opacity(), 
                      transition({ from: 35, duration: 800 })
                    ]} 
                    render={<CustomInput1/>}
                    className="purple DP_DatePick"
                    calendar={persian}
                    locale={persian_fa}
                    value={Datevalue}
                    onChange={handleDateChange}
                
                      />
            </div>
            <DropDown1 title="از طرف" optionsList={optionsList1}/>
            <DropDown1 title="وضعیت" optionsList={optionsList1}/>
            <DropDown1 title="نوع پرداخت" optionsList={optionsList1}/>

        </div>
    </div>
  )
}

function CustomInput1({ openCalendar, value, handleValueChange }) {
    return (
      <input
        className='DP_DateInput'
        onFocus={openCalendar}
        value={value}
        onChange={handleValueChange}
        placeholder='  /     /  '
      />
    )
  }

export default ChiefDashbord_filters