import React , {useState,useRef,useEffect} from 'react'
import './ChiefDashbord.css'
import ChiefDashbord_sidebar from './ChiefDashbord_sidebar'
import {BiLogOut,BiTrash} from 'react-icons/bi'
import {RiSearch2Line} from 'react-icons/ri'
import {BsPlusSquare} from 'react-icons/bs'
import ChiefDashbord_filters from './ChiefDashbord_filters/ChiefDashbord_filters'
import DropDown2 from '../../Components/DropDown2/DropDown2'
import CheckBox from '../../Components/CheckBox/CheckBox'
import ProfileImage from '../../user.png'
import ChiefDashbord_Chart from './ChiefDashbord_Chart'
import ChiefDashbord_Text from './ChiefDashbord_Text'
import BuildingBox from '../../Components/BuildingBox/BuildingBox'
import {HiMenu} from 'react-icons/hi'
import PersonBox from '../../Components/PersonBox/PersonBox'
import Drawer from '@mui/material/Drawer';
import useDocumentTitle from '../../Components/TitleSetter/useDocumentTitle'
import ChiefDashbord_sidebar_res from './ChiefDashbord_sidebar_res'


function ChiefDashbord() {

    useDocumentTitle("باهم | داشبورد کاربر ارشد")
    const [DP_DrawerB,setDP_DrawerB] = useState(false)

  let persons = [
    {
        rowNumber:1,
        userName:"Ali_mohammadi " ,
        name:"علی محمدی" ,
        email: "Ali_mohammadi@gmail.com",
        status: "کارشناس بازدید" ,
    }
  ] 
  let buildings = [
    {
        rowNumber:1,
        buildingCode:431268,
        owner: "علی محمدی",
        expertName : "حسین احسانی" ,
        from : "باهم" ,
        state: "جدید" ,
        paid : "نقدی" 
    },
    {
      rowNumber:1,
      buildingCode:431268,
      owner: "علی محمدی",
      expertName : "حسین احسانی" ,
      from : "باهم" ,
      state: "در حال ارزیابی" ,
      paid : "نقدی" 
    },
    {
      rowNumber:1,
      buildingCode:431268,
      owner: "علی محمدی",
      expertName : "حسین احسانی" ,
      from : "باهم" ,
      state: "ارجاع شده" ,
      paid : "نقدی" 
    },
    {
      rowNumber:1,
      buildingCode:431268,
      owner: "علی محمدی",
      expertName : "حسین احسانی" ,
      from : "باهم" ,
      state: "تکمیل شده" ,
      paid : "نقدی" 
    }
  ]

  const [postFilter ,setPostFilter] = useState(1);

  const optionsList1 = [
    { label: 'املاک', value: 'املاک'},
    { label: 'بازاریاب', value: 'بازاریاب'},
    { label: 'باهم', value: 'باهم'},
    { label: 'مستقیم', value: 'مستقیم'},
];
    const header= useRef(null);
    useEffect(() => {
        header.current.scrollIntoView({ behavior: "smooth" });
        }, []);
  return (
    <div className='ChiefDashbord' ref={header}>
        <div className='ChiefDashbord_SidebarContainer'>
            <ChiefDashbord_sidebar ChiefName="متین نوروزپور" path="" userProfile={ProfileImage}/>
        </div>
      
        <div className='ChiefDashbord_Feed'>
            <div className='ChiefDashbord_FeedHeader'>
                <div className='ChiefDashbord_FeedHeaderTitleContainer'> 
                    <div className='ChiefDashbord_sideBarOpenIconContainer' onClick={() => setDP_DrawerB(true)}>
                        <HiMenu className='ChiefDashbord_sideBarOpenIcon'/>
                    </div>
                    <div className='ChiefDashbord_FeedHeaderTitleBor'></div>
                    <span className='ChiefDashbord_FeedHeaderTitle'>داشبورد مدیر ارشد</span>
                </div>
                
                <div className='ChiefDashbord_FeedHeaderLogin'>
                    <span className='ChiefDashbord_FeedHeaderLoginTitle1'>وارد شده به عنوان</span>
                    <span className='ChiefDashbord_FeedHeaderLoginTitle2'>مدیر ارشد</span>
                    <div className='ChiefDashbord_FeedHeaderLogout'>
                      <span className='ChiefDashbord_FeedHeaderLogoutTitle'>خروج</span>
                        <div className='ChiefDashbord_FeedHeaderLogoutIcon'>
                          <BiLogOut/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='ChiefDashbord_FeedContent'>
                <div className='ChiefDashbord_FeedContentEvaluationContainer'>
                    <div className='ChiefDashbord_FeedContentEvaluationTitles'>
                        <div className='ChiefDashbord_FeedContentEvaluationTitleContainer'>
                            <div className='ChiefDashbord_FeedContentEvaluationTitleIcon'>
                              <RiSearch2Line/>
                            </div>
                       
                            <span className='ChiefDashbord_FeedContentEvaluationTitle'>ارزیابی</span>
                        </div>
                        <span className='ChiefDashbord_FeedContentEvaluationTitleDescribe'>مدیریت ارزیابی</span>
                    </div>
                    <div className='ChiefDashbord_FeedContentEvaluationButtonC'>
                        <div className='ChiefDashbord_FeedContentEvaluationButtonIcon'>
                            <BsPlusSquare/>
                        </div>
                        <span className='ChiefDashbord_FeedContentEvaluationButtonTitle'>ایجاد</span>
                    </div>
                </div>
                <ChiefDashbord_filters/>
                <div className='ChiefDashbord_Feed_PostFiltersButton'>
                      <div className='ChiefDashbord_Feed_PostFilters'>
                          <span className={['ChiefDashbord_Feed_PostFilter' ,postFilter===1 ?'ChiefDashbord_Feed_PostFilterActive' : ""].join(" ")} onClick={() => setPostFilter(1)}    > همه</span>
                          <span className={['ChiefDashbord_Feed_PostFilter' ,postFilter===2 ?'ChiefDashbord_Feed_PostFilterActive' : ""].join(" ")} onClick={() => setPostFilter(2)}  > مطالب آموزشی </span>
                          <span className={['ChiefDashbord_Feed_PostFilter' ,postFilter===3 ?'ChiefDashbord_Feed_PostFilterActive' : ""].join(" ")} onClick={() => setPostFilter(3)}  > اخبار</span>
                      </div>
                      <div className='ChiefDashbord_Feed_PostButton'>
                        
                          <span className="ChiefDashbord_Feed_PostButtonTitle"> مطلب جدید </span>
                          <div className='ChiefDashbord_FeedContentEvaluationButtonIcon'>
                            <BsPlusSquare/>
                        </div>
                      </div>
                </div>
                <div className='PostFilters2Container'>
                    <div className='PostFilters2Top'>
                        <DropDown2 optionsList={optionsList1} placeholder="همه دسته بندی ها"/>
                        <div className='PostFilters2TopInputContainer'>
                            <input className='PostFilters2TopInput' placeholder='جست و جو' />
                            <div className='PostFilters2TopInputIcon'>
                              <RiSearch2Line/>
                            </div>
                           
                        </div>
                    </div>
                    <div className='PostFilters2Down'>
                      <CheckBox title="انتخاب همه " backColor="rgb(255, 255, 255)"/>
                      <div className='PostFilters2DownRemoveContainer'>
                          <div className='PostFilters2DownRemoveIcon'>
                             <BiTrash/>
                          </div>
                          <span className='PostFilters2DownRemoveTitle'>حذف </span>
                       
                      </div>
                    </div>
                </div>
                <div className='ChiefDashbord_FeedBuildings'>
                    <div className='ChiefDashbord_FeedBuildingstitles'>
                        <span className='ChiefDashbord_FeedBuildingstitle1'> ردیف</span>
                        <span className='ChiefDashbord_FeedBuildingstitle2'>کد ملک </span>
                        <span className='ChiefDashbord_FeedBuildingstitle3'> نام مالک</span>
                        <span className='ChiefDashbord_FeedBuildingstitle4'> کارشناس بازدید</span>
                        <span className='ChiefDashbord_FeedBuildingstitle5'>از طرف </span>
                        <span className='ChiefDashbord_FeedBuildingstitle6'>وضعیت </span>
                        <span className='ChiefDashbord_FeedBuildingstitle7'>پرداخت </span>
                        <span className='ChiefDashbord_FeedBuildingstitle8'>عملیات </span>
                    </div>
                    <BuildingBox building ={buildings[0]}/>
                    <BuildingBox building ={buildings[1]}/>
                    <BuildingBox building ={buildings[2]}/>
                    <BuildingBox building ={buildings[3]}/>
                </div>
                <div className='ChiefDashbord_FeedResults'>
                    <div className='ChiefDashbord_FeedTotalAmount'>
                        <span className='ChiefDashbord_FeedTotalAmountTitle'>مبلغ کل:</span>
                        <div className='ChiefDashbord_FeedTotalAmountNumberContainer'>
                            <span className='ChiefDashbord_FeedTotalAmountNumber'>200/000</span> 
                        </div>
                    </div>
                    <div className='ChiefDashbord_FeedTotalAmount ChiefDashbord_FeedInpureIncome'>
                        <span className='ChiefDashbord_FeedTotalAmountTitle ChiefDashbord_FeedTotalAmountTitleINpureIncome'>درآمد ناخالص </span>
                        <div className='ChiefDashbord_FeedTotalAmountNumberContainer ChiefDashbord_FeedTotalAmountNumberContainerInpureIncome'>
                            <span className='ChiefDashbord_FeedTotalAmountNumber'>468/205/548/100</span> 
                            <span className='ChiefDashbord_FeedTotalAmountRial'>ریال</span>
                        </div>
                    </div>
                    <div className='ChiefDashbord_FeedTotalAmount ChiefDashbord_FeedInpureIncome'>
                        <span className='ChiefDashbord_FeedTotalAmountTitle ChiefDashbord_FeedTotalAmountTitleINpureIncome'>درآمد خالص </span>
                        <div className='ChiefDashbord_FeedTotalAmountNumberContainer ChiefDashbord_FeedTotalAmountNumberContainerInpureIncome'>
                            <span className='ChiefDashbord_FeedTotalAmountNumber'>468/205/548/100</span> 
                            <span className='ChiefDashbord_FeedTotalAmountRial'>ریال</span>
                        </div>
                    </div>
                    <div className='ChiefDashbord_FeedTotalAmount ChiefDashbord_FeedCosts'>
                        <span className='ChiefDashbord_FeedTotalAmountTitle ChiefDashbord_FeedTotalAmountTitleINpureIncome ChiefDashbord_FeedTotalAmountTitleCosts'>هزینه ها  </span>
                        <div className='ChiefDashbord_FeedTotalAmountNumberContainer ChiefDashbord_FeedTotalAmountNumberContainerInpureIncome ChiefDashbord_FeedTotalAmountNumberContainerCosts'>
                            <span className='ChiefDashbord_FeedTotalAmountNumber'>468/205/548/100</span> 
                            <span className='ChiefDashbord_FeedTotalAmountRial'>ریال</span>
                        </div>
                    </div>
                </div>
                <div className='ChiefDashbord_FeedSharesContainer'>
                    <div className='ChiefDashbord_FeedSharesTitles'>
                        <span className='ChiefDashbord_FeedSharesTitle'>سهم بازاریاب ها </span>
                        <span className='ChiefDashbord_FeedSharesTitle'> سهم املاکی ها </span>
                        <span className='ChiefDashbord_FeedSharesTitle'> سهم کارشناسان بازدید </span>
                    </div>
                    <div className='ChiefDashbord_FeedShares'>
                        <div className='ChiefDashbord_FeedTotalAmountNumberContainer ChiefDashbord_FeedShare'>
                            <span className='ChiefDashbord_FeedTotalAmountNumber'>200/000</span>
                            <span className='ChiefDashbord_FeedTotalAmountRial'>ریال</span> 
                        </div>
                        <div className='ChiefDashbord_FeedTotalAmountNumberContainer ChiefDashbord_FeedShare'>
                            <span className='ChiefDashbord_FeedTotalAmountNumber'>200/000</span>
                            <span className='ChiefDashbord_FeedTotalAmountRial'>ریال</span> 
                        </div>
                        <div className='ChiefDashbord_FeedTotalAmountNumberContainer ChiefDashbord_FeedShare'>
                            <span className='ChiefDashbord_FeedTotalAmountNumber'>200/000</span>
                            <span className='ChiefDashbord_FeedTotalAmountRial'>ریال</span> 
                        </div>
                    </div>
                </div>
                <ChiefDashbord_Text/>
                <div className='ChiefDashbord_ChartAndTitleContainer'>
                    <div className='ChiefDashbord_ChartTitleExact'>
                        <span> نمایش نمودار مرتبط با اطلاعات پرداختی خروجی جدول</span>
                    </div>
                    <ChiefDashbord_Chart/>
                </div>
              
                 
                <div className='PersonBoxesContainer'>
                    <div className='ChiefDashbord_FeedPersonBoxestitles'>
                        <span > ردیف</span>
                        <span > نام کاربری</span>
                        <span > نام خانوادگی</span>
                        <span > ایمیل </span>
                        <span >نقش  </span>
                        <span >عملیات </span>
                
                    </div>
                    <PersonBox person={persons[0]}/>
                    <PersonBox person={persons[0]}/>
                    <PersonBox person={persons[0]}/>
                    <PersonBox person={persons[0]}/>
                </div>
                <div>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
   
        </div>
        <Drawer  className="Links_DrawerChiefBoard" anchor={'right'} open={DP_DrawerB} onClose={() => setDP_DrawerB(false)} >
            <div className='Links_DrawerChiefBoardContainer'>
                <ChiefDashbord_sidebar_res setDP_DrawerB={setDP_DrawerB} ChiefName="متین نوروزپور" path="" marginTop="0px" userProfile={ProfileImage}/>
            </div>
            
        </Drawer>
    </div>
  )
}

export default ChiefDashbord