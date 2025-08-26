import React from 'react';
import Slider from 'react-slick';
import './TeamSection.css';

import model1 from '../Assets/Images/model1.jpg';
import model2 from '../Assets/Images/model2.jpg';
import model3 from '../Assets/Images/model3.jpg';
import model4 from '../Assets/Images/model4.jpg';

const teamMembers = [
  {
    name: 'DANIYEL FEATHER',
    role: 'JUNIOR DIRECTOR',
    image: model1,
  },
  {
    name: 'MARY GAUTREAUX',
    role: 'MAKEUP ARTIST',
    image: model2,
  },
  {
    name: 'LEDSMA MILDRED',
    role: 'MAKEUP ARTIST',
    image: model3,
  },
  {
    name: 'STEPHEN KETCHUM',
    role: 'SCRIPT WRITER',
    image: model4,
  },
];

const TeamSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="team-section text-white py-5" data-aos="fade-up">
      <div className="container" data-aos="fade-up">
        <p className="text-center section-subtitle">EXPERT TEAM</p>
        <h2 className="text-center mb-5 section-title">MEET MY TEAM</h2>
        <Slider {...settings} className="team-slider">
          {teamMembers.map((member, index) => (
            <div key={index} className={`team-card-wrapper ${index % 2 === 1 ? 'down' : 'up'}`} >
              <div className="team-card text-center" data-aos="fade-up">
                <img src={member.image} alt={member.name} className="team-img" />
                <p className="team-role">{member.role}</p>
                <h5 className="team-name">{member.name}</h5>
                <div className="team-social" data-aos="fade-up">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-pinterest"></i></a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
