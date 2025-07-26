import './App.css';
import React, { useEffect } from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Industries from './Pages/Industries';
import Portfolio from './Pages/Portfolio';
import Costomers from './Pages/Costomers';
import Company from './Pages/Company';
import RippleEffect from './Components/Effects/RippleEffect'; // adjust path
function App() {
  // useEffect(() => {
  //   const handleClick = (e) => {
  //     const ripple = document.createElement('div');
  //     ripple.className = 'ripple';
  //     document.body.appendChild(ripple);

  //     ripple.style.left = `${e.clientX}px`;
  //     ripple.style.top = `${e.clientY}px`;

  //     setTimeout(() => {
  //       ripple.remove();
  //     }, 600); // match animation duration
  //   };

  //   window.addEventListener('click', handleClick);

  //   return () => {
  //     window.removeEventListener('click', handleClick);
  //   };
  // }, []);

  return (
    <div >
      <Navbar />
      <RippleEffect />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/industries' element={<Industries/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/costomers' element={<Costomers/>}/>
        <Route path='/company' element={<Company/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
