import React ,{useEffect,useRef} from 'react';
import './Login.css';
import {FcGoogle} from 'react-icons/fc';
import { useState } from 'react';
function Login(props) {
  const [switchs,setSwitch] = useState(1);
    useEffect(() => {
      props.header.current.scrollIntoView({ behavior: "smooth" });
    }, []);
  return (
    <div className='loginSignUp' >
        <div className='UpDiveLoginSignUp'>
            <div className='containerCrangeBoxLSGN'>
                <div className='orangeBoxLSGN'>
                    <div className='middleDivOrangeBox'>
                        <div className='buttonsDivOrangeBoxLSGN'>
                            <div onClick={()=>{setSwitch(1)}} className={['SignUpBTNSwitch',switchs===1?'btnActiveSNGL':''].join(" ")}>ثبت نام</div>
                            <div onClick={()=>{setSwitch(0)}} className={['SignUpBTNSwitch',' marginCancelationLSNGBTN',switchs===0?'btnActiveSNGL':''].join(" ")}>ورود</div>    
                        </div>
                        <div className='lineBetweenOrangeBoxLSGN'></div>
                        <div className='LogInWithGoogleLSGN'><div className='googleIconLSGN'><FcGoogle/></div>ورود با اکانت Gmail</div>
                        <div className='BahamIcon'>
                            <img alt=''/>
                        </div>
                        <div className='BahamBrandLSGN'><span>ب</span>رنامه <span>ا</span>نتخاب <span>ه</span>وشمند <span>م</span>سکن</div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        <div className='backDivLoginSignUp'>
            <div></div>
            <div className='containerBackContentLSGN'>
                <div className='headerComponentLoginSignUp'>
                    <div><h1>به <span>باهم</span> خوش آمدید</h1></div>
                    <div>شما میتوانید با ثبت نام از تمامی قابلیت های سایت باهم نهایت استفاده داشته باشید</div>
                </div>
            </div>
        </div>
        <div className='backDivLoginSignUp greyBackGroundBackDivLSGN'>
            <div></div>
                <div className='containerBackContentLSGN'>
                    <div className='contentComponentLoginSignUp'>
                        {switchs===1? <div className='SignUpSectionLSGN'>
                            <div className='labelLSGN'><span>نام</span></div>
                            <div className='inputLSGN'><input/></div>
                            <div className='labelLSGN'><span>نام خانوادگی</span></div>
                            <div className='inputLSGN'><input/></div>
                            <div className='labelLSGN'><span>آدرس ایمیل</span></div>
                            <div className='inputLSGN'><input/></div>
                            <div className='labelLSGN'><span>شماره تلفن</span></div>
                            <div className='inputLSGN'><input/></div>
                            <div className='labelLSGN'><span>رمز عبور</span></div>
                            <div className='inputLSGN'><input/></div>
                            <div className='btnLSGN'>ورود</div>
                        </div>:<div className='loginSectionLSGN'>
                            <div className='labelLSGN'><span>ایمیل/ شماره تلفن همراه</span></div>
                            <div className='inputLSGN'><input/></div>
                            <div className='codeTaeedBox'>
                                <div className='labelLSGN taeedCodeLabel'><span>کد تایید</span></div>
                                <div className='inputLSGN taeedcodeInput'><input/></div>
                                <div className='labelLSGN'>کد تایید به ایمیل / شماره تلفن همراه شما ارسال شد</div>
                            </div>
                            <div className='btnRowLogin'>
                                <div className='btnLSGN'>{switchs===1?"ثبت نام" : "ورود"}</div>
                                <div className='labelLSGN labelLSGN2 taeedCodeLabel'><span>با ورود به باهم ، قوانین و مقررات باهم را می پذیرم</span></div>
                            </div>
                           
                        </div>}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Login