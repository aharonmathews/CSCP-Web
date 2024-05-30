// ContactPage.js
import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // Here you can implement additional logic, such as sending the form data to a server
    // For simplicity, let's just display a confirmation message
    setConfirmation(true);
  };

  return (
    <div className=" text-center" style={{ color: '#BBE1FA' }}>
      <h1 className="text-center mb-6 text-[#BBE1FA] text-4xl">Contact us</h1>

      <div className=" text-[#BBE1FA]">
        <p className="text-xl mb-6">Contact Email: aharonmathews04@gmail.com</p>
      </div>
      <div>
        <p>Please provide your contact info</p>
      </div>
      
      <form className='flex flex-col items-center'>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='Name'
        />


        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Email'
        />


        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder='Enter your message'
        ></textarea>
        <div>
          <button className='border-b-2 hover:border-b-[#BBE1FA] bg-[#BBE1FA] text-[#1a2e3b] font-medium' onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      {confirmation && (
        <div>
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      )}


      
    <div className="social-icons ">
      <a href="https://www.instagram.com/" target="_blank" className="icon-button"><FaInstagram /></a>
      <a href="https://twitter.com/" target="_blank" className="icon-button"><FaTwitter /></a>
      <a href="https://www.linkedin.com/" target="_blank" className="icon-button"><FaLinkedin /></a>
    </div>

    </div>
  );
};

export default ContactPage;
