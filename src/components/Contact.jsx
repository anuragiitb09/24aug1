import React from 'react';
import './Contact.css';
import MobileImage from '../assets/grow.jpg';
import EmailImage from '../assets/handshake.jpg';
import AddressImage from '../assets/trust.jpg';

const Contact = () => {
    return (
        <div className="container-contact">
            
            <div className="image-section-contact">
                <img src={MobileImage} alt="Mobile No" className="image-round" />
                <h2 className="headline-contact">Mobile No.</h2>
                <p className="description-contact">+91 9702260296</p>
            </div>

            <div className="image-section-contact">
                <img src={EmailImage} alt="Mail" className="image-round" />
                <h2 className="headline-contact">E-Mail</h2>
                <p className="description-contact">contact@padoshiassociates.com</p>
            </div>

            <div className="image-section-contact">
                <img src={AddressImage} alt="Address" className="image-round" />
                <h2 className="headline-contact">Address</h2>
                <p className="description-contact">Address: 1302, Ashtha Heights, Jawahar Nagar, Goregaon West, Mumbai – 400104</p>
            </div>
        </div>
    );
};

export default Contact;
