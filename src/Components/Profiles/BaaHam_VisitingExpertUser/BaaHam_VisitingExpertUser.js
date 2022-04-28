import React, {useState,useEffect,useRef} from 'react'
import './BaaHam_VisitingExpertUser.css'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineEditNote,MdManageSearch} from 'react-icons/md'
import {GiClick} from 'react-icons/gi'
import {RiFileListLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import BaaHam_VisitingExpertUser_Profile from './BaaHam_VisitingExpertUser_Profile/BaaHam_VisitingExpertUser_Profile'
import BaaHam_VisitingExpertUser_Marketer from './BaaHam_VisitingExpertUser_Marketer/BaaHam_VisitingExpertUser_Marketer'
import BaaHam_VisitingExpertUser_Order from './BaaHam_VisitingExpertUser_Order/BaaHam_VisitingExpertUser_Order'
import BaaHam_VisitingExpertUser_MyHouses from './BaaHam_VisitingExpertUser_MyHouses/BaaHam_VisitingExpertUser_MyHouses'
import Image2 from '../../../pic2.png'
import Image3 from '../../../pic3.jpg'
import Image4 from '../../../pic4.jpg'
import Image5 from '../../../pic5.jpg'
import UserImage from '../../../user.png'
import FooterImage from '../../../Footer.jpg'
import {IoExitOutline} from 'react-icons/io5'
import {Switch , Route , BrowserRouter as Router ,  Link,useLocation} from 'react-router-dom';
import {HiMenu} from 'react-icons/hi'
import Drawer from '@mui/material/Drawer';
import BaaHam_VisitingExpertUser_Money from './BaaHam_VisitingExpertUser_Money/BaaHam_VisitingExpertUser_Money'
import BaaHam_VisitingExpertUser_Information from './BaaHam_VisitingExpertUser_Information/BaaHam_VisitingExpertUser_Information'
import BaaHam_VisitingExpertUser_Introduction from './BaaHam_VisitingExpertUser_Introduction/BaaHam_VisitingExpertUser_Introduction'
import BaaHam_VisitingExpertUser_SabteAgahi from './BaaHam_VisitingExpertUser_SabteAgahi/BaaHam_VisitingExpertUser_SabteAgahi'
import {BsTwitter,BsTelegram ,BsFillArrowUpCircleFill} from 'react-icons/bs'
import {IoLogoLinkedin} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import Footer from '../Footer/Footer'
import useDocumentTitle from '../../TitleSetter/useDocumentTitle'


function BaaHam_VisitingExpertUser(props) {
    useDocumentTitle("باهم | داشبورد کاربر کارشناس بازدید")
    const location = useLocation()
    const [DP_DrawerB,setDP_DrawerB] = useState(false)
    const [sidebar ,Setsidebar] = useState(1)

    let currentlocation= useLocation();
    useEffect(() => {
      if (currentlocation.pathname === `/${props.path}/profile`) {
        Setsidebar(1);
      }
      if (currentlocation.pathname === `/${props.path}/sabteagahi`) {
        Setsidebar(2);
      }
      if (currentlocation.pathname === `/${props.path}/information`) {
        Setsidebar(3);
      }
      if (currentlocation.pathname === `/${props.path}/introduction`) {
        Setsidebar(4);
      }
      if (currentlocation.pathname === `/${props.path}/money`) {
        Setsidebar(5);
      }
      if (currentlocation.pathname === `/${props.path}/marketer`) {
        Setsidebar(6);
      } 
      if (currentlocation.pathname === `/${props.path}/order`) {
        Setsidebar(7);
      }
      if (currentlocation.pathname === `/${props.path}/myhouses`) {
        Setsidebar(8);
      }
    }, []);

    useEffect(() => {
        props.header.current.scrollIntoView({ behavior: "smooth",block: "end" });
      });
  return (
    <div className='BaaHam_VisitingExpertUser'>
       
        <div className='BaaHam_NormalUsersContentContainer'>
            <div className='BaaHam_NormalUsersContenttransparent'>
                <div className='BaaHam_NormalUsersContent'>
                <div className='BaaHam_NUContentSideBar'>
                    <div className='BaaHam_NUContentSideBarUser'>
                        <div className='BaaHam_NUContentSideBarUserPicture BaaHam_VEUContentSideBarUserPicture'>
                            <img src={UserImage} alt="hi" className='BaaHam_NUContentSideBarUserPictureSelf' />
                        </div>
                        <span className='BaaHam_NUContentSideBarUserName'>نام کاربری</span>
                        <span className='BaaHam_NUContentSideBarUserEmail'>Example@gmail.com</span>
                    </div>
                    <div className='BaaHam_NUContentSideBarOptions'>
                      <ul className='BaaHam_NUContentSideBarOptionsUL'>
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===1 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(1)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <CgProfile/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===1 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/profile`}><span className='BaaHam_NUContentSideBarOptionTitle'>پروفایل</span></Link>
                        </li>
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===2 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(2)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <MdOutlineEditNote/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===2 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/sabteagahi`}><span className='BaaHam_NUContentSideBarOptionTitle'>ثبت آگهی</span></Link>
                        
                        </li>
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===3 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(3)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <MdManageSearch/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===3 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/information`}><span className='BaaHam_NUContentSideBarOptionTitle'>اطلاعات تکمیلی </span></Link>
                        
                        </li>
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===4 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(4)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <GiClick/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===4 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/introduction`}><span className='BaaHam_NUContentSideBarOptionTitle'> معرفی مشتری</span></Link>
                    
                        </li>
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===5 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(5)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===5 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/money`}><span className='BaaHam_NUContentSideBarOptionTitle'>نقدینگی  </span></Link>
                        
                        </li>
                        
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===6 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(6)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===6 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/marketer`}><span className='BaaHam_NUContentSideBarOptionTitle'>بازاریاب  </span></Link>
                        
                        </li>
                        
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===7 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(7)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===7 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/order`}><span className='BaaHam_NUContentSideBarOptionTitle'>کارتابل  </span></Link>
                        
                        </li>

                        
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===8 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(8)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link className={['BaaHam_NULink' , sidebar===8 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/myhouses`}><span className='BaaHam_NUContentSideBarOptionTitle'>ملک های من  </span></Link>
                        
                        </li>

                        <div className='BaaHam_NUContentSideBarUserExitButtonContainer'>
                        <div className='BaaHam_NUContentSideBarUserExitButton'>
                            <IoExitOutline/>
                        </div> 
                        <span className='BaaHam_NUContentSideBarUserExitButtonTitle'>خروج</span>
                        </div>
                     </ul>
                    </div>
            
                </div>
                    <div className='BaaHam_NUContentForm'>
                        <div className='BaaHam_NUContentFormUserImageContainer'>
                        <div className='BaaHam_NUContentSideBarUser2'>
                            <span className='BaaHam_NUContentSideBarUserName BaaHam_NUContentSideBarUserName2'>نام کاربری</span>
                            <div className='BaaHam_NUContentSideBarUserPicture2Container'>
                                <div className='BaaHam_NUContentSideBarUserPicture2 BaaHam_VEUContentSideBarUserPicture'>
                                    <img src={UserImage} alt="hi" className='BaaHam_NUContentSideBarUserPictureSelf  BaaHam_NUContentSideBarUserPictureSelf2 ' />
                                </div>

                            </div>
                            <span className='BaaHam_NUContentSideBarUserName BaaHam_NUContentSideBarUserName2 BaaHam_NUContentSideBarUserName3'>نام کاربری</span>
                        
                            <span className='BaaHam_NUContentSideBarUserEmail BaaHam_NUContentSideBarUserEmail2'>Example@gmail.com</span>
                        </div>
                        </div>
                        <div className='BaaHam_NUContentFormHeaderSliderIcon'>
                        <div className='BaaHam_NUContentFormHeader'>
                            <h2 className='BaaHam_NUContentFormHeaderTitle'>باهم | داشبورد کاربر کارشناس بازدید</h2>
                        </div>
                        
                        <div className='LinksTopHeaderContent_Icon' onClick={() => setDP_DrawerB(true)}>
                            <div><HiMenu className='LinksTopHeaderContent_IconSelf'/></div>  
                        </div>
                        </div>
                        
                        {/*
                            sidebar===1 ? 
                            <BaaHam_VisitingExpertUser_Profile/>
                            :
                            sidebar===6 ? 
                            <BaaHam_VisitingExpertUser_Marketer/>
                            :
                            sidebar===7 ?
                            <BaaHam_VisitingExpertUser_Order/>
                            :
                            <BaaHam_VisitingExpertUser_MyHouses/>
                        /*
                        sidebar===4 ?
                        <BaaHam_NormalUsers_Requests Stepper={3}/>
                        :
                        sidebar===5 ?
                        <BaaHam_NormalUsers_AgahihayeMan/>
                        :
                        <BaaHam_NormalUsers_Favorites/>*/
                        }
                        <Switch location={location} key={location.pathname}>
                            <Route exact path={`/${props.path}/`}>
                                { sidebar===1 ? 
                                <div className='BaaHam_RouteItem'>
                                     <BaaHam_VisitingExpertUser_Profile/>
                                </div>
                                : 
                                <></>}
                            
                            </Route>
                        
                            <Route exact path={`/${props.path}/profile`}>
                                { sidebar===1 ? 
                                <div className='BaaHam_RouteItem'>
                                     <BaaHam_VisitingExpertUser_Profile/>
                                </div>
                                : 
                                <></>}
                            
                            </Route>
                        
                            <Route path={`/${props.path}/sabteagahi`}>
                                
                                { sidebar===2 ? 
                                <div className='BaaHam_RouteItem'>
                                        <BaaHam_VisitingExpertUser_SabteAgahi/>
                                </div>
                                : 
                                <></>}
                            
                                </Route>
                                <Route path={`/${props.path}/information`}>
                                { sidebar===3 ? 
                                <div className='BaaHam_RouteItem'>
                                    <BaaHam_VisitingExpertUser_Information/>
                                </div>
                                : 
                                <></>}
                        
                            </Route>
                            <Route path={`/${props.path}/introduction`}>
                                { sidebar===4 ? 
                                <div className='BaaHam_RouteItem'>
                                    <BaaHam_VisitingExpertUser_Introduction/>
                                </div>
                                : 
                                <></>}
                                
                            </Route>
                            <Route path={`/${props.path}/money`}>
                                { sidebar===5 ? 
                                <div className='BaaHam_RouteItem'>
                                    <BaaHam_VisitingExpertUser_Money/>
                                </div>
                                : 
                                <></>}
                        
                            </Route>
                            <Route path={`/${props.path}/marketer`}>
                                
                            { sidebar===6 ? 
                                <div className='BaaHam_RouteItem'>
                                    <BaaHam_VisitingExpertUser_Marketer/>
                                </div>
                                : 
                                <></>}
                            
                            </Route>
                            <Route path={`/${props.path}/order`}>
                                { sidebar===7 ? 
                                <div className='BaaHam_RouteItem'>
                                    <BaaHam_VisitingExpertUser_Order/>
                                </div>
                                : 
                                <></>}
                
                            </Route>
                            <Route path={`/${props.path}/myhouses`}>
                                { sidebar===8 ? 
                                <div className='BaaHam_RouteItem'>
                                    <BaaHam_VisitingExpertUser_MyHouses/>
                                </div>
                                : 
                                <></>}
                
                            </Route>


                        </Switch>
                     
                    </div>
                </div>
                <div className='BaaHamMainFooterContainer'>
                <Footer/>
                </div>   
            </div>   
        </div>
        <Drawer  className="Links_Drawer" anchor={'right'} open={DP_DrawerB} onClose={() => setDP_DrawerB(false)} >
        <div className='BaaHam_NUContentSideBar BaaHam_NUContentSideBarRes'>
                   
        <div className='BaaHam_NUContentSideBarOptions'>
                      <ul className='BaaHam_NUContentSideBarOptionsUL'>
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===1 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(1)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <CgProfile/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===1 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/profile`}><span className='BaaHam_NUContentSideBarOptionTitle'>پروفایل</span></Link>
                        </li>
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===2 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(2)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <MdOutlineEditNote/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===2 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/sabteagahi`}><span className='BaaHam_NUContentSideBarOptionTitle'>ثبت آگهی</span></Link>
                         
                        </li>
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===3 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(3)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <MdManageSearch/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===3 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/information`}><span className='BaaHam_NUContentSideBarOptionTitle'>اطلاعات تکمیلی </span></Link>
                        
                        </li>
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===4 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(4)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <GiClick/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===4 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/introduction`}><span className='BaaHam_NUContentSideBarOptionTitle'> معرفی مشتری</span></Link>
                    
                        </li>
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===5 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(5)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===5 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/money`}><span className='BaaHam_NUContentSideBarOptionTitle'>نقدینگی  </span></Link>
                        
                        </li>
                        
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===6 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(6)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===6 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/marketer`}><span className='BaaHam_NUContentSideBarOptionTitle'>بازاریاب  </span></Link>
                        
                        </li>
                        
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===7 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(7)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===7 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/order`}><span className='BaaHam_NUContentSideBarOptionTitle'>کارتابل  </span></Link>
                        
                        </li>

                        
                        <li className={['BaaHam_NUContentSideBarOption' , sidebar===8 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(8)}>
                        <div className='BaaHam_NUContentSideBarOptionIcon'>
                        <RiFileListLine/>
                        </div>
                        <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===8 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/myhouses`}><span className='BaaHam_NUContentSideBarOptionTitle'>ملک های من  </span></Link>
                        
                        </li>

                        <div className='BaaHam_NUContentSideBarUserExitButtonContainer'>
                        <div className='BaaHam_NUContentSideBarUserExitButton'>
                            <IoExitOutline/>
                        </div> 
                        <span className='BaaHam_NUContentSideBarUserExitButtonTitle'>خروج</span>
                        </div>
                     </ul>
                    </div>
            
                </div>
        </Drawer>
    </div>
  )
}

export default BaaHam_VisitingExpertUser