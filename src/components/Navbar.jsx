import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import CALogo from '../assets/CA.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const loggedIn = false; // Placeholder - replace with your actual loggedIn state
  const handleLogout = () => {
    // Your logout logic here
  };

  const isHomePage = location.pathname === '/';

  return (
    <div className="flex justify-between items-center h-24 px-4 bg-white text-black">
      <Link to="/" className="flex items-center">
        <img src={CALogo} alt="CA Logo" className="w-14.5 h-12 mr-2" />
        <span className="text-3xl font-bold text-[#00df9a]">P A Doshi & Associates</span>
      </Link>

      <ul className='hidden md:flex'>
        <li className={`p-4 ${isHomePage ? 'text-black' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4'>
          <Link to="/about">About Us</Link>
        </li>
        <li className='p-4'>
          <Link to="/contact">Contact Us</Link>
        </li>
       
        <li className='p-4 relative' onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
          <Link to="/service">Services</Link>
          <ul className={`absolute left-0 top-full bg-white border border-gray-300 py-2 rounded shadow ${dropdownVisible ? 'block' : 'hidden'}`}>
            <li className='dropdown-item'>
              <Link to="/service/accounting-auditing">Accounting and Auditing</Link>
            </li>
            <li className='dropdown-item'>
              <Link to="/service/income">Income TAX</Link>
            </li>
            <li className='dropdown-item'>
              <Link to="/service/indirect">Indirect Tax</Link>
            </li>
            <li className='dropdown-item'>
              <Link to="/service/other">Other Services</Link>
            </li>
            
          </ul>
        </li>
        <li className='p-4'>
          <Link to="/query">Query</Link>
        </li>
        {loggedIn ? (
          <li className='p-4'>
            Welcome, Admin! <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li className='p-4'>
            <Link to="/login">Admin</Link>
          </li>
        )}
        {loggedIn && (
          <li className={`p-4 ${isHomePage ? 'text-black' : ''}`}>
            <Link to="https://docs.google.com/spreadsheets/d/1jFTvddQ-tEi7vUoCYJiaJRceuVCHuq0FAeRdxC8qFRY/edit#gid=0">Data Form</Link>
          </li>
        )}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h2 className='w-full text-3xl font-bold text-[#00df9a] m-4'>CA PA.Doshi</h2>
        <li className='p-4 border-b border-gray-600 text-white'>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4 border-b border-gray-600 text-white'>
          <Link to="/about">About Us</Link>
        </li>
        <li className='p-4 text-white border-gray-600'  >
          Services
          <ul>
          <li className='p-2 border-gray-600 '   >
              <Link to="/service/accounting-auditing">Accounting and Auditing</Link>
            </li>
            <li className='p-2 border-gray-600 '   >
              <Link to="/service/income">Income TAX</Link>
            </li>
            <li className='p-2 border-gray-600 '   >
              <Link to="/contact">ContactUS</Link>
            </li>
            <li className='p-2 border-gray-600 '   >
              <Link to="/service/indirect">Indirect Tax</Link>
            </li>
            <li className='p-2 border-gray-600 '   >
              <Link to="/service/other">Other Services</Link>
            </li>
          </ul>
        </li>
        <li className='p-4 border-b border-gray-600 text-white '>
        <Link to="/query">Query</Link>
        </li>
        <li className='p-4 border-b border-gray-600 text-white'>
        <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
