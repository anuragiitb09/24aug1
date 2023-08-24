import React from 'react';

import AnuImage from '../assets/anu.jpg';
import AnuImage1 from '../assets/anu1.jpg';
import AnuImage2 from '../assets/anu2.jpg';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="headline">Contact Us</h1>
            
            <div className="contact-items-container">
                <div className="contact-item">
                   
                  
                        
                  
                  
                    <p className="description">+91 9702260296</p>
                </div>
                <div className="contact-item">
                <img src={AnuImage} alt="Anu" className="background-image" />
                    <div className="contact-overlay">
                    <div className="contact-text">+91 9702260296</div>
                    </div>
                    <h2>Mobile No</h2>
                    <p className="description">contact@padoshiassociates.com</p>
                </div>

                <div className="contact-item">
                    <img src={AnuImage1} alt="Anu1" className="background-image" />
                    <div className="contact-overlay">
                        <div className="contact-text">contact@padoshiassociates.com</div>
                    </div>
                    <h2>Mail</h2>
                    <p className="description">contact@padoshiassociates.com</p>
                </div>

                <div className="contact-item">
                    <img src={AnuImage2} alt="Anu2" className="background-image" />
                    <div className="contact-overlay">
                        <div className="contact-text">1302, Ashtha Heights, Jawahar Nagar, Goregaon West, Mumbai – 400104</div>
                    </div>
                    <h2>Address</h2>
                    <p className="description">1302, Ashtha Heights, Jawahar Nagar, Goregaon West, Mumbai – 400104</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
