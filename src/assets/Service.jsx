import React from 'react';
import Accounts from './assests/acc.jpg';
import IncomeTax from './assests/Incometax.jpg';
import Indirect from './assests/Indirect.png';

const Service = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h1 className='text-black text-4xl font-bold text-center pb-8'>Our Services</h1>
      <div className='max-w-[900px] mx-auto grid grid-cols-2 gap-4'>
        {/* Website 1 */}
        <div className='flex flex-col justify-center mb-8'>
          <img
            className='w-full mx-auto my-4'
            src={Accounts}
            alt='Accounting'
            title='Professional Accounting Services'
          />
          <h2 className='text-[#00df9a] font-bold text-center'>Accounts</h2>
        </div>
        {/* Website 2 */}
        <div className='flex flex-col justify-center mb-8'>
          <img
            className='w-full mx-auto my-4'
            src={IncomeTax}
            alt='Income Tax'
            title='Income Tax Consulting'
          />
          <h2 className='text-[#00df9a] font-bold text-center'>Income Tax</h2>
        </div>
        {/* Website 3 */}
        <div className='flex flex-col justify-center mb-8'>
          <img
            className='w-full mx-auto my-4'
            src={Indirect}
            alt='Indirect Tax'
            title='Indirect Tax Solutions'
          />
          <h2 className='text-[#00df9a] font-bold text-center'>Indirect Tax</h2>
        </div>
        {/* Website 4 */}
        <div className='flex flex-col justify-center mb-8'>
          <img
            className='w-full mx-auto my-4'
            src={Indirect}
            alt='Indirect Tax'
            title='Indirect Tax Solutions'
          />
          <h2 className='text-[#00df9a] font-bold text-center'>Indirect Tax</h2>
        </div>
      </div>
  
      {/* Data Analytics */}
      <div className='col-span-2 flex flex-col justify-center mb-8'>
        <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>
          Manage Data Analytics Centrally
        </h1>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit
          dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
          eveniet ex deserunt fuga?
        </p>
        <div className='text-center'>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
