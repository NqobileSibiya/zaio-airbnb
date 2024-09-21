import React, { useState } from 'react';
import './BecomeHost.css'; // You can create custom styles for this component

const BecomeHost = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, send data to the backend or Firebase, etc.
    console.log(formData);
  };

  return (
    <div className="become-host">
      <h2>Become a Host</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyDetails">Property Details:</label>
          <textarea
            id="propertyDetails"
            name="propertyDetails"
            value={formData.propertyDetails}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BecomeHost;
