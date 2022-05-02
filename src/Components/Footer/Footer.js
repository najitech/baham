import React from 'react'
import './Footer.css';
import p1 from '../../Images/namad/1.jpg'
import p2 from '../../Images/namad/2.jpg'
import p3 from '../../Images/namad/3.jpg'
import p4 from '../../Images/namad/4.jpg'
import { AiOutlineTwitter } from 'react-icons/ai';

import appstore from '../../Images/app-store-1.svg'
import goodlePlay from '../../Images/google-play-5.svg'
import { FaTelegramPlane } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import logo from '../../Images/whiteLogo.jpg'
import { useMediaQuery } from 'react-responsive';
function Footer(props) {
  
  const res1500= useMediaQuery({query :'(max-width : 1500px)'});
  
  const res500= useMediaQuery({query :'(max-width : 500px)'});
  const res450= useMediaQuery({query :'(max-width : 450px)'});
  return (
    <div className='footer'>
      <div className='openableSectionFooter'>
        <div className='logoFooter'>
          <div className='logoTriangle'></div>
          <div className='imageLogoTFooter'><img alt='' src={logo}/></div>
        </div>
        <div className='footerContainer'>
          <div className='rsideFooter'>
            <h2>چرا به باهم اعتماد کنیم ؟</h2>
            <p>خرید و فروش مسکن برای خریدار و فروشنده با چالش ها و مشکلات زیادی همراه است،خریدار همیشه دغدغه اش این است که خانه خود را گران نخرد و یا می گوید آگاهانه ملک خود را انتخاب نکردم و فروشنده دغدغه اش این است که ملک خود را ارزان نفروشد و می گوید ویژگی های خوب ملک من در نظر گرفته نمیشود . این دغدغه ها و نبود یک معیار سنجش خوب برای تصمیم گیری درست آن ها را با پشیمانی زیادی بعد از اقدام به خرید و فروش مسکن مواجه میکند . باهم اینجاست تا با یک بررسی دقیق و سیستماتیک از موقعیت و ویژگی هر ملک به انتخاب و تصمیم گیری آگاهانه هر دو طرف معامله کمک کند. هدف باهم شفاف سازی بازار مسکن و خرید و فروش آگاهانه املاک و به تبع آن رضایت از این معامله است. </p>
          </div>
          <div className='lsidefooter'>
            <div className='ffContainerF'>
              <div className='infoContainer'>
                <div className='inforAdress'><span>آدرس : تهران بلوار مرزداران خیابان سرسبز جنوبی پلاک 1</span>
                  <span>شماره تماس : 02144262200</span>
                  <span>ایمیل: info@baham.app</span>
                  <span>قوانین و مقررات</span>
                </div>
                <div className='ghavanin'><span></span></div>
              </div>
              <div className='namads'>
                <div className='namadContainer'><img alt='' src={p1}/></div>
                <div className='namadContainer'><img alt='' src={p2}/></div>
                <div className='namadContainer'><img alt='' src={p3}/></div>
                <div className='namadContainer'><img alt='' src={p4}/></div>
              </div>
            </div>
            <div className='iconsDive'>
            <div className='iconsContact'>
            <div><BsLinkedin style={{fontSize:res450 ? '13px': res500 ? '14px': res1500 ? '21.5px':'',paddingBottom:res500? '1.5px':'3px'}} className='iconStyleContact'/></div>
            <div><RiInstagramFill className='iconStyleContact'/></div>
            <div className='bottonContact btnColorChange btnShodow'><span>دانلود اپلیکیشن باهم</span></div>
            <div className='bottonContact appleIcon'><img alt='' src={appstore}/></div>
            <div className='bottonContact btnColorImageChange playStoreIcon'><img alt='' src={goodlePlay}/></div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div className='blackFactorFooter'>
        <div className='openCloseFooter'>
          <div className='openCurveFooter'>
            <div className='rightCurveFooter'></div>
            <div className='triangleUpFooter'>
              <div className='squarDownCurveFooter'></div>
              <div className='leftTriangleFooter'></div>  
            </div>
            <div className='leftCurveFooter'></div>
          </div>
        </div>
        <div>
          <div><span style={{color:"var(--color)"}}>کلیه حقوق مادی و معنوی این سایت متعلق به ملک پردازش هوشمند می باشد.</span></div>
          <div><span>بهمن 1400</span></div>
        </div>
      </div>
    </div>
  )
}

export default Footer