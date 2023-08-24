import React from 'react';
import DirectTaxImage from '../assests/Incometax.jpg'; // Assuming you have this image for Direct Tax in the assets folder
import './Income.css'; // Using the same CSS file you provided

const Income = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h2 className='service-header'>Direct Tax</h2>  {/* Using the same class from Service.css for consistency */}
      <div className='max-w-[700px] mx-auto grid grid-cols-1 gap-8'>
        
        <div className='flex flex-col justify-center mb-8'>
            <img
              className='w-full mx-auto my-4'
              src={DirectTaxImage}
              alt='Direct Tax'
              title='Direct Tax Solutions'
            />
            <ul className="list-disc pl-5">
                <li>Income Tax Returns for all the (Company, Partnership firm, Individual, HUF etc)</li>
                <li>Tax Deducted at Source / Tax Collected at Source Monthly Working</li>
                <li>Tax Deducted at Source / Tax Collected at Source Quarterly Return Filing (Form 24Q, 26Q, 27Q and 27EQ)</li>
                <li>Advance Tax Computation Support</li>
                <li>Various Income Tax Forms under Income Tax Act (Form 15 CA, Form 15CB, Form 67 etc)</li>
                <li>Litigation Support</li>
                <li>Advisory in relation to Direct Tax matters</li>
                <li>Tax Audit</li>
            </ul>
        </div>

      </div>
    </div>
  );
};

export default Income;
