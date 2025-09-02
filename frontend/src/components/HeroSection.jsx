import React from 'react';
import Navbar from './Navbar';
import './HeroSection.scss';
import headSvg from '../assets/head.svg';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <div className="hero-svg">
        <img src={headSvg} alt="Head" className="head-svg" />
      </div>
      <div className="hero-content">
        <h1>Welcome to Farmer AI</h1>
      </div>
    </div>
  );
};

export default HeroSection;
