import React from 'react';
import './Contact.css';

const ContactUs = () => {
    return (
        <div className="container-contact">
            
            <div className="row">
                <img src="anu.jpg" alt="Description 1" className="image-round"/>
                <img src="anu1.jpg" alt="Description 2" className="image-round"/>
                <img src="anu2.jpg" alt="Description 3" className="image-round"/>
            </div>

            <div className="row">
                <h2 className="headline-contact">Headline 1</h2>
                <h2 className="headline-contact">Headline 2</h2>
                <h2 className="headline-contact">Headline 3</h2>
            </div>

            <div className="row">
                <p className="description-contact">Description for the first image.</p>
                <p className="description-contact">Description for the second image.</p>
                <p className="description-contact">Description for the third image.</p>
            </div>

        </div>
    );
};

export default ContactUs;
