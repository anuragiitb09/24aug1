import React from 'react';

const Query = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // You can access the form data using event.target.elements
    // Example: event.target.elements.name.value
  };

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-bold mb-4 text-black text-center">INQUERY</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 text-black">
          <input type="text" name="name" placeholder="Name*" required />
          <input type="text" name="designation" placeholder="Designation" />
          <input type="text" name="organization" placeholder="Organization" />
          <input type="text" name="officeAddress" placeholder="Office Address" />
          <input type="text" name="city" placeholder="City" />
          <input type="email" name="email" placeholder="E-mail address*" required />
          <input type="tel" name="telephone" placeholder="Telephone No." />
          <input type="tel" name="mobile" placeholder="Mobile*" required />
          <div>
            <label>Yes</label>
            <input type="radio" name="yesNo" value="yes" />
            <label>No</label>
            <input type="radio" name="yesNo" value="no" />
          </div>
          <input type="text" name="querySubject" placeholder="Subject of Query*" required />
          <textarea name="query" placeholder="Query" rows="4"></textarea>
          <button type="submit" className="bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Query;
