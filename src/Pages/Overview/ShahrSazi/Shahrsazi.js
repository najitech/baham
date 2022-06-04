import React from 'react'
import { useState } from 'react';

import Chart from 'react-apexcharts'
function Shahrsazi(props) {
    const [barCharshahr,setBarCharShahr]= useState(
        {
              
          series: [{
            data: [48,252,79,90,171,330,125]
          }],
    
          options: {
            chart: {
              type: 'bar',
              height: 350,
              width:500,    
              toolbar: {
                show: false,}
            },
            colors:["#0BA77D","#16629E","#F54456","#F54456","#16629E","#16629E","#F54456"],
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded',
                dataLabels: {
                  position: 'top', 
                },
              },
            },
            dataLabels: {
              enabled: true,
              offsetY: -24,
              style: {
                fontSize: '12px',
                fontWeight:400,
                fontFamily:'IranSansX',
                colors: ["#807E7C"]
              }
            },
            
            stroke: {
              show: false,
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: true,
              labels: {
                  show: false,
              },
              axisBorder: {
                  show: true,
                  width:1,
                  color: '#000000',
                  offsetX: 0,
                  offsetY: -1
              },
              axisTicks: {
                  show: false,
              },
              
          },
            xaxis: {
              labels: {
                show: true,
                style: {
                    fontSize: '10px',
                    color:'#807E7C',
                    fontFamily: 'IranSansX',
                    fontWeight: 400,
                },
              },
              axisTicks: {
                show: false,
            },
            axisBorder: {
              show: true,
              color: '#000000',
              height: 1,
              width: '100%',
              offsetX: 1,
              offsetY: 0
            },
              categories: ['<50', '51-75', '76-100', '101-150', '151-200', '201-300', '301-500'],
            },
            
         
            fill: {
              opacity: 1
            },
            
          },
        
        }
      );
  return ( 
  <div className='shahrsaziContainerOp'>
    <div className='meduimheaderCardOp rightmeduimLableHeaderOp'>
        <div><h4><span>بافت کوچه</span>/شهرسازی</h4></div>
    </div>
    <div className='chartContainerBarShahrOp'>
        <Chart options={barCharshahr.options} series={barCharshahr.series} type="bar" height={170}/>
    </div>
    <div className='labelShahrOp'><span>تعداد ملک با متراژ مختلف تا شعاع 100 متری کوچه ارکیده</span></div>
    <div style={{marginTop:'10px'}} className='chartContainerBarShahrOp'>
        <Chart options={barCharshahr.options} series={barCharshahr.series} type="bar" height={170}/>
    </div>
    <div className='labelShahrOp'><span>تعداد ملک با متراژ مختلف مرزداران</span></div>
</div>
  )
}

export default Shahrsazi