import React from 'react';
import './Contact.css';

const ContactUs = () => {
    return (
        <div className="container">
            
            <div className="image-section">
                <img src="path_to_image1.jpg" alt="Description 1" className="image-round"/>
                <h2 className="headline">Headline 1</h2>
                <p className="description">Description for the first image.</p>
            </div>

            <div className="image-section">
                <img src="path_to_image2.jpg" alt="Description 2" className="image-round"/>
                <h2 className="headline">Headline 2</h2>
                <p className="description">Description for the second image.</p>
            </div>

            <div className="image-section">
                <img src="path_to_image3.jpg" alt="Description 3" className="image-round"/>
                <h2 className="headline">Headline 3</h2>
                <p className="description">Description for the third image.</p>
            </div>
        </div>
    );
};

export default ContactUs;
