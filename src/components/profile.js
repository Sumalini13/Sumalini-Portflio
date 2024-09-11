import React from 'react';
import { FaPhone, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import SumaliniResume from '../documents/SUMALINI G V(RESUME).pdf';
const CardWithDescription = () => {
  return (
    <div style={styles.card} id="home">
      <div style={styles.description}>
        <p>
          Hello! I’m Sumalini, a CSE student with a zest for tackling challenges and crafting innovative solutions. Dive into my portfolio to see my creative and technical fusion. Excited to collaborate and create something extraordinary together!
        </p>

        

        <div className="social-icons" style={styles.socialIcons}>
          <a href="mailto:sumalinigopi2003@gmail.com" style={styles.iconLink}>
            <FaEnvelope />
          </a>
          <a href="http://www.linkedin.com/in/sumalini-gopinathan-19a506225" style={styles.iconLink}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/Sumalini13" style={styles.iconLink}>
            <FaGithub />
          </a>
        </div>

        <a href={SumaliniResume}  download="Sumalini_Resume" style={styles.button} target="_blank" rel="noopener noreferrer">
          <FaFileAlt style={styles.icon} /> Get my Resume
        </a>

      </div>
    </div>
  );
};

// Define some styles
const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center',
    margin: '0 auto', // Center the card horizontally
    width: '90%', // Responsive width
    maxWidth: '550px', // Maximum width
    height: '430px',
    borderRadius: '8px',
    marginRight: '50px',
    marginTop: '8%',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0)', // Increased box shadow
    padding: '20px',
    boxSizing: 'border-box', // Include padding and border in the element's total width and height
  },
  description: {
    width: '100%', // Full width of the card
    color: 'white', // Text color
    fontSize: '21px', // Responsive font size
    lineHeight: '1.5',
    fontWeight: '400', // Normal weight for better readability
    textAlign: 'center',
    marginLeft:'25px', // Center text for smaller screens
  },
  emailDisplay: {
    color: '#fff', // Color for email text
    fontSize: '1rem', // Font size for email display
    marginBottom: '10px', // Margin for spacing
    fontWeight: 'bold',
  },
  emailLink: {
    color: '#fff', // Color for email link
    textDecoration: 'none',
  },
  socialIcons: {
    margin: '10px 0', // Margin for spacing
    display: 'flex',
    justifyContent: 'center', // Center icons horizontally
    gap: '15px', // Space between icons
  },
  iconLink: {
    color: 'white', // Icon color
    fontSize: '1.5rem', // Responsive icon size
    textDecoration: 'none',
    background: 'none', // Remove button default styles
    border: 'none',
    cursor: 'pointer',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 20px',
    marginTop: '20px',
    borderRadius: '5px',
    backgroundColor: '#007BFF', // Button background color
    color: 'white', // Button text color
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    position: 'relative',
    zIndex:10,
  },
  icon: {
    marginRight: '8px', // Spacing between icon and text
  },
  buttonHover: {
    backgroundColor: '#0056b3', // Darker color for hover effect
  },
  '@media (maxWidth: 768px)': {
    card: {
      width: '100%',
      marginRight: '0',
      height: 'auto', // Adjust for smaller screens
    },
    description: {
      fontSize: '10px',
      textAlign: 'center',
    },
    button: {
      fontSize: '0.9rem',
      padding: '8px 16px',
      width: '100%', 
      position: 'relative',
      zIndex:10,
    },
    iconLink: {
      fontSize: '1.2rem',
    },
  },

  '@media (maxWidth: 480px)': {
    card: {
      height: 'auto',
      padding: '10px',
    },
    description: {
      fontSize: '10px',
    },
    button: {
      fontSize: '0.85rem',
      width: '100%',
      position: 'relative',
      zIndex:10,
    },
  },
};

export default CardWithDescription;
