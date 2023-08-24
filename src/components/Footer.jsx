import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-20 px-6 flex justify-between text-lg text-gray-300'>

      {/* Contact and Social Media Links */}
      <div className='flex flex-col w-1/3 mb-16'> {/* Increased bottom margin using mb-16 */}
        <h1 className='w-full text-4xl font-bold text-[#00df9a] mb-8'>CA. Parth A. Doshi</h1>
        <p className='py-6'>
          Mobile: +91 9702260296<br />
          Email: contact@padoshiassociates.com <br />
          Address: 1302, Ashtha Heights, Jawahar Nagar, Goregaon West, Mumbai – 400104
        </p>
       
      </div>

      {/* Quick Links */}
      <div className='flex flex-col w-1/3 mb-4'>
        <h6 className='font-semibold text-xl text-gray-400'>Quick Links:</h6>
        <ul>
          <li className='py-2 text-lg'><a href="/">Home</a></li>
          <li className='py-2 text-lg'><Link to="/about">About Us</Link></li>
          <li className='py-2 text-lg'><Link to="/Service">Services</Link></li>
          <li className='py-2 text-lg'><Link to="/queries">Queries</Link></li>
          <li className='py-2 text-lg'><Link to="/ContactUS">Contact Us</Link></li>
        </ul>
      </div>

      {/* Services */}
      <div className='flex flex-col w-1/3 mt-0'>
        <h6 className='font-semibold text-xl text-gray-400'>Services:</h6>
        <ul>
        <li className='py-2 text-lg'><Link to="/service/income">Income Tax</Link></li>   
        <li className='py-2 text-lg'><Link to="/indirect">Indirect Tax</Link></li>    
        <li className='py-2 text-lg'><Link to="/service/other">Other Services</Link></li>
        <li className='py-2 text-lg'><Link to="/service/accounting-auditing">Accounting and Auditing</Link></li>
      
        </ul>
      </div>
    </div>
  );
};

export default Footer;
