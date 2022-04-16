import React ,{useState,useEffect} from 'react'
import './BaaHam_ContentproductionUser.css'
import BaaHam_ContentproductionUser_Make from './BaaHam_ContentproductionUser_Make/BaaHam_ContentproductionUser_Make'
import BaaHam_ContentproductionUser_Profile from './BaaHam_ContentproductionUser_Profile/BaaHam_ContentproductionUser_Profile'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineEditNote,MdManageSearch} from 'react-icons/md'
import {GiClick} from 'react-icons/gi'
import {RiFileListLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
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
import {BsTwitter,BsTelegram ,BsFillArrowUpCircleFill} from 'react-icons/bs'
import {IoLogoLinkedin} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import Footer from '../Footer/Footer'
import useDocumentTitle from '../../TitleSetter/useDocumentTitle'

function BaaHam_ContentproductionUser(props) {
    useDocumentTitle("باهم | داشبورد کاربر تولید محتوا")
    const location = useLocation()
     const [DP_DrawerB,setDP_DrawerB] = useState(false)
    const [sidebar ,Setsidebar] = useState(1)

    let currentlocation= useLocation();
    useEffect(() => {
      console.log(currentlocation.pathname);
      if (currentlocation.pathname === `/${props.path}/profile`) {
        Setsidebar(1);
      }
      if (currentlocation.pathname === `/${props.path}/make`) {
        Setsidebar(2);
      }

    }, []);



  return (
    <div className='BaaHam_ContentproductionUser'>
       
        <div className='BaaHam_NormalUsersContentContainer'>
            <div className='BaaHam_NormalUsersContenttransparent'>
                <div className='BaaHam_NormalUsersContent'>
                <div className='BaaHam_NUContentSideBar'>
                        <div className='BaaHam_NUContentSideBarUser'>
                            <div className='BaaHam_NUContentSideBarUserPicture BaaHam_CPUContentSideBarUserPicture'>
                                <img src={UserImage} alt="hi" className='BaaHam_NUContentSideBarUserPictureSelf' />
                            </div>
                            <span className='BaaHam_NUContentSideBarUserName'>نام کاربری</span>
                            <span className='BaaHam_NUContentSideBarUserEmail'>Example@gmail.com</span>
                        </div>
                        <div className='BaaHam_NUContentSideBarOptions'>
                            <div className={['BaaHam_NUContentSideBarOption' , sidebar===1 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(1)}>
                            <div className='BaaHam_NUContentSideBarOptionIcon'>
                            <CgProfile/>
                            </div>
                            <Link className={['BaaHam_NULink' , sidebar===1 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/profile`}><span className='BaaHam_NUContentSideBarOptionTitle'>پروفایل</span></Link>
                            </div>
                            <div className={['BaaHam_NUContentSideBarOption' , sidebar===2 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(2)}>
                            <div className='BaaHam_NUContentSideBarOptionIcon'>
                            <MdOutlineEditNote/>
                            </div>
                            <Link className={['BaaHam_NULink' , sidebar===2 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/make`}><span className='BaaHam_NUContentSideBarOptionTitle'>تولید محتوا   </span></Link>
                            
                            </div>


                            <div className='BaaHam_NUContentSideBarUserExitButtonContainer'>
                            <div className='BaaHam_NUContentSideBarUserExitButton'>
                                <IoExitOutline/>
                            </div> 
                            <span className='BaaHam_NUContentSideBarUserExitButtonTitle'>خروج</span>
                            </div>
                        </div>
                
                    </div>
                    <div className='BaaHam_NUContentForm'>
                    <div className='BaaHam_NUContentFormUserImageContainer'>
                      <div className='BaaHam_NUContentSideBarUser2'>
                        <span className='BaaHam_NUContentSideBarUserName BaaHam_NUContentSideBarUserName2'>نام کاربری</span>
                          <div className='BaaHam_NUContentSideBarUserPicture2Container'>
                            <div className='BaaHam_NUContentSideBarUserPicture2 BaaHam_CPUContentSideBarUserPicture'>
                                <img src={UserImage} alt="hi" className='BaaHam_NUContentSideBarUserPictureSelf BaaHam_NUContentSideBarUserPictureSelf2' />
                            </div>

                          </div>
                          <span className='BaaHam_NUContentSideBarUserName BaaHam_NUContentSideBarUserName2 BaaHam_NUContentSideBarUserName3'>نام کاربری</span>
                       
                          <span className='BaaHam_NUContentSideBarUserEmail BaaHam_NUContentSideBarUserEmail2'>Example@gmail.com</span>
                      </div>
                    </div>
                    <div className='BaaHam_NUContentFormHeaderSliderIcon'>
                      <div className='BaaHam_NUContentFormHeader'>
                          <span className='BaaHam_NUContentFormHeaderTitle'>باهم | داشبورد کاربر تولید محتوا</span>
                      </div>
                    
                      <div className='LinksTopHeaderContent_Icon' onClick={() => setDP_DrawerB(true)}>
                          <div><HiMenu className='LinksTopHeaderContent_IconSelf'/></div>  
                      </div>
                    </div>
                        
                        {/*
                            sidebar===1 ? 
                            <BaaHam_ContentproductionUser_Profile/>
                            :
                            <BaaHam_ContentproductionUser_Make/>
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
                                     <BaaHam_ContentproductionUser_Profile/>
                                </div>
                                : 
                                <></>}
                            
                            </Route>
                            <Route exact path={`/${props.path}/profile`}>
                            { sidebar===1 ? 
                                <div className='BaaHam_RouteItem'>
                                     <BaaHam_ContentproductionUser_Profile/>
                                </div>
                                : 
                                <></>}
                            
                            </Route>
                            <Route path={`/${props.path}/make`}>
                            { sidebar===2 ? 
                                <div className='BaaHam_RouteItem'>
                                    <BaaHam_ContentproductionUser_Make/>
                                </div>
                                : 
                                <></>}
                        
                            </Route>
                    
                        </Switch>
                    
                    </div>
                </div>
                <div className='BaaHamMainFooterContainer'>
                <div className='BaaHamMainFooterContainer'>
                    <Footer/>
              </div>
              </div>
            </div>   
        </div>
        <Drawer  className="Links_Drawer" anchor={'right'} open={DP_DrawerB} onClose={() => setDP_DrawerB(false)} >
              <div className='BaaHam_NUContentSideBar BaaHam_NUContentSideBarRes'>
           
                        <div className='BaaHam_NUContentSideBarOptions'>
                            <div className={['BaaHam_NUContentSideBarOption' , sidebar===1 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(1)}>
                            <div className='BaaHam_NUContentSideBarOptionIcon'>
                            <CgProfile/>
                            </div>
                            <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===1 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/profile`}><span className='BaaHam_NUContentSideBarOptionTitle'>پروفایل</span></Link>
                            </div>
                            <div className={['BaaHam_NUContentSideBarOption' , sidebar===2 ? "BaaHam_NUContentSideBarOptionActive" : ""].join(" ")} onClick={() => Setsidebar(2)}>
                            <div className='BaaHam_NUContentSideBarOptionIcon'>
                            <MdOutlineEditNote/>
                            </div>
                            <Link onClick={() => setDP_DrawerB(false)} className={['BaaHam_NULink' , sidebar===2 ? "BaaHam_NULinkActive" : ""].join(" ")} to={`/${props.path}/make`}><span className='BaaHam_NUContentSideBarOptionTitle'>تولید محتوا   </span></Link>
                            
                            </div>


                            <div className='BaaHam_NUContentSideBarUserExitButtonContainer'>
                            <div className='BaaHam_NUContentSideBarUserExitButton'>
                                <IoExitOutline/>
                            </div> 
                            <span className='BaaHam_NUContentSideBarUserExitButtonTitle'>خروج</span>
                            </div>
                        </div>
                
                    </div>
        </Drawer>
    </div>
  )
}

export default BaaHam_ContentproductionUser