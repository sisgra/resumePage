import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import SectionEducation from './components/SectionEducation';
import SectionWork from './components/SectionWork'
import SectionSkills from './components/SectionSkills';
import SectionPortfolio from './components/SectionPortfolio';
import PortfolioVideo from './components/PortfolioVideo';
import PortfolioVideo2 from './components/PortfolioVideo2';
import PortfolioVideo3 from './components/PortfolioVideo3';
import Footer from './components/Footer'

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
      <Footer/>
    </div>
  );
}

export default App;
