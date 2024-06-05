import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import banner from "../src/assests/images/shark banner.png"
import './App.css';
import Banner from './components/Banner';
import Safeforlife from './components/Safeforlife';
import HistoricalGoldPrice from './components/HistoricalGoldPrice';
import TrustedJewellers from './components/TrustedJewellers';
import MediaLovesPlus from './components/MediaLovesPlus';
import Downloadapp from './components/Downloadapp';

function App() {
  return (
    <div className="App">
      <img className="start-img" src={banner} alt='banner-img'/>
      <Header />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Banner/>
      <Safeforlife/>
      <HistoricalGoldPrice/>
      <TrustedJewellers/>
      <MediaLovesPlus/>
      <Downloadapp/>
      <Footer />
    </div>
  );
}

export default App;
