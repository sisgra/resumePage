import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import SectionEducation from './sections/education/SectionEducation';
import SectionWork from './sections/work/SectionWork';
import SectionSkills from './sections/skills/SectionSkills';

import Footer from './sections/footer/Footer'
import AboutSecond from './sections/about/About_second';
import MyVideo from './sections/my_video/myVideo';
import Portfolio from './sections/portfolio/Portfolio';
import ContactSection from './sections/contact_form/ContactSection';
import Code from './sections/code/code';
import Navbar2 from './sections/navbar/Navbar2';



function App() {
  return (
    <div className="App">
      <Navbar2/>
      <Header/>
      <About/>
      <MyVideo/> 
      <SectionSkills/>
      <AboutSecond/>
      
      <Portfolio/>
        
      
      <SectionWork/>
      
      <SectionEducation/>
      
     <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
