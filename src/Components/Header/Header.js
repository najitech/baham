import React from 'react';
import './Header.css';
import pic from '../../Images/Logonav.jpg';
import { BsPerson } from 'react-icons/bs';
import {Link, useRouteMatch} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';

import {BiChevronDown} from 'react-icons/bi'

function Header(props) {
 

  const res400= useMediaQuery({query :'(max-width : 600px)'});
  
  let item1 = useRouteMatch({
    path: '/home',
    exact: true
  });
  let item2 = useRouteMatch({
    path: '/moshavere',
    exact: true
  });
  let item3 = useRouteMatch({
    path: '/sazandegan',
    exact: true
  });
  let item4 = useRouteMatch({
    path :'/Blog',
    exact: true
  })
  let item5 = useRouteMatch({
    path :'/About',
    exact: true
  })
  return (
    <div className='header'>
        <div className='headerLogo'><div><img alt='' src={pic}/></div></div>
        <nav className='navbar'>
            {!res400?<ul className='navbarList'>
                <Link className={['linkClassHeaderStyle' ,item1? 'activeHeaderLink':''].join(" ")} to={"/home"}><li>صفحه اصلی</li></Link>
                <Link className={['linkClassHeaderStyle' ,item2? 'activeHeaderLink':''].join(" ")} to={"/moshavere"}><li>کارشناسی ملک با ضمانت باهم</li></Link>
                <Link className={['linkClassHeaderStyle' ,item3? 'activeHeaderLink':''].join(" ")} to={"/sazandegan"}><li>فروش سفارشی ملک</li></Link>
                <Link className={['linkClassHeaderStyle' ,item4? 'activeHeaderLink':''].join(" ")} to={"/Blog"}><li>مطالب آموزشی</li></Link>
                <Link className={['linkClassHeaderStyle' ,item5? 'activeHeaderLink':''].join(" ")} to={"/About"}><li>درباره ما</li></Link>
            </ul>:<div className='navbarList'>
                <Link className={['linkClassHeaderStyle' ,item1? 'activeHeaderLink':''].join(" ")} to={"/home"}><div>صفحه اصلی</div></Link>
                <div
                 
                 className='safahatBTNHeader dropdown'>
                 <div class="dropdown-content">
                 <Link className={['linkClassHeaderStyle' ,item2? 'activeHeaderLink':''].join(" ")} to={"/moshavere"}><div>کارشناسی ملک با ضمانت باهم</div></Link>
                <Link className={['linkClassHeaderStyle' ,item3? 'activeHeaderLink':''].join(" ")} to={"/sazandegan"}><div>فروش سفارشی ملک</div></Link>
                <Link className={['linkClassHeaderStyle' ,item4? 'activeHeaderLink':''].join(" ")} to={"/Blog"}><div>مطالب آموزشی</div></Link>
                <Link className={['linkClassHeaderStyle' ,item5? 'activeHeaderLink':''].join(" ")} to={"/About"}><div>درباره ما</div></Link>
           
</div>
<span>صفحات سایت</span><BiChevronDown style={{fontSize:'12px'}}/></div>
            </div>} 
        </nav>
        <div className='headerUser'>
          <div className='loginSignBtn'><span><BsPerson style={{marginBottom:'0px',fontSize:'2px'}}/>ورود / ثبت نام</span></div>
          <div className='signUpBtn'><span>ثبت آگهی رایگان</span></div>
        </div>
    </div>
  )
}

export default Header