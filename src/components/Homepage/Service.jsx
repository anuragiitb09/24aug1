import React from 'react';
import { Link } from 'react-router-dom'; 
import Accounts from './assests/Acc.png';
import direct from './assests/Incometax.jpg';
import Indirect from './assests/Indirect.png';
import Other from './assests/Other.jpg';
import './Service.css';

const Service = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
  <h2 className='text-black text-5xl font-bold text-center pb-8'>Our Services</h2>

      <div className='max-w-[700px] mx-auto grid grid-cols-2 gap-8'>

        {/* Accounting & Auditing */}
        <Link to="/accounting-auditing">
          <div className='flex flex-col justify-center mb-8'>
            <img
              className='w-full mx-auto my-4'
              src={Accounts}
              alt='Accounting & Auditing'
              title='Professional Accounting Services'
            />
            <h2 className='text-[#00df9a] text-xl font-bold text-center'>Accounting & Auditing</h2>
          </div>
        </Link>

        <Link to="/income"> {/* Link to the Income component */}
  <div className='flex flex-col justify-center mb-8'>
    <img
      className='w-full mx-auto my-4'
      src={direct}
      alt='Direct Tax'
      title='Direct Tax Solutions'
    />
    <h2 className='text-[#00df9a] text-xl font-bold text-center'>Direct Tax</h2>
  </div>
</Link>


        {/* Indirect Tax */}
        <Link to="/indirect">
          <div className='flex flex-col justify-center mb-8'>
            <img
              className='w-full mx-auto my-4'
              src={Indirect}
              alt='Indirect Tax'
              title='Indirect Tax Solutions'
            />
            <h2 className='text-[#00df9a] text-xl font-bold text-center'>Indirect Tax</h2>
          </div>
        </Link>

        {/* Other Services */}
        <Link to="/other">
          <div className='flex flex-col justify-center mb-8'>
            <img
              className='w-full mx-auto my-4'
              src={Other}
              alt='Other Service'
              title='Other Services'
            />
            <h2 className='text-[#00df9a] text-xl font-bold text-center'>Other Services</h2>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Service;
