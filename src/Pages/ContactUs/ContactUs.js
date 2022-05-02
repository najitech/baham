import React , {useEffect , useRef} from 'react'
import './ContactUs.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import address from '../../Images/addres.png'
import appstore from '../../Images/app-store-1.svg'
import goodlePlay from '../../Images/google-play-5.svg'
import { useMediaQuery } from 'react-responsive';
import useDocumentTitle from '../../Components/TitleSetter/useDocumentTitle'
function ContactUs(props) {
  useDocumentTitle('باهم | تماس با ما')
  const res1000 = useMediaQuery({query :'(max-width : 1090px)'});
  const res600 = useMediaQuery({query :'(max-width : 650px)'});

  useEffect(() => {
      props.header.current.scrollIntoView({ behavior: "smooth" });
    }, []);
  return (
    <div className=' contactUs'>
        <div className='aboutDives boxOff contactHeading'><div className='lineAboveTextPages'><h2 className='tamasH'>تماس با ما</h2><div className='lineDotted lineDottetContact'></div><div className='floatingSquareHomeWhatsBahamAbout floatsQconact'></div></div></div>
        <div className='mapBoxContact'>
          <img alt='' src={address}/>
        </div>
        <div className='infDivContact'>
          <div style={{marginBottom:'25px'}}><span>:آدرس</span><h2>تهران ، بلوار مرزداران، خیابان سرسبز جنوبی، پلاک 1</h2></div>
          <div><span>:شماره تماس</span><h3>02144262200</h3></div>
          <div><span>:ایمیل</span><h3>info@baham.app</h3></div>
          <div style={{marginTop:'15px'}}></div>
          <div className='lineBottomContact'></div>
          <div className='iconsContact'>
            <div><AiOutlineTwitter className='iconStyleContact'/></div>
            <div><FaTelegramPlane className='iconStyleContact'/></div>
            <div><BsLinkedin style={{fontSize:res600 ? '16px': res1000 ?'18px' :'22px',paddingBottom:res1000 ? '1px':'2px'}} className='iconStyleContact'/></div>
            <div><RiInstagramFill className='iconStyleContact'/></div>
            <div className='bottonContact btnShodow'><span>دانلود اپلیکیشن باهم</span></div>
            <div className='bottonContact appleIcon'><img alt='' src={appstore}/></div>
            <div className='bottonContact playStoreIcon'><img alt='' src={goodlePlay}/></div>
          </div>
          <div style={{marginTop:'20px'}}></div>
        </div>
        <div className='formDivContact'>
          <div className='buttonContactUsBtn'>
            <span>با ما در تماس باشید</span>
          </div>
          <div className='formcontainercontantn'>
            <div className='topsHeaderBlog'>
                <h3>پیام خود را ارسال کنید</h3>
            </div>
            <div style={{marginTop:'30px'}}></div>
            <div className='inputRowContactUs'>
              <div className='inputComponentContactUs'>
                <span>نام و نام خانوادگی</span>
                <div><input/></div>
              </div>
              <div className='inputComponentContactUs'>
                <span>شماره تماس</span>
                <div><input/></div>
              </div>
            </div>
            <div className='inputRowContactUs'>
              <div className='inputComponentContactUs'>
                <span>موضوع</span>
                <div><input/></div>
              </div>
              <div className='inputComponentContactUs'>
                <span>ایمیل</span>
                <div><input/></div>
              </div>
            </div>
            <div className='inputRowContactUs'>
              <div className='inputComponentContactUsTExtArea'>
                <span>متن</span>
                <div><textarea/></div>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default ContactUs