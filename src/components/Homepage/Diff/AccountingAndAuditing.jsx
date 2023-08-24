import React from 'react';
import './AccountingAndAuditing.css';
import accountingImage from '../assests/change.png'; // Adjust the path as necessary

const AccountingAndAuditing = () => {
    return (
       

            <div className="accounting-auditing-card">
                <img className="accounting-auditing-image" src={accountingImage} alt="Accounting & Auditing" />
                <div className="accounting-auditing-content">
                    <h2> Accounting & Auditing</h2>
                    <ul>
                        <li>Periodical review of books of accounts</li>
                        <li>Accounting Support (End to End or part of the accounting)</li>
                        <li>Support in setting up Accounting Processes and preparing SOPs</li>
                        <li>Payroll processing Support and its related accounting</li>
                        <li>Statutory Audit</li>
                        <li>Internal Audit</li>
                        <li>Miscellaneous Audits (Stock Audit, Fixed Asset Audit etc.)</li>
                    </ul>
                </div>
            </div>
       
    );
}

export default AccountingAndAuditing;
