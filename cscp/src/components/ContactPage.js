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
    <div className="contact-page text-center" style={{ color: 'white' }}>
      <h1 className="my-special">Contact us</h1>

      <div className="contact-info" style={{ color: 'yellow' }}>
        <p className="my-special-paragraph">Contact Email: Aharonmathewswebmaster@opcoder.vazha</p>
      </div>
      <div>
        <p>Please provide your contact info</p>
      </div>
      <br></br>
      <form>
        <label htmlFor="name" style={{ color: 'green' }}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" style={{ color: 'green' }}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message" style={{ color: 'green' }}>Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <div>
          <button type="button" style={{ color: 'green' }} onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      {confirmation && (
        <div>
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      )}

      {/* Social Media Icons */}
      
    <div className="social-icons">
      <a href="https://www.instagram.com/" target="_blank" className="icon-button"><FaInstagram /></a>
      <a href="https://twitter.com/" target="_blank" className="icon-button"><FaTwitter /></a>
      <a href="https://www.linkedin.com/" target="_blank" className="icon-button"><FaLinkedin /></a>
    </div>

    </div>
  );
};

export default ContactPage;
