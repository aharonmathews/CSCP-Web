// ContactPage.js
import { useState } from 'react';
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
    <div className="text-center text-white bg-slate-900 p-10">
      <h1 className="my-special text-[35px] mb-2">Contact us</h1>

      
        <p className="text-xl text-yellow-300">Email: CSCP@CET.com</p>

      
        
      
      <form className='mt-2 text-green mb-4 box-border rounded-lg border-gray-300'>
        <p className='text-xl'>Give us your suggestions!</p>
        <label className='text-green-500 '>Name:</label>
        <input
          className='bg-black text-green p-4 mb-4 w-{20} box-border rounded-lg border-white border-l border-r border-t border-b h-10'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className='text-green-500'>Email:</label>
        <input
          className='bg-black text-green p-4 mb-4 w-{20} box-border rounded-lg border-white border-l border-r border-t border-b h-10'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className='text-green-500'>Message:</label>
        <textarea
          className='bg-black text-green p-4 mb-4 w-{20} box-border rounded-lg border-white border-l border-r border-t border-b'
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <div>
          <button type="button" className='text-cyan-950 bg-slate-50 text-center padding-10' onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      {confirmation && (
        <div>
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      )}
      
    <div className="mt-4">
      <a href="https://www.instagram.com/" className="inline-block text-white text-3xl p-3 hover:shadow-xl hover:shadow-color-blue-600"><FaInstagram /></a>
      <a href="https://twitter.com/"  className="inline-block text-white text-3xl p-3 hover:shadow-xl hover:shadow-color-blue-600"><FaTwitter /></a>
      <a href="https://www.linkedin.com/" className="inline-block text-white text-3xl p-3 hover:shadow-xl hover:shadow-color-blue-600"><FaLinkedin /></a>
    </div>

    </div>
  );
};

export default ContactPage;
