import React, { useState } from 'react';
import {FaSchool} from 'react-icons/fa'
import Chart from 'react-apexcharts'
import './Overview.css'
import OverviewRate from './OverviewRate';
function Overview() {
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
        width: 140,
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
          offsetX: 20,
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
    <div className='overviewPage overviewColors'>
      <OverviewRate rate={8.23} streetRate={3}/>
      <div className='sarmayeRowOp'>
        <div className='boxSizeBlackdiv'><div className='blackboxTitleOp'><h3>سرمایه گذاری</h3></div></div>
        <div className='infRowSarmayeOp'>
          <div className='sarmayeInfoItemOp'>
            <div className='marginWSpanLablOp'><span > درجه کیفی کوچه ارکیده<span className='spanboldspan'> (از 1 تا 8) </span></span></div>
            <div className='rateSarmayeItemOp'><span>3</span></div>
          </div>
          <div className='sarmayeInfoItemOp'>
            <div className='marginWSpanLablOp'><span > درجه کیفی کوچه ارکیده<span className='spanboldspan'> (از 1 تا 8) </span></span></div>
            <div className='rateSarmayeItemOp'><span>3</span></div>
          </div>
          <div className='sarmayeInfoItemOp'>
            <div className='marginWSpanLablOp'><span > درجه کیفی کوچه ارکیده<span className='spanboldspan'> (از 1 تا 8) </span></span></div>
            <div className='rateSarmayeItemOp'><span>3</span></div>
          </div>
          <div className='sarmayeInfoItemOp'>
            <div className='marginWSpanLablOp'><span > درجه کیفی کوچه ارکیده<span className='spanboldspan'> (از 1 تا 8) </span></span></div>
            <div className='rateSarmayeItemOp'><span>3</span></div>
          </div>
        </div>
      </div>
      <div className='tarakomContainer'>
          <div className='meduimheaderCardOp rightmeduimLableHeaderOp'>
            <div><h4><span>تراکم جمعیت کوچه </span> ارکیده </h4></div>
          </div>
          <div className='explanationRowTarakom'>
            <div className='itemTarakomOp'>
              <div className='labelRowTarakom'>
                <div className='labletextTarakom'><span>نسبت وسعت به جمعیت کوچه ارکیده تا شعاع 100 متری</span></div>
                <div className='rateTarakomItemOp'><span>75</span></div>
              </div>
              <div className='mapTarakomOp'></div>
            </div>
            <div className='itemTarakomOp'>
              <div className='labelRowTarakom'>
                <div className='labletextTarakom' style={{marginRight:'15px'}}><span>نسبت وسعت به جمعیت محله مرزداران</span></div>
                <div className='rateTarakomItemOp'><span>96</span></div>
              </div>
              <div className='mapTarakomOp'  style={{marginRight:'5px'}}></div>
            </div>
          </div>
          <div className='levelTarakomRow'>
            <div className='levelTarakomItem activeLevelTrakomItem' style={{marginRight:'0px'}}><span>شلوغ</span></div>
            <div className='levelTarakomItem'><span>متوسط</span></div>
            <div className='levelTarakomItem'><span>خلوت</span></div>
          </div>
      </div>
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
      <div className='baftkocheOp'>
          <div className='meduimheaderCardOp rightmeduimLableHeaderOp'>
            <div><h4><span>بافت کوچه</span>/جمعیت شناسی</h4></div>
          </div>
          <div className='chartsRowBaftOp'>
            <div className='chartBoxBafOp'>
              <Chart options={chartkoche.options} width={"440px"} series={chartkoche.series}   type="donut"/>
            </div>
            <div className='chartBoxBafOp'>
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
          <div className='meduimheaderCardOp rightmeduimLableHeaderOp'>
            <div><h4><span>بافت کوچه</span>/جمعیت شناسی</h4></div>
          </div>
          <div className='chartsRowBaftOp'>
            <div className='chartBoxBafOp'>
              <Chart options={chartjamiat.options} width={"345px"} series={chartjamiat.series}   type="donut"/>
            </div>
            <div className='chartBoxBafOp'>
              <Chart options={chartjamiat.options} width={"345px"} series={chartjamiat.series}  type="donut"/>
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

      <div className='accebility'>
        <div className='internetsectionOP'>
          <div className='blackboxTitleOp'><h3>دسترسی پذیری</h3></div>
          <div className='sabetInternetOp'>
            <div className='simpleLableHeaderOp'>
              <h4>اینترنت ثابت</h4>
            </div>
            <div className='itemsRowSabetNetOp'>
              <div className='meduimNetSabetOp netSabetItemOp'>
                <div className='imgItemNetSabet'>
                </div>
                <div className='labelItemNetSabet meduimNetSabetLabelOp'><span>متوسط</span></div>
              </div>
              <div className='goodNetSabetOp netSabetItemOp'>
              <div className='imgItemNetSabet'>
                </div>
                <div className='labelItemNetSabet goodNetSabetLabelOp'><span>خوب</span></div>
              </div>
              <div className='weakNetSabetOp netSabetItemOp'>
              <div className='imgItemNetSabet'>
                </div>
                <div className='labelItemNetSabet weakNetSabetLabelOp'><span>ضعیف</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className='antenDhiOp'>
        <div className='meduimheaderCardOp'>
            <div><h4>آنتن دهی</h4></div>
          </div>
          <div className='antenDahiRow'>
            <div className='rowoperatorsInfBox'>
              <div className='operatorAntenInfBox'>
                <div className='imageOperatorInf'></div>
                <div className='conditionRadioBox'>
                  <div className='radioBoxOp'>
                    <div className='labelradioOp greenLabelRadioOp'><span>خوب</span></div>
                    <div className='radioBtnOp'></div>    
                  </div>    
                  <div className='radioBoxOp'>
                    <div className='labelradioOp redLabelRadioOp'><span>متوسط</span></div>
                    <div className='radioBtnOp'></div>    
                  </div>  
                  <div className='radioBoxOp'>
                    <div className='labelradioOp blueLabelRadioOp'><span>ضعیف</span></div>
                    <div className='radioBtnOp'></div>    
                  </div>  
                </div>
              </div>
              <div className='operatorAntenInfBox'>
                <div className='imageOperatorInf'></div>
                <div className='conditionRadioBox'>
                  <div className='radioBoxOp'>
                    <div className='labelradioOp greenLabelRadioOp'><span>خوب</span></div>
                    <div className='radioBtnOp'></div>    
                  </div>  
                  <div className='radioBoxOp'>
                    <div className='labelradioOp redLabelRadioOp'><span>متوسط</span></div>
                    <div className='radioBtnOp'></div>    
                  </div>  
                  <div className='radioBoxOp'>
                    <div className='labelradioOp blueLabelRadioOp'><span>ضعیف</span></div>
                    <div className='radioBtnOp'></div>    
                  </div>  
                </div>
              </div>
              <div className='operatorAntenInfBox'>
                <div className='imageOperatorInf'></div>
                <div className='conditionRadioBox'>
                  <div className='radioBoxOp'>
                    <div className='labelradioOp greenLabelRadioOp'><span>خوب</span></div>
                    <div className='radioBtnOp'></div>    
                  </div>  
                  <div className='radioBoxOp'>
                    <div className='labelradioOp redLabelRadioOp'><span>متوسط</span></div>
                    <div className='radioBtnOp'></div>    
                  </div>  
                  <div className='radioBoxOp'>
                    <div className='labelradioOp blueLabelRadioOp'><span>ضعیف</span></div>
                    <div className='radioBtnOp'></div>    
                  </div>  
                </div>
              </div>
            </div>
            <div className='antenMaplocationBox'></div>
          </div>
        </div>
        <div className='distanceOp'>
          <div className='meduimheaderCardOp'>
            <div><h4>فاصله (متر)</h4></div>
          </div>
          <div className='distanceGridBoxOp'>
            <div className='distanceItemOp'>
              <div className='iconAndNameDistanceObj'><FaSchool/><span>مسجد</span></div>
              <div className='meterBoxDistanceObj'><span>100</span></div>
            </div>
            <div className='distanceItemOp'>
              <div className='iconAndNameDistanceObj'><FaSchool/><span>مسجد</span></div>
              <div className='meterBoxDistanceObj'><span>100</span></div>
            </div>
            <div className='distanceItemOp'>
              <div className='iconAndNameDistanceObj'><FaSchool/><span>مسجد</span></div>
              <div className='meterBoxDistanceObj'><span>100</span></div>
            </div>
            <div className='distanceItemOp'>
              <div className='iconAndNameDistanceObj'><FaSchool/><span>مسجد</span></div>
              <div className='meterBoxDistanceObj'><span>100</span></div>
            </div>
            <div className='distanceItemOp'>
              <div className='iconAndNameDistanceObj'><FaSchool/><span>مسجد</span></div>
              <div className='meterBoxDistanceObj'><span>100</span></div>
            </div>
            <div className='distanceItemOp'>
              <div className='iconAndNameDistanceObj'><FaSchool/><span>مسجد</span></div>
              <div className='meterBoxDistanceObj'><span>100</span></div>
            </div>
            <div className='distanceItemOp'>
              <div className='iconAndNameDistanceObj'><FaSchool/><span>مسجد</span></div>
              <div className='meterBoxDistanceObj'><span>100</span></div>
            </div>
            <div className='distanceItemOp'>
              <div className='iconAndNameDistanceObj'><FaSchool/><span>مسجد</span></div>
              <div className='meterBoxDistanceObj'><span>100</span></div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Overview