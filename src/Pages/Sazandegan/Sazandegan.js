import React from 'react'
import SliderItem from '../Home/SliderItem/SliderItem';
import './Sazandegan.css';
import image from '../../Images/sazandegan.svg'
import Square from '../Home/Square'
import Carousel from 'react-elastic-carousel'
import { useMediaQuery } from 'react-responsive';
import useDocumentTitle from '../../Components/TitleSetter/useDocumentTitle';
export default function Sazandegan(props) {
  
  useDocumentTitle('باهم | سازندگان')
  const res1000 = useMediaQuery({query :'(max-width : 1000px)'});
  const res800 = useMediaQuery({query :'(max-width : 800px)'});
  const res650 = useMediaQuery({query :'(max-width : 650px)'});
  const res600 = useMediaQuery({query :'(max-width : 600px)'});
  const res500 = useMediaQuery({query :'(max-width : 500px)'});
  const res400 = useMediaQuery({query :'(max-width : 400px)'});
  const res360 = useMediaQuery({query :'(max-width : 360px)'});
  return (
    <div className='mosharek'>
        <div className='aboutDives'>
                <div className='lineAboveTextPages sazH2'><h2 className='sazH2'><span>باهم</span> چه مزایایی برای سازندگان دارد؟</h2><div className='lineDotted sazandeganLine '></div><div className='floatingSquareHomeWhatsBahamAbout mosharekSquare'></div></div>
                <div className='sazandeganMatn'>
                    <p>
                     نگاه باهم به سازندگان املاک به عنوان همکاران دائمی و فعال در حوزه املاک است. سازندگان می توانند برای دیده شدن و فروش بهتر ملک خود ، و داشتن وجهه و سند موجه از مشخصات ملک شان از تخفیف ویژه و 50 درصدی خدمات کارشناسی باهم در پروژه های ساخته شده ملک خود استفاده کنند. کافیست از بخش کارشناسی ملک با ضمانت باهم درخواست خود را ثبت کرده و
                     تیک "سازنده هستم و قصد کارشناسی یک پروژه ساختمانی کامل را دارم
                     "
                     را بزنید . بعد تعداد واحد ساختمانی که قرار است کارشناسی ملک با ضمانت باهم انجام شود را وارد کنید و از تخفیف 50 درصدی خدمات کارشناسی ملک با ضمانت باهم استفاده کنید.
                     
                    </p>
                    <div className='imageAboutDiv2'>
                        <img alt='' src={image}/>
                    </div>
                </div>
        </div>
        <div>
        <div className='sliderHomepage'>
          <h4>مطالب آموزشی</h4>
          <div className='sliderItemsHomePage'>
            <Carousel className='sliderCompo'
            
            showArrows={false}
            isRTL={true}
            itemsToShow={res500 ? 3: res600 ? 4: res800 ? 3: res1000?  2:3}
            renderPagination={({ pages, activePage, onClick }) => {
              
              console.log(activePage);
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
    </div>
  )
}
