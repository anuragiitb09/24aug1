import React from 'react';
import directorImage from '../assets/aboutus.jpeg'; // Change this path to your image's path
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div style={{ 
            width: '100%', 
            //height: '100vh', // Using 100 viewport heights to take the full vertical space
            backgroundColor: 'white', 
            display: 'flex',  // Setting the display to flex
            flexDirection: 'column', // Flex direction to column so elements stack vertically
            alignItems: 'center',  // Center items horizontally
            justifyContent: 'center' // Center items vertically
        }}>
            <h1 style={{ color: '#00df9a', fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>About Us</h1>
            {/* Image in the center */}
            <img src={directorImage} alt="Director's Portrait" style={{ width: '200px', height: 'auto', borderRadius: '50%', marginBottom: '2rem' }} />

            {/* Title */}
            

            {/* Descriptions */}
            <div className="mx-auto w-full max-w-[80%]"> 
            <p className='pb-4 text-justify mb-2'>

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
    );
};

export default AboutUs;
