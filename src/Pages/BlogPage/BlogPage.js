import React ,{useEffect,useRef} from 'react'
import BlogItemSlider from '../../Components/BlogItemSlider/BlogItemSlider'
import './BlogPage.css'
import p1 from '../../Images/01.jpg'
import ADBanner from '../../Components/ADBanner/ADBanner';
import Comment from '../../Components/Comment/Comment';
import {IoPersonOutline} from 'react-icons/io5'
import logo from '../../Images/Logonav.jpg'
import useDocumentTitle from '../../Components/TitleSetter/useDocumentTitle';
function BlogPage(props) {
    
  useDocumentTitle('باهم | مطالب آموزشی')
  const header= useRef(null);
    useEffect(() => {
        header.current.scrollIntoView({ behavior: "smooth" });
        }, []);
  return (
    <div className='blogPage' ref={header}>
        <div className='feedBlog'>
            <div className='imageFeedBlog'>
                <div className='imageContainerBlog'>
                    <img alt='' src={props.image}/>
                    <div className='imageFooterBlog'>
                        <h2 className='headPostPageRes'>{props.title}</h2>
                        <div className='infoImageBlog'><span>مطالعه {props.time} دقیقه </span><span>{props.date}</span></div>
                    </div>
                </div>
            </div>
            <div className='feedTextBlog'>
                    <p>{props.text}</p>
                    <div className='tagtextBlog'>
                        <div className='tagItemBlog'><div>کارشناسی ملک</div></div>
                    </div>
                    <div className='infItemSliderBlog'>
                        <div>نوشته شده توسط {props.username}</div>
                        <div style={{display:'flex',justifyContent:'space-between',width:'100px'}}>
                            <span>{props.date}</span>
                            <span >{props.clock}</span>
                        </div>
                    </div>
            </div>
            <div className='commentsBlogPage'>
                <div className='headerComments'>
                    <h2>دیدگاه کاربران</h2>
                </div>
                <div className='addCommentDiv'>
                    <span>آدرس ایمیل شما منتشر نخواهد شد. فیلد های مورد نیاز علامت گذاری شده اند *</span>
                    <div className='inputsRosBlog'><div className='nameInputCommentBlog'><input placeholder='نام و نام خانوادگی ...'/></div><div className='emailInputCommnetBlog'><input placeholder='آدرس ایمیل...'/></div></div>
                    <div className='CommentTextAreaInput'><textarea placeholder='توضیحات...'/></div>
                </div>
                <div className='commentsContainer'>
                    <span>نظرات کاربران در رابطه با این نوشته :</span>
                    <div className='commentsListBlog'>
                        <Comment Icon={IoPersonOutline} name="متیو ان پی" date="1400/12/01" time="11:30" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است">
                            <Comment reply Icon={IoPersonOutline} name="متیو ان پی" date="1400/12/01" time="11:30" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>    
                            <Comment reply Icon={IoPersonOutline} name="متیو ان پی" date="1400/12/01" time="11:30" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>    
                        </Comment>    
                        <Comment Icon={IoPersonOutline} name="متیو ان پی" date="1400/12/01" time="11:30" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است">
                            <Comment reply Icon={IoPersonOutline} name="متیو ان پی" date="1400/12/01" time="11:30" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>    
                        </Comment>    
                    </div>
                </div>
            </div>
        </div>
        <div className='sidebarBlog'>
            <div className='bannerDivBlog'>
                <div className='crossLineLogoBlog'>
                    <div className='iconLogo'><img alt='' src={logo}/></div>
                    <div className='btnDivsRowBannerPageBlog'>
                        <div className='btn1bannerLogo'>کارشناسی ملک با ضمانت باهم</div>
                        <div className='btn2bannerLogo'>فروش سفارشی ملک</div>
                    </div>
                </div>
            </div>
            <div className='topsBlog'>
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
            <div className='ADbanners'>
                <ADBanner/>
            </div>
            <div className='ADbanners'>
                <ADBanner/>
            </div>
        </div>
    </div>
  )
}

export default BlogPage