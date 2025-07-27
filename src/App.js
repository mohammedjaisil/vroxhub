import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SocialBar from './Components/Hero/SocialBar';
import { Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Industries from './Pages/Industries';
import Portfolio from './Pages/Portfolio';
import Costomers from './Pages/Costomers';
import Company from './Pages/Company';
import RippleEffect from './Components/Effects/RippleEffect'; // adjust path
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration (ms)
      once: true,       // only animate once
      offset: 120,      // trigger point from bottom
    });
  }, []);
  return (
    <div >
      <Navbar />
      <RippleEffect />
      <SocialBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/industries' element={<Industries/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/costomers' element={<Costomers/>}/>
        <Route path='/company' element={<Company/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
