import React from 'react'
import './Karshenasi.css'
import {BsCheckLg,BsChevronLeft,BsChevronRight} from 'react-icons/bs'
import { useState } from 'react'
import moarefi from '../../Images/moarefi.jpg';
import Nazar from '../../Components/Nazar/Nazar';
import Question from '../../Components/Question/Question';
import banner from '../../Images/bannerKarshenasi.jpg'
import p1 from '../../Images/p1KarNem.jpg'
import p2 from '../../Images/p2KarNem.jpg'
import Carousel  , {consts} from 'react-elastic-carousel'
import MelkCard from '../../Components/MelkCard/MelkCard';
import ColorRadioButtons from '../../Components/FormCustom/Radio';
import ColorCheckboxes from '../../Components/FormCustom/CheckBox';
import Budges from '../../Components/FormCustom/Budges';
import SimpleAccordion from '../../Components/FormCustom/Acardion';
import useDocumentTitle from '../../Components/TitleSetter/useDocumentTitle';
import {MdChevronRight,MdKeyboardArrowLeft} from 'react-icons/md';
import SliderItem from '../Home/SliderItem/SliderItem';
import Square from '../Home/Square';
import { useMediaQuery } from 'react-responsive';
function Karshenasi(props) {
  useDocumentTitle('باهم | کارشناسی ملک')
  
  const [checkSazande ,setCheckSazande] = useState(0);
  const [stepper,setStepper] = useState(1)
  const res1000 = useMediaQuery({query :'(max-width : 1000px)'});
  const res800 = useMediaQuery({query :'(max-width : 800px)'});
  const res650 = useMediaQuery({query :'(max-width : 650px)'});
  const res600 = useMediaQuery({query :'(max-width : 600px)'});
  const res500 = useMediaQuery({query :'(max-width : 500px)'});
  const res400 = useMediaQuery({query :'(max-width : 400px)'});
  const res360 = useMediaQuery({query :'(max-width : 360px)'});
  const myArrow=({ type, onClick, isEdge })=> {
    const Pointer = type !== consts.PREV ? BsChevronLeft :BsChevronRight
    return (
      <div className='arrowsStyleAgahiCardsWeb resArrowPints' onClick={onClick} disabled={isEdge}>
        <Pointer/>
      </div>
    )
}
  return (
    <div className='karshenasi'>
        <div className='bannerKar'>
          <img alt="" src={banner}/>
        </div>
        <div className='requestFormKar'>
            <div className='reqFormHeaderKar'>
                <h2>فرم درخواست کارشناسی ملک با ضمانت <span>باهم</span></h2>
            </div>
            {res600 ?<div>
              <div className='labelReqFormKar'>نام و نام خانوادگی:</div>
              <div className='inputReqFormKar'><input/></div>
              <div className='labelReqFormKar'>شماره موبایل:</div>
              <div className='inputReqFormKar'><input/></div>
              <div className='labelReqFormKar'>آدرس دقیق ملکی که قرار است کارشناسی شود</div>
              <div className='inputReqFormKar TextAreaReqForm'><textarea/></div> 
              <div className='smallTextReqFormerKarTextArea'><span>باهم فعلا در منطقه 2 و 5 شهر تهران کارشناسی ملک را انجام می دهد.</span></div>
              <div className='checkBoxReqFormKar'>   
                  <div className='CheckBoxComponentReqForm' onClick={()=>setCheckSazande(!checkSazande)}>{checkSazande?<BsCheckLg style={{color:'var(--color)',fontSize:'13px'}}/>:''}</div>
                  <div className='labelReqFormKarCheckBox'>من سازنده هستم و درخواست کارشناسی بیش از یک ملک را دارم</div>  
                </div>
                <div className='inputReqFormKar sazandePercentOff'>سازندگان از تخفیف کارشناسی ویژه 50 درصدی بهره مند می شوند</div>
                <div className='dateandcodeReqFormKar'>
                  <div>
                    <div className='labelReqFormKar'>زمان بازدید:</div>
                    <div className='inputReqFormKar'><input/></div>
                  </div>
                  <div className='res780pointSpecialKar' style={{marginRight:'25px'}}>
                    <div className='labelReqFormKar' style={{color:'var(--color)'}}>کد تخفیف</div>
                    <div className='inputReqFormKar'><input style={{color:'var(--color)'}}/></div>
                  </div>
                </div>
            </div>:''}
            {!res600 ? <div className='formContainerReqFKar'>
              <div className='formRReqFKar'>
                <div className='labelReqFormKar'>نام و نام خانوادگی:</div>
                <div className='inputReqFormKar'><input/></div>
                <div className='labelReqFormKar'>آدرس دقیق ملکی که قرار است کارشناسی شود</div>
                <div className='inputReqFormKar TextAreaReqForm'><textarea/></div>
                <div className='smallTextReqFormerKarTextArea'><span>باهم فعلا در منطقه 2 و 5 شهر تهران کارشناسی ملک را انجام می دهد.</span></div>
              </div>
              <div className='formLReqFKar'>
                <div className='labelReqFormKar'>شماره موبایل:</div>
                <div className='inputReqFormKar'><input/></div>
                <div className='checkBoxReqFormKar'>   
                  <div className='CheckBoxComponentReqForm' onClick={()=>setCheckSazande(!checkSazande)}>{checkSazande?<BsCheckLg style={{color:'var(--color)',fontSize:'13px'}}/>:''}</div>
                  <div className='labelReqFormKarCheckBox'>من سازنده هستم و درخواست کارشناسی بیش از یک ملک را دارم</div>  
                </div>
                <div className='inputReqFormKar sazandePercentOff'>سازندگان از تخفیف کارشناسی ویژه 50 درصدی بهره مند می شوند</div>
                <div className='dateandcodeReqFormKar'>
                  <div>
                    <div className='labelReqFormKar'>زمان بازدید:</div>
                    <div className='inputReqFormKar'><input/></div>
                  </div>
                  <div className='res780pointSpecialKar' style={{marginRight:'25px'}}>
                    <div className='labelReqFormKar' style={{color:'var(--color)'}}>کد تخفیف</div>
                    <div className='inputReqFormKar'><input style={{color:'var(--color)'}}/></div>
                  </div>
                </div>
              </div>
            </div>:""}
            <div className='confirmAndPriceKarReqForm'>
              <div>
                <div className='CheckBoxComponentReqForm' onClick={()=>setCheckSazande(!checkSazande)}>{checkSazande?<BsCheckLg style={{color:'var(--color)',fontSize:'13px'}}/>:''}</div>
                <span>قوانین و مقررات</span>  
                {!res600?<div className='lineThroughReqConfirmKar'></div>:""}
                {!res600? <span className='gheimatkolSpanKar'>هزینه کل:</span>:''}
              </div>
              <div className='overAllPriceKar'>
                {res600? <span className='gheimatkolSpanKar'>هزینه کل:</span>:''}
                <h3>825/000/000 <span>تومان</span></h3>
              </div>
            </div>
            <div className='recordAndPayKar'>
              <div className='recordAndPayBtnKar'>ثبت و پرداخت</div>
            </div>
            
            <div className='informationBoxReqFormKar'>
              <div className='containerInfBoxReqFormKar'>
                <ul>
                  <li>فرایند بعد از ثبت درخواست کارشناسی ملک</li>
                  <li>قوانین و مقررات</li>
                </ul>
                <ul className='downListReqFormKar'>
                  <li>شما می توانید به صورت تلفنی درخواست کارشناسی ملک خود را ثبت کنید شماره تماس : 02144262200</li>
                  <li>ساعت کاری باهم:<br/>هر روز بجز روزهای تعطیل رسمی ساعت 9:30 تا 20</li>
                </ul>
              </div>
            </div>
        </div>
        <div className='stepperKarRow'>
          <div className='stepperContainerKar'>
            <div className='reqFormHeaderKar'>
              <h2>فرایند کارشناسی ملک با ضمانت <span>باهم</span></h2>
            </div>
             <div className='gridRowStepper'>
              <div className={['stepperItemKar stepperItemKar1',stepper>=1 ? "stepperItemActive":''].join(" ")}>
                 <div className='stepperItemKarAbsolute'>
                    <div className={stepper >=1?'stepperItemKarAbsolutetraingleActive':"stepperItemKarAbsolutetraingle"}>                     
                      
                    </div>
                </div>
                <div className={['stepperHeaderKar',stepper>=1 ? "stepperHeaderKarActive":''].join(" ")}>
                  <div className={['lineDashedKarHeaderStepper',stepper>=1 ? "lineDashedKarHeaderStepperActive":''].join(" ")}></div>
                <h3>ثبت سفارش کارشناسی ملک</h3>
                </div>
                <div className={['stepperParKar',stepper>=1 ? "stepperParKarActive":''].join(" ")}>
                  <p>درخواست کارشناسی را در همین صفحه و یا به صورت تلفنی ثبت کنید</p>
                </div>
              </div>
              <div className={['stepperItemKar stepperItemKar2',stepper>=2 ? "stepperItemActive":''].join(" ")}>
                <div className='stepperItemKarAbsolute'>
                    <div className='stepperItemKarAbsolutetraingle'>
                    <div class="triangle1"></div>
                    </div>
                </div> 
                <div className={['stepperHeaderKar',stepper>=2 ? "stepperHeaderKarActive":''].join(" ")}>
                  <div className={['lineDashedKarHeaderStepper',stepper>=2 ? "lineDashedKarHeaderStepperActive":''].join(" ")}></div>
                <h3>ثبت سفارش کارشناسی ملک</h3>
                </div>
                <div className={['stepperParKar',stepper>=2? "stepperParKarActive":''].join(" ")}>
                  <p>درخواست کارشناسی را در همین صفحه و یا به صورت تلفنی ثبت کنید</p>
                </div>
              </div>
              <div className={['stepperItemKar stepperItemKar3',stepper>=2 ? "stepperItemActive":''].join(" ")}>
                <div className='stepperItemKarAbsolute'>
                    <div className='stepperItemKarAbsolutetraingle'>
                    <div class="triangle1"></div>
                    </div>
                </div>
                <div className={['stepperHeaderKar',stepper>=2 ? "stepperHeaderKarActive":''].join(" ")}>
                  <div className={['lineDashedKarHeaderStepper',stepper>=2 ? "lineDashedKarHeaderStepperActive":''].join(" ")}></div>
                <h3>ثبت سفارش کارشناسی ملک</h3>
                </div>
                <div className={['stepperParKar',stepper>=2? "stepperParKarActive":''].join(" ")}>
                  <p>درخواست کارشناسی را در همین صفحه و یا به صورت تلفنی ثبت کنید</p>
                </div>
              </div>
              <div className={['stepperItemKar stepperItemKar4',stepper>=2 ? "stepperItemActive":''].join(" ")}>
                <div className='stepperItemKarAbsolute'>
                    <div className='stepperItemKarAbsolutetraingle'>
                    <div class="triangle1"></div>
                    </div>
                </div>
                <div className={['stepperHeaderKar',stepper>=2 ? "stepperHeaderKarActive":''].join(" ")}>
                  <div className={['lineDashedKarHeaderStepper',stepper>=2 ? "lineDashedKarHeaderStepperActive":''].join(" ")}></div>
                <h3>ثبت سفارش کارشناسی ملک</h3>
                </div>
                <div className={['stepperParKar',stepper>=2? "stepperParKarActive":''].join(" ")}>
                  <p>درخواست کارشناسی را در همین صفحه و یا به صورت تلفنی ثبت کنید</p>
                </div>
              </div>
              <div className={['stepperItemKar stepperItemKar5',stepper>=2 ? "stepperItemActive":''].join(" ")}>
                <div className={['stepperHeaderKar',stepper>=2 ? "stepperHeaderKarActive":''].join(" ")}>
                  <div className={['lineDashedKarHeaderStepper',stepper>=2 ? "lineDashedKarHeaderStepperActive":''].join(" ")}></div>
                <h3>ثبت سفارش کارشناسی ملک</h3>
                </div>
                <div className={['stepperParKar',stepper>=2? "stepperParKarActive":''].join(" ")}>
                  <p>درخواست کارشناسی را در همین صفحه و یا به صورت تلفنی ثبت کنید</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='moarefiBoxDivKar'>
            <div className='moarefiHeaderKar'>
              <div className='moarefiImageKar'>
                <img alt='' src={moarefi}/>
              </div>
              <div className='moarefiSquareKar'></div>
              <h2>معرفی کارشناسی ملک با ضمانت <span>باهم</span></h2>
              </div>  
            <div className='moarefiTextKar'>
              <p>عمدتا ما <span>بعد از خرید یک ملک</span> با ای سوال مواجه میشویم که:آیا همه مشخصات و ویژگی های مهم در خرید ملک را در نظر گرفتم؟ آیا بین دو یا چند ملکی که برای خرید شک دارم این ملک بهترین گزینه است؟ آیا این ملک با این شرایط و ویژگی ها بهترین قیمت را دارد؟ تصور کنید که <span>می خواهید قبل از اینکه ملکی را بخرید</span> اطلاعاتی مستند، مستدل و کاربردی از آن ملک داشته ، آیا امکان پذیر است؟ اگر قرار باشد چکیده نظرات ده ها کارشناس ملکی در محله و منطقه را در قالب یک استاندارد بدون دخالت عامل انسانی و کاملا بصورت سیستماتیک و هم چنینی کارشناسی تخصصی و حضوری این استاندارد توسط کارشناسان باهم را داشته باشید چطور ؟ آیا چنین چیزی موجود است؟
              <br/><br/>
                اگر بخواهیم از وضعیت موقعیت یا لوکیشن همسایگی کوچه ملک مورد نظر مثل وضعیت آنتن دهی موبایل و اینترنت کوچه، میزان شلوغی کوچه مورد نظر به نسبت محله، مشکلات شهروندی مطرح شده در کوچه،متوسط نرخ رشد قیمت در بازه 5 ساله، فاصله ملک خود تا مراکز مهم نظیر مدرسه ، مترو، بزرگراه و ...، وضعیت قرارگیری در مسیر قنات در کوچه ملک مورد نظر، وضعیت احتمال وقوع زمین لغزش، وضعیت تیپ شهرسازی و جمعیت شناسی در همسایگی ملک مورد نظر با استفاده از داده های خام و آزاد منتشر شده توسط مراکز و سازمان های دولتی آگاه شویم چطور ؟ آیا ممکن است؟ آیا این داده ها توسط شرکت یا سازمانی تضمین می شود؟ <span>باهم تمام این اطلاعات و شماوره ملکی را به صورت مستند به خریداران ملک </span>
                 ارایه می دهد. به همین منظور می توانید از خدمت کارشناسی ملک با ضمانت باهم استفاده کنید.
              </p>  
            </div>      
        </div>

        <div className='nemoneKar'>
          <div className='nemoneKarHeader'>
            <h2>برای مشاهده نمونه نتیجه کارشناسی ملک با ضمانت <span>باهم</span> کلیک کنید</h2>
          </div>
          <div className='cardsBackContainerKarNemone'>
            <div className='frontContainerKarNemone'>
              <div><img alt='' src={p2}/></div>
              <div><img alt='' src={p1}/></div>
            </div>
          </div>
        </div>
        <div style={{margin:'40px auto',marginTop:'70px ',padding:res500?'20px 0px':'30px 0px',width:res400 ? '103%':res500?'98%':'90%',backgroundColor:''}}>
            <div className='reqFormHeaderKar'>
              <h2>برخی از نظرات مشتریان <span>باهم</span></h2>
            </div>
            <div className='sliderRowNazarat'>
              <Carousel className='sliderCompo'
                  pagination={true}
                  showArrows={res400? false :true}
                  isRTL={true}
                  renderArrow={myArrow}
                  renderPagination={({ pages, activePage, onClick }) => {
                    return (
                      <div className='paginationRowSlider2'>
                        {
                        pages.map(page => {
                          const isActivePage = activePage === page
                          return (
                            <Square
                              two
                              key={page}
                              page={page}
                              click={onClick}
                              active={isActivePage}
                            />
                          )
                        })}
                    </div>
                  )
                }}
                  itemsToShow={1}>
                    <div className='nazarcontainerSlider'>
                      <Nazar name="آقای کاظم میقاتی" rule={"خریدار ملک"} image={" https://images.adsttc.com/media/images/55ef/aac4/e58e/ceb6/6500/00c2/large_jpg/004.jpg?1441770170"} text="ممنون از باهم بدلیل خدمات خاص و بدرد بخوری که ارایه میدن و باعث شدن من با چشم باز خرید ملکم رو انجام بدم"/>       
                    </div>
                    <div className='nazarcontainerSlider'>
                      <Nazar name="آقای کاظم میقاتی" rule={"خریدار ملک"} image={" https://images.adsttc.com/media/images/55ef/aac4/e58e/ceb6/6500/00c2/large_jpg/004.jpg?1441770170"} text="ممنون از باهم بدلیل خدمات خاص و بدرد بخوری که ارایه میدن و باعث شدن من با چشم باز خرید ملکم رو انجام بدم"/>       
                    </div>
                    <div className='nazarcontainerSlider'>
                      <Nazar name="آقای کاظم میقاتی" rule={"خریدار ملک"} image={" https://images.adsttc.com/media/images/55ef/aac4/e58e/ceb6/6500/00c2/large_jpg/004.jpg?1441770170"} text="ممنون از باهم بدلیل خدمات خاص و بدرد بخوری که ارایه میدن و باعث شدن من با چشم باز خرید ملکم رو انجام بدم"/>       
                    </div>
                    <div className='nazarcontainerSlider'>
                      <Nazar name="آقای کاظم میقاتی" rule={"خریدار ملک"} image={" https://images.adsttc.com/media/images/55ef/aac4/e58e/ceb6/6500/00c2/large_jpg/004.jpg?1441770170"} text="ممنون از باهم بدلیل خدمات خاص و بدرد بخوری که ارایه میدن و باعث شدن من با چشم باز خرید ملکم رو انجام بدم"/>       
                    </div>
                    <div className='nazarcontainerSlider'>
                      <Nazar name="آقای کاظم میقاتی" rule={"خریدار ملک"} image={" https://images.adsttc.com/media/images/55ef/aac4/e58e/ceb6/6500/00c2/large_jpg/004.jpg?1441770170"} text="ممنون از باهم بدلیل خدمات خاص و بدرد بخوری که ارایه میدن و باعث شدن من با چشم باز خرید ملکم رو انجام بدم"/>       
                    </div>
                    <div className='nazarcontainerSlider'>
                      <Nazar name="آقای کاظم میقاتی" rule={"خریدار ملک"} image={" https://images.adsttc.com/media/images/55ef/aac4/e58e/ceb6/6500/00c2/large_jpg/004.jpg?1441770170"} text="ممنون از باهم بدلیل خدمات خاص و بدرد بخوری که ارایه میدن و باعث شدن من با چشم باز خرید ملکم رو انجام بدم"/>       
                    </div>
               </Carousel>  
            </div> 
        </div>
        <div className='rowQuestionKar'>
              <div className=''> 

              </div>
        </div>
       
        <div style={{margin:'40px auto',padding:'30px 0px',width:'600px',backgroundColor:''}}>
            <Question question={"باهم کدام بخش های یک ملک را بررسی می کند؟"} text={"باهم ویژگی های لوکیشن و موقعیت همسایگی کوچه ملک مورد نظر را به همراه فاکتورهای اثر گذار در ارزش یک ملک را کارشناسی می کند (بیش از 100 مورد تعیین کننده در ارزش یک ملک و تاثیرگذار در خرید یک ملک توسط مشتری) و مواردی از این دست را کارشناسی نمیکند . شما می توانید نمونه گزارش کارشناسی ملک با ضمانت باهم را از اینجا ببینید."}/>
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
          
        <div style={{margin:'40px auto',padding:'30px 0px',width:'600px',backgroundColor:''}}></div>
          </div>
    </div>
  )
}

export default Karshenasi