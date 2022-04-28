import './App.css';
import {useRef} from 'react'
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import About from './Pages/About/About';
import p3 from './Images/03.jpg'
import BlogPage from './Pages/BlogPage/BlogPage';
import p2 from './Images/02.jpg'
import BlogArchive from './Pages/BlogArchive/BlogArchive';
import MosharekAmlak from './Pages/MosharekAmlak/MosharekAmlak';
import Sazandegan from './Pages/Sazandegan/Sazandegan';
import HeaderArchive from './Components/HeaderArchive/HeaderArchive';
import ContactUs from './Pages/ContactUs/ContactUs';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import BaaHam_MarketerUser from './Components/Profiles/BaaHam_MarketerUser/BaaHam_MarketerUser'
import BaaHam_NormalUsers from './Components/Profiles/BaaHam_NormalUsers/BaaHam_NormalUsers'
import BaaHam_PropertyUser from './Components/Profiles/BaaHam_PropertyUser/BaaHam_PropertyUser'
import BaaHam_SupervisorUser from './Components/Profiles/BaaHam_SupervisorUser/BaaHam_SupervisorUser'
import BaaHam_VisitingExpertUser from './Components/Profiles/BaaHam_VisitingExpertUser/BaaHam_VisitingExpertUser'
import BaaHam_ContentproductionUser from './Components/Profiles/BaaHam_ContentproductionUser/BaaHam_ContentproductionUser'
import Footer2 from './Components/Profiles/Footer/Footer'
import BackgroundImage from './background.jpg'
import Login from './Pages/LogIn/Login';
import Karshenasi from './Pages/Karshenasi/Karshenasi';
import ArchiveAmlak from './Pages/ArchiveAmlak/ArchiveAmlak';
import ChiefDashbord from './Pages/ChiefDashbord/ChiefDashbord';
import AgahiPage from './Pages/AgahiPage/AgahiPage';
import SabtAgahi from './Pages/SabtAgahi/SabtAgahi';
import ScrollToTop from './ScrollToTop';


function App() {
  const header1= useRef(null);
  const header2= useRef(null);
  const header3= useRef(null);
  const header4= useRef(null);
  const header5= useRef(null);
  const header6= useRef(null);
  return (
    <div className="App colorStyles">  
      <Router>
        <Switch>
          <Route exact path="/about">
            <Header/>
            <About/>
            <Footer/>
          </Route>
          <Route path="/moshavere">
            <Header/>
            <MosharekAmlak/>
            <Footer/>
          </Route>
          <Route path="/Contact">
            <Header/>
            <ContactUs/>
            <Footer/>
          </Route>
          <Route path="/account">
            <Header/>
            <Login/>
            <Footer/>
          </Route>
          <Route path="/karshenasi">
            <Header/>
            <Karshenasi/>
            <Footer/>
          </Route>
          <Route path="/amlak">
            <Header/>
            <ArchiveAmlak/>
            <Footer/>
          </Route>
          <Route path="/agahi">
            <Header/>
            <AgahiPage/>
            <Footer/>
          </Route>
          
          <Route path="/newagahi">
            <Header/>
            <SabtAgahi/>
            <Footer/>
          </Route>
          <Route path="/sazandegan">
            <Header/>
            <Sazandegan/>
            <Footer/>
          </Route>
          <Route path="/blog">
            <HeaderArchive/>
            <BlogArchive/>
            <Footer/>
          </Route>
          <Route path="/post">
            <HeaderArchive/>
            {<BlogPage image={p2} text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." time="6" clock="12:14"  title="معرفی محله دهکده المپیک با ساختمان های نوساز" date="1400/12/01"/>
         
           }      <Footer/>   </Route>
          
     


          <Route path="/normal">
            <div  className="HeaderAppContainer">
              <Header/>
            </div>
  
            <div className='BaaHam_NormalUsersHeaderImageContainer' ref={header1} >
                <img alt="hi" src={BackgroundImage} className="BaaHam_NormalUsersHeaderImageContainerImage" />
            </div>
            
            <BaaHam_NormalUsers path="normal" header={header1}/>

          </Route>
          <Route path="/property">
            <Header/>
            <div className='BaaHam_NormalUsersHeaderImageContainer' ref={header2}>
                <img alt="hi" src={BackgroundImage} className="BaaHam_NormalUsersHeaderImageContainerImage" />
            </div>
            <BaaHam_PropertyUser path="property" header={header2}/>
          </Route>
          <Route path="/marketer">
            <Header/>
            <div className='BaaHam_NormalUsersHeaderImageContainer' ref={header3}>
                <img alt="hi" src={BackgroundImage} className="BaaHam_NormalUsersHeaderImageContainerImage" />
            </div>
            <BaaHam_MarketerUser path="marketer" header={header3}/>
          </Route>
          <Route path="/expert">
           <Header/>
            <div className='BaaHam_NormalUsersHeaderImageContainer' ref={header4}>
                <img alt="hi" src={BackgroundImage} className="BaaHam_NormalUsersHeaderImageContainerImage" />
            </div>
            <BaaHam_VisitingExpertUser path="expert" header={header4}/>
          </Route>
          <Route path="/supervisor">
            <Header/>
            <div className='BaaHam_NormalUsersHeaderImageContainer' ref={header5}>
                <img alt="hi" src={BackgroundImage} className="BaaHam_NormalUsersHeaderImageContainerImage" />
            </div>
            <BaaHam_SupervisorUser path="supervisor" header={header5}/>
          </Route>
          <Route path="/producer">
           <Header/>
            <div className='BaaHam_NormalUsersHeaderImageContainer' ref={header6}> 
                <img alt="hi" src={BackgroundImage} className="BaaHam_NormalUsersHeaderImageContainerImage" />
            </div>
            <BaaHam_ContentproductionUser path="producer" header={header6}/>
          </Route>
          <Route path="/dashboard">
            <ChiefDashbord/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
      {/*<Footer/>*/}

    </div>
  );
}

export default App;
