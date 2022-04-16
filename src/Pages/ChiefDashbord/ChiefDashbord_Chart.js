import React , {useState} from 'react'
import './ChiefDashbord_Chart.css'
import Chart from 'react-apexcharts'
import moment from 'jalali-moment'
import { useMediaQuery } from 'react-responsive'




function ChiefDashbord_Chart() {
    const q640 = useMediaQuery({ query: '(max-width: 640px)' })
    let chartH = 400;
    if (q640) {
      chartH =300;
    }
    let nowDate = moment();
    let javadate = new Date()

    let nowMonth =nowDate.locale('fa').format('MM');

    
    

    const getIranianMonth = (nowMonth) => {
        let nowIraniMonth = "فروردین";
        if (nowMonth==="01") {
            nowIraniMonth = "فروردین"
        }
        if (nowMonth==="02") {
            nowIraniMonth = "اردیبهشت"
        }
        if (nowMonth==="03") {
            nowIraniMonth = "خرداد"
        }
    
        if (nowMonth==="04") {
            nowIraniMonth = "تیر"
        }
        if (nowMonth==="05") {
            nowIraniMonth = "مرداد"
        }
        if (nowMonth==="06") {
            nowIraniMonth = "شهریور"
        }
        if (nowMonth==="07") {
            nowIraniMonth = "مهر"
        }
        if (nowMonth==="08") {
            nowIraniMonth = "آبان"
        }
        if (nowMonth==="09") {
            nowIraniMonth = "آذر"
        }
        if (nowMonth==="10") {
            nowIraniMonth = "دی"
        }
        if (nowMonth==="11") {
            nowIraniMonth = "بهمن"
        }
        if (nowMonth==="12") {
            nowIraniMonth = "اسفند"
        }
        return nowIraniMonth
    }
    let PrevMonth = 0;
    if (nowMonth==="01") {
        PrevMonth = 4;  
    }
    if (nowMonth==="02") {
        PrevMonth = 3;  
    }
    if (nowMonth==="03") {
        PrevMonth = 2;  
    }
    if (nowMonth==="04") {
        PrevMonth = 1;  
    }
    console.log(moment(new Date(javadate.getFullYear()-1,javadate.getMonth(),javadate.getDay())).locale('fa').format('YYYY'))
    const [chartSwitch , setChartSwitch] = useState(1);

    const [ChartData , setChartData] = useState({
        series: [{
            name: "Session Duration",
            data: [0,45000, 37000, 18000, 35000, 13000]
          },
          {
            name: "Session Duration",
            data: [0,30000, 52000, 38000, 10000, 33000]
          },
          {
            name: "Session Duration",
            data: [0,15000, 21000, 6000, 24000, 25000]
          },
        ],
        options: {
          colors: ['rgba(59, 177, 125,0.7)', 'rgba(240, 77, 74,0.7)', 'rgba(70, 138, 230,0.7)'],
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
            toolbar: {
                show: false
              },
          },
          
        yaxis: {
            show: true,
            decimalsInFloat: undefined,
            axisBorder: {
                show: true,
                color: 'rgb(163, 163, 163)',
                offsetX: 30,
                offsetY: 0,
           
            },
            labels: {
                show: true,
                offsetX: -30,
                offsetY: 0,
                style: {
                    colors: ['rgb(163, 163, 163)'],
                    fontSize: '10px',
                    fontFamily: 'IRANYekan',
                    fontWeight: 600,
                },
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgb(163, 163, 163)',
                width: 6,
                offsetX: -25,
                offsetY: 0
            },
        },
          dataLabels: {
            enabled: true,
            style: {
                colors: ['rgba(59, 177, 125)', 'rgba(239, 58, 55)', 'rgba(70, 138, 230)'],
                fontSize: '9px',
                fontFamily: 'IRANSansX',
             
              },
            background: {
                enabled: true,
                foreColor: '#fff',
                padding: 8,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#fff',
                opacity: 0.9,
                dropShadow: {
                  enabled: false,
                  top: 1,
                  left: 1,
                  blur: 1,
                  color: '#000',
                  opacity: 0.45
                }
              },
          },
          stroke: {
            width: [1.5,1.5,1.5],
            curve: 'straight',
            dashArray: [2.5,2.5,2.5]
          },

          legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: ['dfd',`${nowDate.locale('fa').format('DD')}  ${getIranianMonth(nowMonth)}  ${PrevMonth >0  ? moment(new Date(javadate.getFullYear()-1,javadate.getMonth(),javadate.getDay())).locale('fa').format('YYYY') : nowDate.locale('fa').format('YYYY')}  `,
                `${nowDate.locale('fa').format('DD')}  ${getIranianMonth(nowMonth)}  ${PrevMonth >1  ? moment(new Date(javadate.getFullYear()-1,javadate.getMonth(),javadate.getDay())).locale('fa').format('YYYY') : nowDate.locale('fa').format('YYYY')}  `,
                `${nowDate.locale('fa').format('DD')}  ${getIranianMonth(nowMonth)}  ${PrevMonth >2 ? moment(new Date(javadate.getFullYear()-1,javadate.getMonth(),javadate.getDay())).locale('fa').format('YYYY') : nowDate.locale('fa').format('YYYY')} `, 
                `${nowDate.locale('fa').format('DD')}  ${getIranianMonth(nowMonth)}  ${PrevMonth >3  ? moment(new Date(javadate.getFullYear()-1,javadate.getMonth(),javadate.getDay())).locale('fa').format('YYYY') : nowDate.locale('fa').format('YYYY')} `, 
                `${nowDate.locale('fa').format('DD')}  ${getIranianMonth(nowMonth)}  ${PrevMonth >4  ? moment(new Date(javadate.getFullYear()-1,javadate.getMonth(),javadate.getDay())).locale('fa').format('YYYY') : nowDate.locale('fa').format('YYYY')} `, 
                `${nowDate.locale('fa').format('DD')}  ${getIranianMonth(nowMonth)}  ${PrevMonth >5  ? moment(new Date(javadate.getFullYear()-1,javadate.getMonth(),javadate.getDay())).locale('fa').format('YYYY') : nowDate.locale('fa').format('YYYY')} `, 

            ],
            axisTicks: {
                show: true,
                offsetY: -6
            },
            labels: {
                show: true,
                  style: {
                    colors: ['rgb(255, 255, 255)','rgb(163, 163, 163)','rgb(163, 163, 163)','rgb(163, 163, 163)','rgb(163, 163, 163)','rgb(163, 163, 163)'],
                    fontSize: '10px',
                    fontFamily: 'IRANYekan',
                    fontWeight: 600,
                },
            }
          },
          legend: {
            show: false
          },
          tooltip: {
            enabled: false,
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + " (mins)"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val + " per session"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  }
                }
              }
            ]
          },
          grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
            },
          },
        },
    })
  return (
    <div className='ChiefDashbord_ChartContainer'>
        <div className='ChiefDashbord_ChartContainerRight'>
            <div className='ChiefDashbord_ChartContainerRightLegends'>
                <div className='ChiefDashbord_ChartContainerRightLegend'>
                    <div className='ChiefDashbord_ChartContainerRightLegendCircle ChiefDashbord_ChartContainerRightLegendCircleRed'>

                    </div>
                    <span className='ChiefDashbord_ChartContainerRightLegendTitle'>املاک</span>
                </div>
                <div className='ChiefDashbord_ChartContainerRightLegend'>
                    <div className='ChiefDashbord_ChartContainerRightLegendCircle ChiefDashbord_ChartContainerRightLegendCircleBlue'>

                    </div>
                    <span className='ChiefDashbord_ChartContainerRightLegendTitle'>بازاریاب</span>
                </div>
                <div className='ChiefDashbord_ChartContainerRightLegend'>
                    <div className='ChiefDashbord_ChartContainerRightLegendCircle ChiefDashbord_ChartContainerRightLegendCircleGreen'>

                    </div>
                    <span className='ChiefDashbord_ChartContainerRightLegendTitle'>کارشناس بازدید</span>
                </div>
            </div>
            <div className='ChiefDashbord_ChartContainerRightSwitchs'>
                    <div className={['ChiefDashbord_ChartContainerRightSwitch',chartSwitch===1?'ChiefDashbord_ChartContainerRightSwitchActive' : ''].join(" ")} onClick={() => setChartSwitch(1)}>
                    <div className={['ChiefDashbord_ChartContainerRightSwitchCircle',chartSwitch===1?'ChiefDashbord_ChartContainerRightLegendCircleActive' : ''].join(" ")}>

                    </div>
                    <span className='ChiefDashbord_ChartContainerRightSwitchTitle'>آمار ماهیانه </span>
                </div>    
                <div className={['ChiefDashbord_ChartContainerRightSwitch',chartSwitch===2? 'ChiefDashbord_ChartContainerRightSwitchActive' : ''].join(" ")} onClick={() => setChartSwitch(2)}>
                    <div className={['ChiefDashbord_ChartContainerRightSwitchCircle',chartSwitch===2? 'ChiefDashbord_ChartContainerRightLegendCircleActive' : ''].join(" ")}>

                    </div>
                    <span className='ChiefDashbord_ChartContainerRightSwitchTitle'>آمار سالیانه </span>
                </div>  
        
            </div>
        </div>
        <div className='ChiefDashbord_ChartContainerLeft'>
            <Chart options={ChartData.options} series={ChartData.series} type="line" height={chartH} />
        </div>
    </div>
  )
}

export default ChiefDashbord_Chart