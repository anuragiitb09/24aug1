
import React from 'react';
import Photo from './Photo';
import './Hero.css'; 
import Service from './Service';



const Hero = () => {
  return (
    <div className="text-black bg-white">
      <Photo />

      <div className="max-w-[1240px] mt-[-56px] pt-16 w-full mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] text-5xl font-bold pb-0 p-6 md:p-4">WELCOME TO</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold pt-0 md:py-4">P A Doshi & Associates</h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"></p>
          </div>
          <div className="mx-auto w-full max-w-[90%]"> 
              <p className='pb-4 text-justify mb-4'>
              P A DOSHI & ASSOCIATES is a Chartered Accountant firm founded by 
                CA Parth A. Doshi, with a strong focus on bridging the gap between 
                practical business challenges and legal solutions. The firm's main objective is to 
                analyze real-world business difficulties and address them through a legal framework. 
                It aims to quickly understand the unique business environments of its clients and 
                provide tailored solutions to meet their specific requirements. The firm places a 
                strong emphasis on delivering high-quality and timely results while adding value to each solution,
                all in pursuit of client satisfaction.
              </p>
              <p className='pb-4 text-justify mb-4'>
              The founder, CA Parth A. Doshi, brings a wealth of experience to the firm. 
                Before establishing P A DOSHI & ASSOCIATES, he gained valuable insights 
                from working at renowned Big 4 consulting firms such as Ernst & Young (E&Y) and Deloitte.
                His association with Ram Agarwal & Associates allowed him to play a significant role in
                implementing key tax reforms like GST in India and VAT in Middle Eastern countries like
                the UAE and Saudi Arabia, contributing to the reshaping of taxation, financial, and 
                business frameworks for numerous companies.
              </p>
          </div>
      </div>
      <Service />
    </div>
  );
};

export default Hero;
