import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import { Link, useRouteMatch } from 'react-router-dom';
import logo from '../../Images/headerLogo.jpg'
import './HeaderArchive.css'
function HeaderArchive(props) {
  let item1 = useRouteMatch({
    path: '/blog',
    exact: true
  });
  let item2 = useRouteMatch({
    path: '/akhbar',
    exact: true
  });
  let item3 = useRouteMatch({
    path: '/Writings',
    exact: true
  });
  return (
    <div className='HeaderArchive'>
            <div className='logoAmozeshiHeader'>
                <img alt='' src={logo}/>
            </div>
            <div className='rowHeaderArchive'>
                <div className='searchHeaderArchove'><input placeholder='نوشته مورد نظر را جست و جو کنید'/><BiSearchAlt className='iconSearchIknput' style={{fontSize:'27px',marginLeft:'5px',color:'#fd4900'}}/></div>
                <div className='linksHeaderArchive'>
                    <Link to={'/blog'}  className={['linkClassHeaderStyle' ,item1? 'activeHeaderLink':''].join(" ")}><div >مطالب آموزشی</div></Link>
                    <Link  className={['linkClassHeaderStyle' ,item2? 'activeHeaderLink':''].join(" ")}><div>اخبار</div></Link>
                    <Link  className={['linkClassHeaderStyle' ,item3? 'activeHeaderLink':''].join(" ")}><div>نوشته های تخصصی</div></Link>
                </div>
                <Link style={{textDecoration:'none'}} to={'/home'}><div className='bahamSiteButton'>
                    <h3>سایت باهم</h3>
                </div></Link>
            </div>
    </div>
  )
}

export default HeaderArchive