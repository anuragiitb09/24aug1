import React from 'react';
import './Contact.css';
import Grow from '../assets/grow.jpg';
import Handshake from '../assets/handshake.jpg';
import Trust from '../assets/trust.jpg';

const Contact = () => {
    return (
        <div className="container-contact">
            
            <div className="image-section-contact">
                <img src={Grow} alt="Mobile No" />
                <h2 className="headline-contact">Mobile No.</h2>
                <p className="description-contact">+91 9702260296</p>
            </div>

            <div className="image-section-contact">
                <img src={Handshake} alt="Mail" />
                <h2 className="headline-contact">E-Mail</h2>
                <p className="description-contact">contact@padoshiassociates.com</p>
            </div>

            <div className="image-section-contact">
                <img src={Trust} alt="Address" />
                <h2 className="headline-contact">Address</h2>
                <p className="description-contact">Address: 1302, Ashtha Heights, Jawahar Nagar,<br/>Goregaon West, Mumbai – 400104</p>
            </div>
        </div>
    );
};

export default Contact;
