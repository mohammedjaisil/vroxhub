import React from 'react';
import './VideographySection.css';
import videographyImg from '../Assets/Images/videography.jpg'; // Update this path if needed

const VideographySection = () => {
  return (
    <section className="videography-section py-5">
      <div className="container px-4 px-lg-5">
        <div className="row align-items-center gx-5 flex-column-reverse flex-lg-row">
          {/* LEFT SIDE: Image */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <div className="video-image-wrapper">
              <img
                src={videographyImg}
                alt="Videography"
                className="video-image"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="col-lg-6">
            <h2 className="section-title titanium-text">VIDEOGRAPHY</h2>
            <p className="section-description">
              Our videography services bring your stories to life through cinematic visuals, dynamic editing, and impactful narratives.
            </p>
            <p className="section-description">
              From commercials to documentaries, our team delivers top-tier production with creativity and precision.
            </p>
            <button className="btn btn-outline-light">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideographySection;
