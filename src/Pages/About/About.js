import React , {useEffect ,useRef} from 'react'
import './About.css'
import image from '../../Images/MoshareAmlak.jpg';
import Image1 from '../../Images/Aboutus1.svg';
import Image2 from '../../Images/Aboutus2.svg';
import useDocumentTitle from '../../Components/TitleSetter/useDocumentTitle';
function About(props) {
    const header= useRef(null);

    useEffect(() => {
        header.current.scrollIntoView({ behavior: "smooth"});
      }, []);
  useDocumentTitle('باهم | درباره ما')
  return (
    <div ref={header}>
        <div className='listAboutUs'>
            <div className='aboutDives'>
                <div className='lineAboveTextPages'><h2>معرفی <span>باهم</span></h2><div className='lineDotted'></div><div className='floatingSquareHomeWhatsBahamAbout'></div></div>
                <div>
                    <p>
                    بیش از یک دهه فعالیت به عنوان مشاور و مدیر املاک در مناطق 2 و 5 شهرداری تهران تجربه بزرگی را برای مدیران باهم ایجاد کرده است. در طول این دوران شاهد نارضایتی زیادی از جانت خریداران و فروشندگان بوده ایم. هر دو طرف فارغ از نتیجه از نبود فضای شفاف که اطلاعات دقیقی و مستندی از نکات مثبت و منفی موقعیت املاک را بدهد شکایت دارند و متاسفانه اعتماد در بازار مسکن در حداقل حالت است. همه می دانیم که برای انجام هر کاری به یک اعتماد نسبی نیاز است. اعتماد از طریق مشاوره درست و کامل به دست می آید. به این معنی که اصطلاعا به من به عنوان مشتری همه چیز را بگو و تصمیم را به من بسپار. و مشخصه های اینکار ایجاد شفافیت و سیستماتیک بودن می باشد. اهداف باهم شفافیت بازار مسکن و برآورده کردن هرچه بیش تر نیاز های مشتریان(خریداران و فروشندگان) و پیشروی در حوزه رضایت مشتری در فرآیند خرید و فروش املاک می باشد.       
                    </p>
                    <div className='imageAboutDiv'>
                        <img alt='' src={Image1}/>
                    </div>
                </div>
            </div>
            <div className='listAboutInf'>
                <h3>ارزش های سازمانی باهم</h3>
                <div style={{display:''}}>
                    <ul>
                        <li><span>مسوولیت پذیری: </span> ما با پذیرش مسوولیت متعهد به ایجاد بهترین نتیجه برای مشتریان مستقیم</li>
                        <li><span>احترام متقابل: </span>رفتار ما با ذی نفعان بر اساس احترام و اعتماد متقابل بوده و با توجه و ارج نهادن به نظرات، روابط خود را بر اساس رابطه برد برد تنظیم میکنیم.</li>
                        <li><span>توانمندی: </span>ما با داشتن بهترین کارشناسان حوزه املاک ، برای همکاری پیش قدم و در اجرا و برآورده کردن خواسته های مشتریان توانمند هستیم.</li>
                        <li><span>کار تیمی: </span>ما با برنامه ریزی دقیق و منطم، با پشتکار و کار تیمی رضایت را برای مشتریان به ارمغان می آوریم.</li>
                    </ul>
                    <div className="secondImageAbout">
                        <img alt='' src={Image2}/>
                    </div>
                </div>
            </div>
            <div className='istAboutImage'></div>
        </div>
    </div>
  )
}

export default About