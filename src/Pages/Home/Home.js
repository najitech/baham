import React, { useState,useEffect,useRef } from 'react';
import './Home.css';
import banner from '../../Images/banner2.png';
import {BiSearchAlt} from 'react-icons/bi';
import whatsBaham from '../../Images/whatsbaham.jpg';
import p1 from "../../Images/CategoriesHome/p1.jpg"
import p2 from "../../Images/CategoriesHome/p2.jpg"
import p3 from "../../Images/CategoriesHome/p3.jpg"
import p4 from "../../Images/CategoriesHome/p4.jpg"
import SliderItem from './SliderItem/SliderItem';
import dots from '../../Images/dots.svg';
import s1 from '../../Images/shapesHome/1.svg';
import s2 from '../../Images/shapesHome/2.svg';
import s3 from '../../Images/shapesHome/3v6.svg';
import s4 from '../../Images/shapesHome/4.svg';
import s5 from '../../Images/shapesHome/5.svg';
import s6 from '../../Images/shapesHome/3v6.svg';
import Road from '../../Images/ElementAsli.svg';
import backdast from '../../Images/bahamchistback.svg'
import dast2 from '../../Images/dast2bahamchist.svg'
import dast1 from '../../Images/dastbahamchist.svg'
import './HomeRes.css';
import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-elastic-carousel'
import Square from './Square';
import useDocumentTitle from '../../Components/TitleSetter/useDocumentTitle';
function Home(props) {
  useDocumentTitle('باهم')
  const [search,setSearch] = useState(0);
  const [category,setCategory] = useState(0);
  const [road , setRoad] = useState(0);
  
  const res1000 = useMediaQuery({query :'(max-width : 1000px)'});
  const res800 = useMediaQuery({query :'(max-width : 800px)'});
  const res650 = useMediaQuery({query :'(max-width : 650px)'});
  const res600 = useMediaQuery({query :'(max-width : 600px)'});
  const res500 = useMediaQuery({query :'(max-width : 500px)'});
  const res400 = useMediaQuery({query :'(max-width : 400px)'});
  const res360 = useMediaQuery({query :'(max-width : 360px)'});

  useEffect(() => {
      props.header.current.scrollIntoView({ behavior: "smooth"});
    }, []);
  return (
    <div className='home' >
      <div className='bannerHome' >
        <img alt='' src={banner}/>
        <div className='headingBanner'>
          <h1>باهم</h1>
          <h2><span>ب</span>رنامه <span>ا</span>نتخاب <span>ه</span>وشمندانه <span>م</span>سکن</h2>
          </div>
      </div>
      <div className='searchBoxHome'>
        <div className='dotsSearchBoxHome'><img alt='' src={dots}/></div>
        <div className='backgroundColorBoxHome'></div>
        <div className='rowContainerSearchBoxHome'> 
          <div style={{borderBottomLeftRadius:!search?res1000?'8px':'20px':'0px'}} className='curveDivsSearchBox'></div>
          <div style={{borderBottomLeftRadius: search?res1000?'8px':'20px':''}} className={['divSearchHomeBox' ,!search?'activeDivSearchHome':''].join(" ")}><div className={['customButtonPrimery',!search?'customButton':''].join(" ")} onClick={()=>setSearch(0)}>خرید و فروش</div></div>
          <div style={{borderBottomRightRadius: !search?res1000?'8px':'20px':''}} className={['divSearchHomeBox',search?'activeDivSearchHome':''].join(" ")}><div className={['customButtonPrimery',search?'customButton':''].join(" ")} onClick={()=>setSearch(1)}>رهن و اجاره</div></div>
          <div style={{borderBottomRightRadius:search?res1000?'8px':'20px':'0px'}} className='curveDivsSearchBox'></div>
        </div>
        <div className='searchBoxContainer'>
          <div className='searchInputHome'>
            <input placeholder='جستجوی شهر ، محله یا منطقه ...'/>
            <div className='searchButtonHome '><span>جستجو</span><BiSearchAlt style={{marginBottom:res600 ? '0px':'-2px',marginRight:'4px',marginLeft:res400 ? '-2px':res600 ? '-5px':res800 ? '-7px':'-15px',fontSize:res400 ? '12px': res600 ? '14px':res800 ? '16px':res1000 ? '20px':'26px'}}/></div>
          </div>
        </div>
      </div>
      <div className='whatsBaham'>
        <div className='whatsBahamDiv'>
          <div className='floatingSquareHomeWhatsBaham'></div>
          <h2>باهم چیست؟</h2>
          <div><p>باهم یک گواهینامه کارشناسی تخصصی ملک است که اطلاعات کاملی به شما از ویژگی های آن ملک و موقعیت  و لوکیشن آن قبل از فرایند خرید یا فروش بصورت سیستماتیک، مستند و دقیق میدهد</p></div>
          <div className='whatsBahamButtonHome'><span>بیشتر بدانید</span></div>
        </div>
        <div className='whatsBahamBanner'>
          <div className='whatsBahamBannerAnimate'>
            <img alt='' className='whatsBahamBannerAnimate1'  src={dast1}/>
            <img alt='' className='whatsBahamBannerAnimate2'  src={backdast}/>
            <img alt='' className='whatsBahamBannerAnimate3' src={dast2}/>
          </div>

          {/*<img alt=''  src={whatsBaham}/>*/}
        </div>
      </div>


      
      <div onClick={()=>{if(road !==0){setRoad(0)}}} className='roadHome'>
        <img alt='' className={road?"roadActive":''} src={Road}/>
        <div className={['r1Road',road?'roadActive':''].join(" ")}>
          <div onClick={()=>setRoad(1)} className='R1R'><h2>1</h2><p>ایجاد یک استاندارد بر اساس برآیند نظرات صد ها نفر...</p></div>
          <div onClick={()=>setRoad(2)} className='R2R'><h2>2</h2><p>داده های خام مستند از مراکز دولتی: داده های خام...</p></div>
          <div onClick={()=>setRoad(3)} className='R3R'><h2>3</h2><p>کاملا سیستماتیک: در تمام فرآیند کارشناسی ملک...</p></div>
        </div>
        <div className={['r2Road',road?'roadActive':''].join(" ")}>
          <div onClick={()=>setRoad(4)} className='R4R'><h2>4</h2><p>ایجاد یک استاندارد بر اساس برآیند نظرات صد ها نفر...</p></div>
          <div onClick={()=>setRoad(5)} className='R5R'><h2>5</h2><p>داده های خام مستند از مراکز دولتی: داده های خام...</p></div>
          <div onClick={()=>setRoad(6)} className='R6R'><h2>6</h2><p>کاملا سیستماتیک: در تمام فرآیند کارشناسی ملک...</p></div>
        </div>
        <div className='senterDivcircle'>
          <h1>مزایای &nbsp;باهم</h1>
        </div>
        {road?<div className='activeContainer'>
          <div className='activeShape'>
            <img  alt='' src={s1}/>
            <div className='shapeInfText'>
              <p>داده های خام مستند از مراکز دولتی: داده های خام مستند از شهرداری تهران، وزارت راه و شهرسازی، وزارت ارتباطات و فناوری اطلاعات، مرکز آمار ایران که جهت استفاده عموم منتشر میشوند تهیه شده است و باهم با انجام داده کاوی و استفاده از هوش مصنوعی بصورت سیستماتیک محاسبات را انجام داده است</p>
              <h2>{road}</h2>
            </div>
          </div>
        </div>:''}
      </div>  
      <div className='categoriesCardHome'>
          <div className='categoryListHome'>
              <div onMouseEnter={()=>setCategory(0)} className={['categoryItemHome',category ===0?'activeCategoryItemHome':''].join(" ")}>
                <div className={['lineBesidHomePageItem',category ===0?'activeLineHomePage':''].join(" ")}></div>
                <h3>میخواهید ملک خود را بفروشید؟</h3>
                <p>با خدمت فروش سفارشی ملک باهم بصورت رایگان و مطمئن و آگاهانه این کار را انجام دهید</p>
              </div>
              <div onMouseEnter={()=>setCategory(1)} className={['categoryItemHome',category ===1?'activeCategoryItemHome':''].join(" ")}>
                <div className={['lineBesidHomePageItem',category ===1?'activeLineHomePage':''].join(" ")}></div>
                <h3>میخواهید ملک بخرید؟</h3>
                <p>کارشناسی ملک با ضمانت باهم را انتخاب کنید</p>
              </div>
              <div onMouseEnter={()=>setCategory(2)} className={['categoryItemHome',category ===2?'activeCategoryItemHome':''].join(" ")}>
                <div className={['lineBesidHomePageItem',category ===2?'activeLineHomePage':''].join(" ")}></div>
                <h3>سازنده هستید؟</h3>
                <p>از خدمات باهم ویژه سازندگان استفاده کنید</p>
              </div>
              <div onMouseEnter={()=>setCategory(3)} className={['categoryItemHome',category ===3?'activeCategoryItemHome':''].join(" ")}>
                <div className={['lineBesidHomePageItem',category ===3?'activeLineHomePage':''].join(" ")}></div>
                <h3>مشاور املاک هستید؟؟</h3>
                <p>خدمات ویژه مشاورین املاک را ببینید</p>
              </div>
          </div>
        
          <div className='categoryIconsHome'>
            <div>
              <div onMouseEnter={()=>setCategory(0)} className={['categoryIconBoxHome',category===0?'activeCategoryIconBoxHome':''].join(" ")}>
                <img alt='' src={p1}/>
              </div>
              <div onMouseEnter={()=>setCategory(1)} className={['categoryIconBoxHome',category===1?'activeCategoryIconBoxHome':''].join(" ")}>
                <img alt=''src={p2}/>
              </div>
              <div onMouseEnter={()=>setCategory(2)} className={['categoryIconBoxHome',category===2?'activeCategoryIconBoxHome':''].join(" ")}>
                <img alt=''src={p3}/>
              </div>
              <div onMouseEnter={()=>setCategory(3)} className={['categoryIconBoxHome',category===3?'activeCategoryIconBoxHome':''].join(" ")}>
                <img alt=''src={p4}/>
              </div>
            </div>
          </div>
      </div>
      <div className='sliderHomepage'>
          <h4>مطالب آموزشی</h4>
          <div className='sliderItemsHomePage'>
            <Carousel className='sliderCompo'
            
            showArrows={false}
            isRTL={true}
            itemsToShow={res500 ? 3: res600 ? 4: res800 ? 3: res1000?  2:3}
            renderPagination={({ pages, activePage, onClick }) => {
              return (
                <div className='paginationRowSlider'>
                  {
                  pages.map(page => {
                    const isActivePage = activePage === page
                    
                    return (
                      <Square
                        key={page}
                        page={page}
                        click={onClick}
                        active={isActivePage}
                      />
                    )
                  })}
              </div>
            )
          }}>
            <div className='itemSliderComp'>
              <SliderItem image={"https://blog.ipleaders.in/wp-content/uploads/2020/07/Real-Estate-Professionals.jpg"} username={"Admin"} date={"22 بهمن 1400 "} time={"18:30"} title={"مشاور فروشنده"} text="مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی  "/>
            </div>
            <div className='itemSliderComp'>
             <SliderItem image={"https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg"} username={"Admin"} date={"22 بهمن 1400 "} time={"18:30"} title={"مشاور فروشنده"} text="مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی  "/>
             </div>
             <div className='itemSliderComp'>
             <SliderItem image={"https://www.anthurium.in/wp-content/uploads/2019/06/First-Time-Commercial-Property-Buyers.jpg"} username={"Admin"} date={"22 بهمن 1400 "} time={"18:30"} title={"مشاور فروشنده"} text="مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی  "/>  
             </div>
             <div className='itemSliderComp'>
              <SliderItem image={"https://blog.ipleaders.in/wp-content/uploads/2020/07/Real-Estate-Professionals.jpg"} username={"Admin"} date={"22 بهمن 1400 "} time={"18:30"} title={"مشاور فروشنده"} text="مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی  "/>
            </div>
            <div className='itemSliderComp'>
             <SliderItem image={"https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg"} username={"Admin"} date={"22 بهمن 1400 "} time={"18:30"} title={"مشاور فروشنده"} text="مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی  "/>
             </div>
             <div className='itemSliderComp'>
             <SliderItem image={"https://www.anthurium.in/wp-content/uploads/2019/06/First-Time-Commercial-Property-Buyers.jpg"} username={"Admin"} date={"22 بهمن 1400 "} time={"18:30"} title={"مشاور فروشنده"} text="مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی  "/>  
             </div>
             <div className='itemSliderComp'>
              <SliderItem image={"https://blog.ipleaders.in/wp-content/uploads/2020/07/Real-Estate-Professionals.jpg"} username={"Admin"} date={"22 بهمن 1400 "} time={"18:30"} title={"مشاور فروشنده"} text="مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی  "/>
            </div>
            <div className='itemSliderComp'>
             <SliderItem image={"https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg"} username={"Admin"} date={"22 بهمن 1400 "} time={"18:30"} title={"مشاور فروشنده"} text="مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی  "/>
             </div>
             <div className='itemSliderComp'>
             <SliderItem image={"https://www.anthurium.in/wp-content/uploads/2019/06/First-Time-Commercial-Property-Buyers.jpg"} username={"Admin"} date={"22 بهمن 1400 "} time={"18:30"} title={"مشاور فروشنده"} text="مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی مشاور فروش فردی است که زمانی که یک فرد تصمیم به اجاره یا فروش لک خود دارد، برای راهنمایی  "/>  
             </div>
            </Carousel>
          </div>
          <div className='buttonRowSlider'>
              <div className='whatsBahamButtonHomeSlider'>مشاهده مطالب آموزشی</div>
          </div>
      </div>
    </div>
  )
}

export default Home