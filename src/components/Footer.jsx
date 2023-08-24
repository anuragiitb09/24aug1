import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer-container'>

      {/* Contact and Social Media Links */}
      <div className='contact-section'>
        <h1 className='contact-title'>CA. Parth A. Doshi</h1>
        <p className='contact-details'>
          Mobile: +91 9702260296<br />
          Email: contact@padoshiassociates.com <br />
          Address: 1302, Ashtha Heights, Jawahar Nagar, Goregaon West, Mumbai – 400104
        </p>
      </div>

      {/* Quick Links */}
      <div className='quick-links-section'>
        <h6 className='quick-links-title'>Quick Links:</h6>
        <ul className='quick-links-list'>
          <li className='quick-link-item'><a href="/" className='quick-link'>Home</a></li>
          <li className='quick-link-item'><Link to="/about" className='quick-link'>About Us</Link></li>
          <li className='quick-link-item'><Link to="/Service" className='quick-link'>Services</Link></li>
          <li className='quick-link-item'><Link to="/queries" className='quick-link'>Queries</Link></li>
          <li className='quick-link-item'><Link to="/ContactUS" className='quick-link'>Contact Us</Link></li>
        </ul>
      </div>

      {/* Services */}
      <div className='services-section'>
        <h6 className='services-title'>Services:</h6>
        <ul className='services-list'>
          <li className='service-item'><Link to="/service/income" className='service-link'>Income Tax</Link></li>   
          <li className='service-item'><Link to="/service/indirect" className='service-link'>Indirect Tax</Link></li>    
          <li className='service-item'><Link to="/service/other" className='service-link'>Other Services</Link></li>
          <li className='service-item'><Link to="/service/accounting-auditing" className='service-link'>Accounting and Auditing</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
