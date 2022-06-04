import React from 'react'
import { useState } from 'react';

import Chart from 'react-apexcharts'
function BaftKoche(props) {
   
      const [chartjamiat,setChartjamiat] = useState({     
    
        series: [54, 20, 31],
        options: {
          chart: {
            width:800,
            type: 'donut',
          },
          colors:["#16629E", "#F54456","#23EFF6"],
          labels: ['مجرد', 'متاهل', 'بی همسر (فوت ، طلاق)'],
          stroke: {
            show: false,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,      
          },
          legend:{
            width: 150,
            fontWeight: 700,
            horizontalAlign: 'right', 
            floating: false,
            offsetY:7,
            offsetX:-35,
            fontSize:'13px',
            fontFamily: 'IRANSansX', 
            itemMargin: {
              horizontal: 5,
              vertical: 3
            },
            labels: {  
              color:'#686868',
            },
            markers: {
              width: 12,
              height: 12,
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: undefined,
              radius: 12,
              
              customHTML: undefined,
              onClick: undefined,
              offsetX: 7,
              offsetY: 3
          },
          },
          dataLabels: {
            enabled: true,   
            offsetX: 30,
            offsetY: 30,
            textAnchor: 'right',
      
            style: {
                fontSize: '13px',
                fontFamily: 'IranSansX',
                fontWeight: 'bold',
            },
          },
          plotOptions: {
            pie: {
              offsetX: 50,
              customScale: 0.86,
              offsetY: -10,
              size: 100,
              width:100,
              donut: {
                width:100,
                size: '53%',
              }
            }
          },
        },
      })
      const [chartkoche,setChartkoche] = useState({     
    
          series: [54, 20, 31, 12, 15,15,25],
          options: {
            chart: {
              width:800,
              type: 'donut',
            },
            colors:["#16629E", "#F54456","#23EFF6","#C53AED","#0CA77D","#FFB820","#07C722"],
            labels: ['تا 4 سال', '5 سال تا 9 سال', '10 سال تا 14 سال', '15 سال تا 19 سال', '20 سال تا 40 سال', '41 سال تا 60 سال', '60 سال به بالا'],
            stroke: {
              show: false,
              curve: 'smooth',
              lineCap: 'butt',
              colors: undefined,
              width: 2,
              dashArray: 0,      
            },
            legend:{
              width: 130,
              fontWeight: 700,
              horizontalAlign: 'right', 
              floating: false,
              offsetY:-17,
              offsetX:-35,
              fontSize:'12px',
              fontFamily: 'IRANSansX', 
              itemMargin: {
                horizontal: 5,
                vertical: 3
              },
              labels: {  
                color:'#686868',
              },
              markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                
                customHTML: undefined,
                onClick: undefined,
                offsetX: 7,
                offsetY: 3
            },
            },
            dataLabels: {
              enabled: true,   
              offsetX: 30,
              offsetY: 30,
              textAnchor: 'right',
        
              style: {
                  fontSize: '13px',
                  fontFamily: 'IranSansX',
                  fontWeight: 'bold',
              },
            },
            plotOptions: {
              pie: {
                offsetX: 70,
                customScale: 0.86,
                offsetY: -10,
                size: 100,
                width:100,
                donut: {
                  width:100,
                  size: '63%',
                }
              }
            },
          },
      }
      
      )
  return (
      
    <div className='baftkocheOp'>
    <div className='meduimheaderCardOp rightmeduimLableHeaderOp'>
      <div><h4><span>بافت کوچه</span>/جمعیت شناسی</h4></div>
    </div>
    <div className='chartsRowBaftOp'>
      <div className='chartBoxBafOp'>
        <Chart options={chartkoche.options} width={"440px"} series={chartkoche.series}   type="donut"/>
      </div>
      <div style={{marginRight:'0px'}} className='chartBoxBafOp'>
        <Chart options={chartkoche.options} width={"440px"} style={{marginRight:'-100px'}} series={chartkoche.series}  type="donut"/>
      </div>
    </div>
    <div className='labelRowKoche'>
      <div>
          <div className='labelChartOpKoche1'>
            <span>درصد جمعیت ساکن در شعاع 100 متری کوچه ارکیده با سنین مختلف</span>
          </div>
        </div>
      <div style={{marginRight:'20px'}}>
        <div style={{width:'63%'}}  className='labelChartOpKoche1'>
          <span>درصد جمعیت ساکن در محله مرزداران با سنین مختلف</span>
        </div>
      </div>
    </div>
    <div style={{marginTop:'20px'}} className='meduimheaderCardOp rightmeduimLableHeaderOp'>
      <div><h4><span>بافت کوچه</span>/جمعیت شناسی</h4></div>
    </div>
    <div className='chartsRowBaftOp'>
      <div className='chartBoxBafOp'>
        <Chart options={chartjamiat.options} width={"385px"} series={chartjamiat.series}   type="donut"/>
      </div>
      <div style={{marginRight:'-40px'}} className='chartBoxBafOp'>
        <Chart options={chartjamiat.options} width={"385px"} series={chartjamiat.series}  type="donut"/>
      </div> 
    </div>
    <div className='labelRowKoche'>
      <div>
        <div className='labelChartOpKoche2'>
            <span>درصد جمعیت براساس میزان تاهل در شعاع 100 متری کوچه ارکیده</span>
          </div>
      </div>
      <div>
        <div className='labelChartOpKoche2'>
            <span>درصد جمعیت براساس میزان تاهل در محله مرزداران</span>
          </div>
      </div>
    </div>
</div>
  )
}

export default BaftKoche