import React from 'react';
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import filmsImg from '../Assets/Images/films.jpg';
import photographyImg from '../Assets/Images/photography.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section" data-aos="fade-up">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row gx-5 align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6" >
            <div className="film-img-wrapper" data-aos="fade-up">
              <img src={filmsImg} alt="Films" />
            </div>

            <div className="about-block" data-aos="fade-up">
              <p className="about-label">About Us</p>
              <h3 className="about-title">
                Contrary to popular belief, <br />
                Lorem Ipsum is simply.
              </h3>
              <p className="about-description">
                We believe film and moving image has the power to create significant change.
                We help brands realise that power and agencies to bring their creative vision to fruition.
                We believe film and moving image and agencies to bring their creative vision to fruition.
              </p>
              <button className="btn btn-outline-light">KNOW MORE</button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 text-lg-end text-center mt-5 mt-lg-0" >
            <div className="text-block" data-aos="fade-up">
              <h1 className="hero-headline">
                <span className="orange">TELLING</span> THE <br />
                <span className="orange">BIGGER STORY</span>
              </h1>
              <div className="badge-label">🏆 BEST DIRECTOR</div>
            </div>

            <div className="photo-img-wrapper" data-aos="fade-up">
              <img src={photographyImg} alt="Photography" />
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default HeroSection;
