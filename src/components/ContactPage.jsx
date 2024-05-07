
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
    
    setConfirmation(true);
  };

  return (
    <div className='text-center mb-10'>
      <h1 className="text-3xl text-white mb-6">Contact us</h1>

      <div className="contact-info" style={{ color: 'yellow' }}>
        <p className="text-white">Contact Email: aharonmathews04@gmail.com</p>
      </div>
      <div>
        <p className='text-white mb-6'>Please provide your contact info</p>
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
          className='text-white'
          placeholder='Email'
        ></input>

        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className='bg-white'
          placeholder='Message'
        ></textarea>
        <div>
          <button type="button" className='text-white hover' onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      {confirmation && (
        <div>
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      )}
      
    <div className="social-icons">
      <a href="https://www.instagram.com/" target="_blank" className="icon-button"><FaInstagram /></a>
      <a href="https://twitter.com/" target="_blank" className="icon-button"><FaTwitter /></a>
      <a href="https://www.linkedin.com/" target="_blank" className="icon-button"><FaLinkedin /></a>
    </div>

    </div>
  );
};

export default ContactPage;
