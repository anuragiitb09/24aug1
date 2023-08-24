import React from 'react';
import CA from './assests/ca.jpg';
import './Photo.css'; // Import your CSS file for styling

const Photo = () => {
  return (
    <div className="photo-container">
      <div className="photo-scroll">
        <img src={CA} alt="CA" className="photo-item" />

      </div>
    </div>
  );
};

export default Photo;
