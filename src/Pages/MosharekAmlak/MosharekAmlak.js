import React from 'react'
import { useMediaQuery } from 'react-responsive';
import image from '../../Images/mosharek.svg'
import SliderItem from '../Home/SliderItem/SliderItem'
import Carousel from 'react-elastic-carousel'
import Square from '../Home/Square';
import './MosharekAmlak.css'
import useDocumentTitle from '../../Components/TitleSetter/useDocumentTitle';
function MosharekAmlak(props) {
  
  useDocumentTitle('باهم | مشارکین املاک')
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
                <div className='lineAboveTextPages'><h2><span>باهم</span> چه مزایایی برای مشارکین املاک دارد؟</h2><div className='lineDotted mosharekLine'></div><div className='floatingSquareHomeWhatsBahamAbout mosharekSquare'></div></div>
                <div className='marginTextMoshaver'>
                    <p>
                    باهم بنگاه املاک نیست اما قصد دارد با بنگاه های املاک همکاری کند. مشاورین املاک می توانند جهت بازدید بهتر ملک خود و مدیریت مشاورین از خدمات رایگان انتشار آگهی در سایت و اپلیکیشن باهم بهره مند شوند. ضمن اینکه با معرفی مشتریان شان به باهم جهت استفاده از خدمات کارشناسی ملک با ضمانت 
باهم از طریق پنل خود از درصدی از مبلغ این سفارش تحت عنوان پورسانت (هم به مشاوره املاک و هم به بنگاه املاک پرداخت میشود ) بهره مند می شوند. در ضمن در صورتی که بنگاه املاک مورد نظر پروانه کسب داشته باشد و در منطقه بعنوان املاک خوشنام شناخته شود ، تحت یک قرارداد مشتریان باهم به آن ها جهت خرید یا فروش ملک معرفی می شوند و 
برند باهم هیچگونه حق و سهمی از میزان کمیسیون پرداخت شده به بنگاه های املاک را نخواهد داشت. برای این امر می توانید وارد پنل کاربری خود بعنوان مشاور املاک شوید. 
                    </p>
                    <div className='imageAboutDiv'>
                        <img alt='' src={image}/>
                    </div>
                </div>
        </div>
        <div><div className='sliderHomepage'>
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

export default MosharekAmlak