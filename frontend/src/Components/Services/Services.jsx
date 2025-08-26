import React, { useState } from 'react';
import './Services.css';
import explainer from '../Assets/Images/explainer.jpg';
import text from '../Assets/Images/text.jpg';
import training from '../Assets/Images/training.jpg';
import promo from '../Assets/Images/promo.jpg';
import corporate from '../Assets/Images/corporate.jpg';
import social from '../Assets/Images/social.jpg';
import product from '../Assets/Images/product.jpg';
import tutorial from '../Assets/Images/tutorial.jpg';

const services = [
  { title: 'Explainer Videos', image: explainer },
  { title: 'Infographic Videos', image: text },
  { title: 'Training Videos', image: training },
  { title: 'Promotional Videos', image: promo },
  { title: 'Corporate Videos', image: corporate },
  { title: 'Social Media Ads', image: social },
  { title: 'Product Demos', image: product },
  { title: 'Tutorial Videos', image: tutorial },
];


const categories = [
  '2D & 3D Animation',
  'Video Production',
  'Branding',
  'Digital Marketing',
  'Web Development',
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="services-section" data-aos="fade-up">
      <h2>
        Our <span>Services</span>
      </h2>

      <div className="services-tabs" data-aos="fade-up">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="services-description" data-aos="fade-up">
        At VoxHub, our <strong>2D and 3D Animation</strong> services create visually captivating
        content that effectively communicates your message across various formats.
      </p>

      <div className="services-grid" data-aos="fade-up">
        {services.map((service) => (
          <div key={service.title} className="service-card" data-aos="fade-up">
            <img src={service.image} alt={service.title} />
            <div className="card-title">{service.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
