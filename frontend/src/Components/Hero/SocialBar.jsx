import React from 'react';
import './SocialBar.css';

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a href="#"><i className="bi bi-facebook"></i></a>
      <a href="#"><i className="bi bi-twitter"></i></a>
      <a href="#"><i className="bi bi-instagram"></i></a>
      <a href="#"><i className="bi bi-youtube"></i></a>
      <a href="#"><i className="bi bi-linkedin"></i></a>
      <span>FOLLOW</span>
    </div>
  );
};

export default SocialBar;
