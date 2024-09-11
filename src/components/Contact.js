import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import SumaliniResume from '../documents/SUMALINI G V(RESUME).pdf';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDrJTIY-4UhXo9G5FTC7Wg98rVYyKzcFWE",
  authDomain: "sumaliniportfolio.firebaseapp.com",
  projectId: "sumaliniportfolio",
  storageBucket: "sumaliniportfolio.appspot.com",
  messagingSenderId: "655112703156",
  appId: "1:655112703156:web:5a851ea848965b6e219be1",
  measurementId: "G-L0CXFV6PWF"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date()
      });
      toast.success('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message: ', error);
      toast.error('Failed to send your message. Please try again.');
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-form">
        <div className="two1 alt-two1">
          <h1><span>Get in touch</span></h1>
        </div>
        <div className="social-icons1">
          <a href="http://www.linkedin.com/in/sumalini-gopinathan-19a506225" target="_blank" rel="noopener noreferrer" className="social-icon1"><FaLinkedin /></a>
          <a href="https://github.com/Sumalini13" target="_blank" rel="noopener noreferrer" className="social-icon1"><FaGithub /></a>
          <a href="mailto:sumalinigopi2003@gmail.com" className="social-icon1"><FaEnvelope /></a>
          <a href={SumaliniResume} download="Sumalini_Resume" target="_blank" rel="noopener noreferrer" className="social-icon1"><FaFileAlt /></a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="field">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="field">
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              fullWidth
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
        <ToastContainer />
      </div>
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Sumalini. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactForm;
