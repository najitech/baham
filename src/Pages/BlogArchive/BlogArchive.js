import { useMediaQuery } from 'react-responsive';
import React ,{useEffect,useRef} from 'react'
import { BiChevronsDown } from 'react-icons/bi';
import ArchiveItem from '../../Components/ArchiveItems/ArchiveItem';
import BlogItemSlider from '../../Components/BlogItemSlider/BlogItemSlider';
import p1 from '../../Images/01.jpg'
import p2 from '../../Images/02.jpg'
import p3 from '../../Images/03.jpg'
import './BlogArchive.css';
import useDocumentTitle from '../../Components/TitleSetter/useDocumentTitle';
function BlogArchive(props) {
    
  useDocumentTitle('باهم | مطالب آموزشی')
  const res1000 = useMediaQuery({query :'(max-width : 1000px)'});
  const res800 = useMediaQuery({query :'(max-width : 800px)'});
  const res690 = useMediaQuery({query :'(max-width : 690px)'});
  const res600 = useMediaQuery({query :'(max-width : 600px)'});
  
    useEffect(() => {
        props.header.current.scrollIntoView({ behavior: "smooth" });
        }, []);
  return (
    <div className='blogArchive' >
        <div className='newestSection'>
            <div className='newestHeader'>
                <h2>تازه ترین ها</h2>
                <div className='dotLineNewest'></div>
            </div>
            <div className='newestContainer'>
                <div className='biggerImageContainerArchive'>
                    <div className='imageContainerBlog'>
                        <img alt='' className='imageArchiveHeader hb' src={p2}/>
                        <div className='imageFooterBlog imP1HB'>
                            <h2 className='h2BigImageArchive'>{"معرفی محله دهکده المپیک با ساختمان های نوساز"}</h2>
                            <div className='infoImageBlog'><span>مطالعه {"6"} دقیقه </span><span>{"1400/12/01"}</span></div>
                        </div>
                    </div>
                </div>
                <div className='TwoMore'>
                    <div className='imageContainerBlog'>
                        <img alt='' className='imageArchiveHeader hs' src={p2}/>
                        <div className='imageFooterBlog moreImp'>
                            <h2 className="h2SmalImageArchive ">{"معرفی محله دهکده المپیک با ساختمان های نوساز"}</h2>
                            <div className='infoImageBlog smallerSizeArchiveSpans'><span>مطالعه {"6"} دقیقه </span><span>{"1400/12/01"}</span></div>
                        </div>
                    </div>
                    <div className='imageContainerBlog'>
                        <img alt='' className='imageArchiveHeader hs' src={p2}/>
                        <div className='imageFooterBlog moreImp'>
                            <h2 className="h2SmalImageArchive">{"معرفی محله دهکده المپیک با ساختمان های نوساز"}</h2>
                            <div className='infoImageBlog smallerSizeArchiveSpans'><span>مطالعه {"6"} دقیقه </span><span>{"1400/12/01"}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='matalebAmozeshiContainer'>
        <div className='archiveFeed'>
            <div className='itemsArchiveBlog'>
                <div className='topsHeaderBlog'>
                    <h3>مطالب آموزشی</h3>
                </div>
                <div className='listItemsArchive'>
                     <ArchiveItem width={res600 ? "49%": res690? 185:res800 ? 210: res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                     <ArchiveItem width={res600 ? "49%": res690? 185:res800 ? 210:res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                     <ArchiveItem width={res600 ? "49%": res690? 185:res800 ? 200: res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                     <ArchiveItem width={res600 ? "49%":res690? 185:res800 ? 210: res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                     <ArchiveItem width={res600 ? "49%":res690? 185:res800 ? 210:res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                     <ArchiveItem width={res600 ? "49%":res690? 185:res800 ? 200: res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                    </div>
                <div className='moreButtonArchive'><BiChevronsDown style={{fontSize:'25px'}}/><span>مشاهده بیشتر مطالب</span></div>
            </div>
            <div className='sidebarArchiveBlog'>
                <div className='topsHeaderBlog'>
                    <h3>محبوب ترین ها</h3>
                </div>
                <div className='topsItemsList'>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                </div>
            </div>
        </div>
        </div>
        <div style={{marginTop:'15px'}}><hr/></div>
        <div className='matalebAmozeshiContainer'>
        <div className='archiveFeed'>
            <div className='itemsArchiveBlog'>
                <div className='topsHeaderBlog'>
                    <h3>آخرین اخبار</h3>
                </div>
                <div className='listItemsArchive'>
                <ArchiveItem width={res600 ? "49%":res690? 185:res800 ? 210: res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                     <ArchiveItem width={res600 ? "49%":res690? 185:res800 ? 210:res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                     <ArchiveItem width={res600 ? "49%":res690? 185:res800 ? 200: res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                     <ArchiveItem width={res600 ? "49%":res690? 185:res800 ? 210: res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                     <ArchiveItem width={res600 ? "49%":res690? 185:res800 ? 210:res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                     <ArchiveItem width={res600 ? "49%":res690? 185:res800 ? 200: res1000 ? 240: 310} image={p3} title={"مشاعات ساختمان چیست؟"} text="طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود طبق قانون مالکیت در آپارتمان ها بر دو بخش تقسیم میشود " time="6" date="1400/12/01"/> 
                        
                 </div>
                <div className='moreButtonArchive'><BiChevronsDown style={{fontSize:'25px'}}/><span>مشاهده بیشتر اخبار</span></div>
            </div>
            <div className='sidebarArchiveBlog'>
                <div className='topsHeaderBlog'>
                    <h3>برترین اخبار</h3>
                </div>
                <div className='topsItemsList'>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                    <BlogItemSlider image={p1} time={"6"} date={"1400/11/01"} tag={"کارشناسی ملک"} title={"مشاعات ساختمان چیست؟"}/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BlogArchive