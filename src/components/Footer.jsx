import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">

      {/* Contact Information */}
      <div className="contact-section">
        <h1 className="contact-title">CA. Parth A. Doshi</h1>
        <p className="contact-details">
          Mobile: +91 9702260296<br />
          Email: contact@padoshiassociates.com <br />
          Address: 1302, Ashtha Heights, Jawahar Nagar, <br />
          Goregaon West, Mumbai – 400104
        </p>
      </div>

      {/* Quick Links */}
      <div className="quick-links-section">
        <h6 className="quick-links-title">Quick Links:</h6>
        <ul className="quick-links-list">
          <li><a href="/">Home</a></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/Service">Services</Link></li>
          <li>
          <Link to="/query">Query</Link>
        </li>
        
          <li><Link to="/ContactUS">Contact Us</Link></li>
        </ul>
      </div>

      {/* Services */}
      <div className="services-section">
        
        <h6 className="services-title">Services:</h6>
        <ul className="services-list">
          <li><Link to="/service/income">Income Tax</Link></li>
          <li><Link to="/service/indirect">Indirect Tax</Link></li>
          <li><Link to="/service/other">Other Services</Link></li>
          <li><Link to="/service/accounting-auditing">Accounting and Auditing</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
