import React , {useState} from 'react'
import RateTable from '../../Components/RateTable/RateTable'
import './RatePage.css'
import RateTitle from '../../ratetitle2.png'
import AdressText from '../../adrees2.png'
import Barcode from '../../overviewBarcode.png'

import {HiMenu} from 'react-icons/hi'
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/material'

function RatePage() {

 

  const [DP_DrawerB,setDP_DrawerB] = useState(false)
  const data = [
    [
        {
           tableNumber: 1,
           tableTitle: "سالن پذیرایی" ,
           tableFeatures : [
              {
                  featureName: "تناسب ابعاد سالن" ,
                  featureRate: 4
              }
              ,
              {
                featureName: "نسبت مساحت سالن بر مساحت کل واحد" ,
                featureRate: 3
              }
              ,
              {
                featureName: "ارتفاع سقف" ,
                featureRate: 2
              }
              ,
              {
                featureName: "نداشتن قناسی در سالن" ,
                featureRate: 5
              }
              
           ]
        }
        ,
        {
          tableNumber: 2,
          tableTitle: "آشپزخانه" ,
          tableFeatures : [
            {
              featureName: "نسبت مساحت آشپزخانه بر مساحت کل واحد" ,
              featureRate: 1
            }
            ,
            {
              featureName: "دسترسی به سالن" ,
              featureRate: 5
            }
            ,
            {
              featureName: "تناسب ابعاد آشپزخانه" ,
              featureRate: 3
            }
            ,
            {
              featureName: "نداشتن قناسی در آشپزخانه" ,
              featureRate: 3
            }
          ]
        }
        ,
        {
          tableNumber: 3,
          tableTitle: "اتاق خواب" ,
          tableFeatures : [
            {
              featureName: "حداقل یکی از اتاق خواب ها بیش از 11 متر باشد",
              featureRate: 2
            }
            ,
            {
              featureName: "تناسب ابعاد اتاق خواب",
              featureRate: 4
            }
            ,
            {
              featureName: "نداشتن قناسی در اتاق خواب",
              featureRate: 1
            }
            ,
            {
              featureName: "داشتن فضای شب آرام",
              featureRate: 5
            }
            ,
            {
              featureName: "کمد دیواری",
              featureRate: 3
            }
            ,
            {
              featureName: "خواب مستر",
              featureRate: 2
            }
          ]
        } 
        ,
        
        {
          tableNumber: 4,
          tableTitle: "سرویس ایرانی و مهمان" ,
          tableFeatures : [
            {
              featureName: "نزدیک در ورود باشد" ,
              featureRate: 3
            }
            ,
            {
              featureName: "با باز شدن در ورودی، سالن دیده نشود" ,
              featureRate: 5
            }
            ,
            {
              featureName: "نزدیک اتاق خواب نباشد" ,
              featureRate: 2
            }
          ]
        } 
        ,
        {
          tableNumber: 5,
          tableTitle: "سرویس فرنگی و خصوصی" ,
          tableFeatures : [
            {
              featureName: "نزدیک اتاق خواب باشد" ,
              featureRate: 1
            }
            ,
            {
              featureName: "به سالن دید نداشته باشد" ,
              featureRate: 1
            }
          ]
        } 
        ,
        {
          tableNumber: 6,
          tableTitle: "دیوار مشترک" ,
          tableFeatures : [
            {
              featureName: "عدم وجود دیوار مشترک" ,
              featureRate: 4
            }
         
          ]
        } 




    ]

    ,

    [
      {
        tableNumber: 1,
        tableTitle: "کلید و پریز" ,
        tableFeatures : [
           {
               featureName: "نوع و برند و کشور سازنده" ,
               featureRate: 2
           }
           ,
           {
             featureName: "وضعیت نو و کهنه بودن و فرسودگی" ,
             featureRate: 3
           }
        
        ]
     }
     ,
     {
      tableNumber: 2,
      tableTitle: "در" ,
      tableFeatures : [
         {
             featureName: "نوع و برند کلی درها" ,
             featureRate: 2
         }
         ,
         {
           featureName: "وضعیت نو و کهنه بودن و فرسودگی کلی درها" ,
           featureRate: 3
         }
      
      ]
    }
    ,
    {
      tableNumber: 3,
      tableTitle: "پنجره" ,
      tableFeatures : [
         {
             featureName: "نوع و برند کلی پنجره" ,
             featureRate: 2
         }
         ,
         {
           featureName: "وضعیت نو و کهنه بودن و فرسودگی" ,
           featureRate: 3
         }
      
      ]
    }
    ,
    {
      tableNumber: 4,
      tableTitle: "شیرآلات" ,
      tableFeatures : [
         {
             featureName: "نوع و برند کلی شیرآلات" ,
             featureRate: 2
         }
         ,
         {
           featureName: "وضعیت نو و کهنه بودن و فرسودگی کلی شیرآلات" ,
           featureRate: 3
         }
      
      ]
    }
    ,
    {
      tableNumber: 5,
      tableTitle: "کابینت" ,
      tableFeatures : [
         {
             featureName: "نوع و برند کلی کابینت" ,
             featureRate: 2
         }
         ,
         {
           featureName: "وضعیت نو و کهنه بودن و فرسودگی" ,
           featureRate: 3
         }
      
      ]
    }
    ,
    {
      tableNumber: 6,
      tableTitle: "آیفون تصویری" ,
      tableFeatures : [
         {
             featureName: "نوع و برند کلی آیفون تصویری" ,
             featureRate: 2
         }
         ,
         {
           featureName: "وضعیت نو و کهنه بودن" ,
           featureRate: 3
         }
      
      ]
    }
    ,
    {
      tableNumber: 7,
      tableTitle: "سرویس ها" ,
      tableFeatures : [
         {
             featureName: "جنس سرامیک" ,
             featureRate: 4
         }
         ,
         {
           featureName: "نوع روشویی" ,
           featureRate: 1
         }
         ,
         {
           featureName: "نوع توالت فرنگی" ,
           featureRate: 2
         }
      
      ]
    }
  
    ,
    {
      tableNumber: 8,
      tableTitle: "سقف" ,
      tableFeatures : [
         {
             featureName: "وجود یا عدم وجود کناف" ,
             featureRate: 5
         }
         ,
         {
           featureName: "کیفیت و ظرافت کناف کاری" ,
           featureRate: 3
         }
         ,
         {
           featureName: "کیفیت رنگ کاری سقف" ,
           featureRate: 4
         }
      
      ]
    }
    ,
    {
      tableNumber: 9,
      tableTitle: "کف" ,
      tableFeatures : [
         {
             featureName: "نوع متریال کف" ,
             featureRate: 5
         }
         ,
         {
           featureName: "ابعاد متریال کف" ,
           featureRate: 1
         }
         ,
         {
           featureName: "میزان شفافیت کف" ,
           featureRate: 3
         }
      
      ]
    }
    ,
    {
      tableNumber: 10,
      tableTitle: "دیوار" ,
      tableFeatures : [
         {
             featureName: "سلامت ظاهری دیوار" ,
             featureRate: 5
         }
         ,
         {
           featureName: "استفاده از کاغذ دیواری" ,
           featureRate: 1
         }
         
      
      ]
    }
    ,
    {
      tableNumber:11,
      tableTitle: "سیستم گرمایشی" ,
      tableFeatures : [
         {
             featureName: "نوع سیستم گرمایشی" ,
             featureRate: 2
         }
        
      ]
    }
    ,
    {
      tableNumber: 12,
      tableTitle: "سیستم سرمایشی" ,
      tableFeatures : [
         {
             featureName: "نوع سیستم سرمایشی" ,
             featureRate: 2
         }
        
      ]
    }

    ,
    {
      tableNumber: 13,
      tableTitle: "قرنیز" ,
      tableFeatures : [
         {
             featureName: "وجود یا عدم وجود قرنیز" ,
             featureRate: 2
         }
        
      ]
    }

    ]
    ,
    [
      {
        tableNumber: 1,
        tableTitle: "راه پله" ,
        tableFeatures : [
           {
               featureName: "مناسب بودن عرض راه پله",
               featureRate: 2
           }
           ,
           {
            featureName: "مناسب بودن شیب راه پله",
            featureRate: 4
           }
           ,
           {
            featureName: "مناسب بودن عرض پاگرد",
            featureRate: 1
           }
           ,
           {
            featureName: "جنس متریال بکار رفته در کف و دیوار راه پله",
            featureRate: 3
           }
           ,
           {
            featureName: "وجود نرده و جنس نرده",
            featureRate: 5
           }
       
        ]
      }
      ,
      {
        tableNumber: 2,
        tableTitle: "حیاط" ,
        tableFeatures : [
           {
               featureName: "جنس متریال بکار رفته در کف و دیوار حیاط",
               featureRate: 2
           }
           ,
           {
            featureName: "گلکاری و تزئینات استفاده شده",
            featureRate: 4
           }
           ,
           {
            featureName: "استاندارد شیب رمپ",
            featureRate: 5
           }
           ,
           {
            featureName: "جنس متریال بکار رفته در کف و دیوار راه پله",
            featureRate: 3
           }
           ,
           {
            featureName: "وجود نرده و جنس نرده",
            featureRate: 5
           }
       
        ]
      }
      ,
      {
        tableNumber: 3,
        tableTitle: "پشت بام" ,
        tableFeatures : [
           {
               featureName: "وجود روف گاردن و تزیینات",
               featureRate: 4
           }
          
       
        ]
      }
      ,
      {
        tableNumber: 4,
        tableTitle: "نما" ,
        tableFeatures : [
           {
               featureName: "نوع نما و وضعیت کیفی مصالح بکار رفته در آن",
               featureRate: 3
           }
           ,
           {
            featureName: "وضعیت نورپردازی در نما",
            featureRate: 5
           }
       
        ]
      }
      ,
      {
        tableNumber: 5,
        tableTitle: "لابی" ,
        tableFeatures : [
           {
               featureName: "وجود لابی و مجلل بودن آن",
               featureRate: 3
           }
       
        ]
      }
      ,
      {
        tableNumber: 6,
        tableTitle: "پارکینگ" ,
        tableFeatures : [
           {
               featureName: "جنس متریال بکار رفته در کف و دیوار پارکینگ",
               featureRate: 3
           }
           ,
           {
            featureName: "وضعیت کناف و نورپردازی",
            featureRate: 5
        }
    
       
        ]
      }
      ,
      {
        tableNumber: 7,
        tableTitle: "آسانسور" ,
        tableFeatures : [
           {
               featureName: "ظرفیت آسانسور",
               featureRate: 2
           }
           ,
           {
            featureName: "وضعیت تمیزی و نو بودن آسانسور",
            featureRate: 5
           }
           ,
           {
            featureName: "نداشتن صدای آسانسور",
            featureRate: 3
           }
           ,
           {
            featureName: "لرزش آسانسور",
            featureRate: 1
           }
       
        ]
      }
  
    ]
  ]
  return (
    <div className='RatePage'>
           <div className='RP_BigtablesHimenuContainer' onClick={() => setDP_DrawerB(true)}>
                <div><HiMenu className='RP_BigtablesHimenu'/></div>  
            </div>          
        <div className='RP_Bigtables'>
           

            <div className='forScrool'>
 
                <div className='RP_BigtableContainer'>
                    <div className='RP_BigtableContainerTitle'>
                          <span>نقشه</span>
                    </div>
                    <div className='RP_BigtableContainerTables'>
                        {
                          data[0].map((table) => {
                            return (
                              <RateTable ratedata = {table} key={`${table.tableNumber}+${table.tableTitle}`}/>
                            )                 
                            }  
                          )
                        }
                    </div>
                </div>
              </div>
                <div className='RP_BigtableContainer'>
                    <div className='RP_BigtableContainerTitle'>
                          <span>متریال داخلی</span>
                    </div>
                    <div className='RP_BigtableContainerTables'>
                        {
                          data[1].map((table) => {
                            return (
                              <RateTable ratedata = {table} key={`${table.tableNumber}+${table.tableTitle}`}/>
                            )                 
                            }  
                          )
                        }
                    </div>
                </div>
                         
         
            <div className='RP_BigtableContainer'>
                <div className='RP_BigtableContainerTitle'>
                      <span>مشاعات</span>
                </div>
                <div className='RP_BigtableContainerTables'>
                    {
                      data[2].map((table) => {
                        return (
                          <RateTable ratedata = {table} key={`${table.tableNumber}+${table.tableTitle}`}/>
                        )                 
                        }  
                      )
                    }
                </div>
            </div>
            
        </div>
        <div className='RP_information'>
          <div className='RP_informationContent'>
              <div className='RP_informationContent_BahamContainer'>
                  <h2 className='RP_informationContent_Baham'>باهم</h2>
              </div>
              <img className='RP_informationContentTextpic' alt="title" src={RateTitle} />
              <div className='RP_informationContentAdressTextContainer'>
                  <img className='RP_informationContentAdressText' alt="title" src={AdressText} />
              </div>
              
              <div className='RP_informationContentPhoneContainer'>
                <span className='RP_informationContentPhoneTitle'>تلفن:</span>
                <span className='RP_informationContentPhone'>021 44262200</span>
              </div>
              <div className='RP_informationContentBarcodeContainer'>
                <span className='RP_informationContentBarcodeTitle'>اسکن کنید</span>
                <img className='RP_informationContentBarcodeImage' alt="barcode" src={Barcode} />
              </div>

          </div>
        </div>


        <Drawer   className="ratePage_Drawer" anchor={'left'} open={DP_DrawerB} onClose={() => setDP_DrawerB(false)} >
            <div className='RP_information RP_informationDrawer'>
              <div className='RP_informationContent'>
                  <div className='RP_informationContent_BahamContainer'>
                      <h2 className='RP_informationContent_Baham'>باهم</h2>
                  </div>
                  <img className='RP_informationContentTextpic' alt="title" src={RateTitle} />
                  <div className='RP_informationContentAdressTextContainer'>
                      <img className='RP_informationContentAdressText' alt="title" src={AdressText} />
                  </div>
                  
                  <div className='RP_informationContentPhoneContainer'>
                    <span className='RP_informationContentPhoneTitle'>تلفن:</span>
                    <span className='RP_informationContentPhone'>021 44262200</span>
                  </div>
                  <div className='RP_informationContentBarcodeContainer'>
                    <span className='RP_informationContentBarcodeTitle'>اسکن کنید</span>
                    <img className='RP_informationContentBarcodeImage' alt="barcode" src={Barcode} />
                  </div>

              </div>
            </div>
        </Drawer>
    </div>
  )
}

export default RatePage