import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import SectionEducation from './sections/education/SectionEducation';
import SectionWork from './sections/work/SectionWork';
import SectionSkills from './sections/skills/SectionSkills';
import SectionPortfolio from './sections/portfolio/SectionPortfolio';
import PortfolioVideo from './sections/portfolio/PortfolioVideo';
import PortfolioVideo2 from './sections/portfolio/PortfolioVideo2';
import PortfolioVideo3 from './sections/portfolio/PortfolioVideo3';
import Footer from './sections/footer/Footer'
import ContactFormular from './sections/contact_form/contactForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <SectionEducation/>
      <SectionWork/>
      <SectionSkills/>
      <SectionPortfolio/>
      <PortfolioVideo/>
      <PortfolioVideo2/>
      <PortfolioVideo3/> 
      <ContactFormular/>
      <Footer/>
    </div>
  );
}

export default App;
