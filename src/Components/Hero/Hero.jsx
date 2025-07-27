import React from 'react';
import background from '../Assets/Videos/background.mp4';
import './Hero.css'; // Import the CSS shown above

const Hero = () => {
  return (
    <div className="home-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay">
        <h1>WELCOME TO VROXHUB</h1>
        <p>Crafting engaging visuals for the modern world.</p>
      </div>
    </div>
  );
};

export default Hero;
