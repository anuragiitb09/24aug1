import React, { useState } from 'react';
import './Query.css';

const Query = () => {
    const [data, setData] = useState({
        name: "",
        mobile: "",
        email: "",
        designation: "",
        organization: "",
        officeAddress: "",
        city: "",
        querySubject: "",
        query: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    //const [showFields, setShowFields] = useState(true); 

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch("https://v1.nocodeapi.com/anuragpachgade/google_sheets/rCkXllGeoIUYcCxE?tabId=Sheet1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([[data.name, data.mobile, data.email, data.designation, data.organization, data.officeAddress, data.city, data.querySubject, data.query]])
            });

            if (response.status === 200) {
                console.log("Data sent successfully");
                setSubmitted(true);
                setShowPopup(true);
                
                // Clear form data
                setData({
                    name: "",
                    mobile: "",
                    email: "",
                    designation: "",
                    organization: "",
                    officeAddress: "",
                    city: "",
                    querySubject: "",
                    query: "",
                });
            } else {
                console.error("Failed to send data:", await response.text());
            }

        } catch (err) {
            console.error("An error occurred:", err);
        }
    };

    return (
        <div className="bg-white flex justify-center items-center h-screen">
            {submitted && showPopup ? (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded shadow-md">
                        <p>We will reach you in 24hrs</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            ) : null}

            <div style={{ width: "1000px" }} className="w-inc bg-white p-8 rounded shadow-md">
                <h2 className="text-4xl font-bold mb-4 text-black text-center">Query</h2>
               
                {showFields && (
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 text-black">
                        <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} />
                        <input type="text" name="mobile" placeholder="Mobile Number" value={data.mobile} onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email Address" value={data.email} onChange={handleChange} />
                        <input type="text" name="designation" placeholder="Designation" value={data.designation} onChange={handleChange} />
                        <input type="text" name="organization" placeholder="Organization" value={data.organization} onChange={handleChange} />
                        <input type="text" name="officeAddress" placeholder="Office Address" value={data.officeAddress} onChange={handleChange} />
                        <input type="text" name="city" placeholder="City" value={data.city} onChange={handleChange} />
                        <input type="text" name="querySubject" placeholder="Query Subject" value={data.querySubject} onChange={handleChange} />
                        <textarea name="query" placeholder="Your Query" value={data.query} onChange={handleChange} className="col-span-2"/>
                        <div className="col-span-2">
                            <button type="submit" className="bg-green-400 hover:bg-green-400 focus:bg-green-400">Submit</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Query;
