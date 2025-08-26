import React from 'react';
import './Footer.css';
import { FaLinkedin, FaXTwitter, FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
   

      <div className="footer-middle container-fluid">
        <div className="footer-columns row justify-content-center">
          <div className="col-md-2 footer-col">
            <h5>FEATURES</h5>
            <ul>
              <li>Create</li>
              <li>Approve</li>
              <li>Negotiate</li>
              <li>Sign</li>
              <li>Store</li>
              <li>Track</li>
            </ul>
          </div>
          <div className="col-md-2 footer-col">
            <h5>SOLUTIONS</h5>
            <ul>
              <li>Legal</li>
              <li>Sales</li>
              <li>HR</li>
              <li>Procurement</li>
              <li>Finance</li>
            </ul>
          </div>
          <div className="col-md-2 footer-col">
            <h5>SITE LICENSE</h5>
            <ul>
              <li>PDF Editing</li>
              <li>Web forms</li>
              <li>Online Surveys</li>
              <li>Accept Payments</li>
            </ul>
          </div>
          <div className="col-md-2 footer-col">
            <h5>COMPARE</h5>
            <ul>
              <li>Spotdraft</li>
              <li>Juro</li>
              <li>Contractsign</li>
              <li>Contractbook</li>
              <li>Oneflow</li>
              <li>Docusign</li>
            </ul>
          </div>
          <div className="col-md-2 footer-col">
            <h5>COMPANY</h5>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <div className="footer-logo">VroxHub</div>
        <div className="footer-icons">
          <FaLinkedin />
          <FaXTwitter />
          <FaGithub />
        </div>
        <p className="footer-copy">© 2024 VroxHub, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
