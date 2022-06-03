import React, { useState } from 'react';
import {FaSchool} from 'react-icons/fa'
import Chart from 'react-apexcharts'
import './Overview.css'
import SarmayeItem from './SarmayeItem/SarmayeItem';
import NetSabetItem from './netItemSabet/NetSabetItem';
import AntenDahiItem from './AntenDhiItem/AntenDahiItem';
import DistanceItem from './DistanceItem/DistanceItem';
import BaftKoche from './Baftkoche/BaftKoche';
import Shahrsazi from './ShahrSazi/Shahrsazi';
import TarakomKoche from './TarakomKoche/TarakomKoche';
import OverviewRate from './OverviewRate';
import ItemStelam from './ItemStelam/ItemStelam';
function Overview() {
  return (
    <div className='overviewPage overviewColors'>
      <TarakomKoche/>
      <OverviewRate rate={8.23} streetRate={3}/>
      <div className='sarmayeRowOp'>
        <div className='boxSizeBlackdiv'><div className='blackboxTitleOp'><h3>سرمایه گذاری</h3></div></div>
        <div className='infRowSarmayeOp'>
         <SarmayeItem text="درجه کیفی کوچه ارکیده" lim="(از 1 تا 8)" num="3"/>
         <SarmayeItem text="متوسط نسبت رشد قیمت در بازه 5 ساله در کوچه ارکیده" num="7/23"/>
         <SarmayeItem text="رتبه کوچه در محله مرزداران" lim=" (از 1 تا 350)" num="117" red/>
         <SarmayeItem text="متوسط نسبت رشد قیمت در بازه 5 ساله در محله مرزداران" num="7/1" blue/>
        </div>
      </div>
      <div className='estelamOp'>
        <div className='blackboxTitleOp'><h3>استعلام</h3></div>
        <div className='estelamRowOp'>
          <ItemStelam/>
          <ItemStelam/>
          <ItemStelam/>
        </div>
      </div>
     
      <div className='baftContainer'>  
        <div className='r40p'>
            <Shahrsazi/>
          </div>
        <BaftKoche/>
      </div>
      <div className='accebility'>
        <div className='internetsectionOP'>
          <div className='blackboxTitleOp'><h3>دسترسی پذیری</h3></div>
          <div className='sabetInternetOp'>
            <div className='simpleLableHeaderOp'>
              <h4>اینترنت ثابت</h4>
            </div>
            <div className='itemsRowSabetNetOp'>
              <NetSabetItem level={0} label="متوسط"/>
              <NetSabetItem level={1} label="خوب"/>
              <NetSabetItem level={-1} label="ضعیف"/>
            </div>
          </div>
        </div>
        <div className='antenDhiOp'>
        <div className='meduimheaderCardOp'>
            <div><h4>آنتن دهی</h4></div>
          </div>
          <div className='antenDahiRow'>
            <div className='rowoperatorsInfBox'>
              <AntenDahiItem/>
              <AntenDahiItem/>
              <AntenDahiItem/> 
            </div>
            <div className='antenMaplocationBox'></div>
          </div>
        </div>
        <div className='distanceOp'>
          <div className='meduimheaderCardOp'>
            <div><h4>فاصله (متر)</h4></div>
          </div>
          <div className='distanceGridBoxOp'>
            <DistanceItem num="100" Icon={FaSchool} label="مسجد"/>
            <DistanceItem num="100" Icon={FaSchool} label="مسجد"/>
            <DistanceItem num="100" Icon={FaSchool} label="مسجد"/>
            <DistanceItem num="100" Icon={FaSchool} label="مسجد"/>
            <DistanceItem num="100" Icon={FaSchool} label="مسجد"/>
            <DistanceItem num="100" Icon={FaSchool} label="مسجد"/>
            <DistanceItem num="100" Icon={FaSchool} label="مسجد"/>
            <DistanceItem num="100" Icon={FaSchool} label="مسجد"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Overview