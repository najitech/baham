import React , {useState} from 'react'
import './ChiefDashbord_sidebar.css'
import ProfileImage from '../../user.png'
import {HiCube,HiOutlineCloudDownload} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import {IoIosPeople} from 'react-icons/io'
import {IoBookOutline} from 'react-icons/io5'
import {BsFileEarmarkText,BsPersonCheck} from 'react-icons/bs'
import {MdInput} from 'react-icons/md'
import {RiSearch2Line,RiBook3Line} from 'react-icons/ri'
import {MdOutlinePeople,MdOutlinePersonSearch} from 'react-icons/md'
import {BiBuildingHouse} from 'react-icons/bi'
import {AiOutlineDollar,AiOutlineSetting} from 'react-icons/ai'
import {VscOpenPreview} from 'react-icons/vsc'
import {FiChevronDown,FiChevronUp} from 'react-icons/fi'


function ChiefDashbord_sidebar(props) {
  const [setting , setSetting] = useState(true);
  const [settingItem , setSettingItem] = useState(1);
  const [sidebar , setSidebar] = useState(1);
  return (
    <div className='ChiefDashbord_sidebar'>
        <div className='ChiefDashbord_sidebarProfile'>
            <div className='ChiefDashbord_sidebarProfileImageContainer'>
              <div className="ChiefDashbord_sidebarProfileImageContainerSmall">
                <img src={ProfileImage} className='ChiefDashbord_sidebarProfileImage' alt="hi"  />
              </div>
              
            </div>
           
            <span className='ChiefDashbord_sidebarProfileName'>{props.ChiefName}</span>
        </div>
        <div className='ChiefDashbord_sidebarItems'>
            <div className={['ChiefDashbord_sidebarItemContainer ChiefDashbord_sidebarItemContainerNoMargin' ,sidebar===1? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===1 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")} onClick={() => setSidebar(1)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                    <HiCube/>
                  </div>
                
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===1 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>پیشخوان</span></Link>
                  
              </div>
            </div>

            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===2? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===2 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(2)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <IoBookOutline/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===2 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>وبلاگ</span></Link>
              </div>
            </div>

            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===3? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===3 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(3)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <BsFileEarmarkText/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===3 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>برگه</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===4? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===4 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(4)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <MdInput/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===4 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>فرم های ورودی</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===5? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===5 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(5)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <RiSearch2Line/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===5 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>ارزیابی</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===6? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===6 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(6)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <RiBook3Line/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===6? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>آگهی</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===7? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===7 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(7)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <MdOutlinePeople/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===7? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>بازاریاب</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===8? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===8 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(8)}>
                   <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <MdOutlinePersonSearch/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===8 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>کارشناس بازدید</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===9? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===9 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(9)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <BiBuildingHouse/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===9 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>املاک</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===10? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===10 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(10)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <IoIosPeople/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===10 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>معرفی شدگان</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===11? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===11 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(11)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <HiOutlineCloudDownload/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===11 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>ارجاعات</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===12? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===12 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(12)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <AiOutlineDollar/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===12 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>نقدینگی</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===13? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===13 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(13)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <VscOpenPreview/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===13 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>حسابرسی</span></Link>
              </div>
            </div>
            
            <div className={['ChiefDashbord_sidebarItemContainer' ,sidebar===14? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")}>
              <div className={['ChiefDashbord_sidebarItem', sidebar===14 ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  onClick={() => setSidebar(14)}>
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <BsPersonCheck/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , sidebar===14 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>کاربران</span></Link>
              </div>
            </div>
            
        </div>
        <div className='ChiefDashbord_sidebar_settingConatiner'>
            <div className={['ChiefDashbord_sidebarItemContainer ChiefDashbord_sidebarItemContainerSetting' ,setting? "ChiefDashbord_sidebarItemContainerActive": ""].join(" ")} onClick={() => setSetting(!setting)}>
              <div className={['ChiefDashbord_sidebarItem', setting ?"ChiefDashbord_sidebarItemActive" : "" ].join(" ")}  >
                  <div className='ChiefDashbord_sidebarItemIconContainer'>
                  <AiOutlineSetting/>
                  </div>
                  <Link  className={['ChiefDashbord_sidebarItemTitle' , setting ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} to={`/${props.path}/dashboard`}><span className=''>تنظیمات</span></Link>
              </div>
              <div className={['ChiefDashbord_sidebarItemContainerSettingAcc' , setting ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")}>
                  {
                      !setting ? 
                      <FiChevronDown/>
                      :
                      <FiChevronUp/>
                  }
                        
              </div>
            </div>
            {
                setting ? 
                <div className='ChiefDashbord_sidebar_settingAccOpenConatiner'>
                    <span className={['ChiefDashbord_sidebarItemTitle ChiefDashbord_sidebar_settingAccOpenTitle',settingItem===1 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} onClick={() => setSettingItem(1)} > پیامک</span>
                    <span className={['ChiefDashbord_sidebarItemTitle ChiefDashbord_sidebar_settingAccOpenTitle',settingItem===2 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} onClick={() => setSettingItem(2)}  > درگاه پرداخت</span>
                    <span className={['ChiefDashbord_sidebarItemTitle ChiefDashbord_sidebar_settingAccOpenTitle',settingItem===3 ? "ChiefDashbord_sidebarItemTitleActive" : ""].join(" ")} onClick={() => setSettingItem(3)}  > پیش فرض ها</span>
                </div>
                :
                <></>
            }
            
        </div>
    </div>
  )
}

export default ChiefDashbord_sidebar