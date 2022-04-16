import React from 'react';
import './Header.css';
import pic from '../../../Logonav.jpg';
import { BsPerson } from 'react-icons/bs';
import {Link, useRouteMatch} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
function Header(props) {
  let item1 = useRouteMatch({
    path: 'http://5.182.44.142/home',
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
            <div className='navbarList'>
                <a className={['linkClassHeaderStyle' ,item1? 'activeHeaderLink':''].join(" ")} href="http://5.182.44.142/home" to={"http://5.182.44.142/home"}><div>صفحه اصلی</div></a>
                <a className={['linkClassHeaderStyle' ,item2? 'activeHeaderLink':''].join(" ")} href="http://5.182.44.142/moshavere"  to={"http://5.182.44.142/moshavere"}><div>کارشناسی ملک با ضمانت باهم</div></a>
                <a className={['linkClassHeaderStyle' ,item3? 'activeHeaderLink':''].join(" ")} href="http://5.182.44.142/sazandegan" to={"http://5.182.44.142/sazandegan"}><div>فروش سفارشی ملک</div></a>
                <a className={['linkClassHeaderStyle' ,item4? 'activeHeaderLink':''].join(" ")} href="http://5.182.44.142/Blog" to={"http://5.182.44.142/post"}><div>مطالب آموزشی</div></a>
                <a className={['linkClassHeaderStyle' ,item5? 'activeHeaderLink':''].join(" ")} href="http://5.182.44.142/about" to={"http://5.182.44.142/about"}><div>درباره ما</div></a>
            </div>
        </nav>
        <div className='headerUser'>
          <div className='loginSignBtn'><span><BsPerson style={{marginBottom:'0px',fontSize:'2px'}}/>ورود / ثبت نام</span></div>
          <div className='signUpBtn'><span>ثبت آگهی رایگان</span></div>
        </div>
    </div>
  )
}

export default Header