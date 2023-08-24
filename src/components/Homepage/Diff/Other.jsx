import React from 'react';
import './Other.css';
import otherImage from '../assests/Other.jpg'; // Adjust the path as necessary
//import otherImage from '../assests/Indirect.png'; 
const Other = () => {
    return (
        <div className="other-card">
            <img className="other-image" src={otherImage} alt="Other Services" />
            <div className="other-content">
                <h2 className="other-title">Other Services</h2>
                <ul className="other-list">
                    <li>Business planning and forecasting</li>
                    <li>Support in preparing CMA Report</li>
                    <li>Transaction Analysis from Financial and Tax viability</li>
                    <li>Any Certification Work</li>
                </ul>
            </div>
        </div>
    );
}

export default Other;
