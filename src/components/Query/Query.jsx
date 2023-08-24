import React, { useState } from 'react';
import axios from 'axios';
import './Query.css';

const Query = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    officeAddress: '',
    city: '',
    email: '',
    telephone: '',
    mobile: '',
    yesNo: 'yes',
    querySubject: '',
    query: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    sendDataToServer(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendDataToServer = (data) => {
    axios
      .post('/api/items', data)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('An error occurred while sending data:', error);
      });
  };

  return (
    <div className="bg-green-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-black text-center">Query</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 text-black">
          <div>
            <div className="form-row">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field border-black"
              />
            </div>
            <div className="form-row">
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder=""
                value={formData.organization}
                onChange={handleChange}
                className="input-field border-black"
              />
            </div>
            <div className="form-row">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder=""
                value={formData.city}
                onChange={handleChange}
                className="input-field border-black"
              />
            </div>
            <div className="form-row">
              <label htmlFor="query">Your Query</label>
              <textarea
                id="query"
                name="query"
                placeholder=""
                rows="4"
                value={formData.query}
                onChange={handleChange}
                className="input-field border-black"
              />
            </div>
          </div>
          <div>
            <div className="form-row">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                id="designation"
                name="designation"
                placeholder=""
                value={formData.designation}
                onChange={handleChange}
                className="input-field border-black"
              />
            </div>
            <div className="form-row">
              <label htmlFor="officeAddress">Office Address</label>
              <input
                type="text"
                id="officeAddress"
                name="officeAddress"
                placeholder=""
                value={formData.officeAddress}
                onChange={handleChange}
                className="input-field border-black"
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field border-black"
              />
            </div>
            <div className="form-row">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder=""
                value={formData.mobile}
                onChange={handleChange}
                className="input-field border-black"
              />
            </div>
            <div className="form-row">
              <label htmlFor="querySubject">Query Subject</label>
              <input
                type="text"
                id="querySubject"
                name="querySubject"
                placeholder=""
                value={formData.querySubject}
                onChange={handleChange}
                className="input-field border-black"
              />
            </div>
          </div>
          <div className="col-span-2">
            <button type="submit" className="bg-green-400 text-white font-bold py-2 px-4 rounded">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Query;
