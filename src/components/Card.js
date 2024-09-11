// // Gallery.js
// import React from 'react';

// import pic1 from '../images/p1.jpg';
// import pic2 from '../images/p2.jpg';
// import pic3 from '../images/p3.jpg';
// import pic4 from '../images/p4.jpg';
// import pic5 from '../images/p5.jpg';
// import { RxFontFamily } from 'react-icons/rx';


// const imageData = [
//   { src: pic5, description: ' Wastify, a smart bin monitoring system for waste segregation, which uses machine learning to classify waste and promote composting, fostering sustainability and environmental consciousness."' },
//   { src: pic4, description: 'A medical marvel! A cutting-edge medical image analysis application . Upload medical images and receive instant analysis, detailed reports, prescription analysis and potential treatment suggestions.' },
//   { src: pic1, description: ' An AI solution leveraging Natural Language Processing (NLP) to emulate human-like understanding of text and speech, focusing on language translation, spoken command responses, and enhancing emotional recognition capabilities.' },
//   { src: pic3, description: 'Espial is user-friendly website to ensure real-time anomaly detection for effective credit card fraud prevention. Seamlessly navigate a secure financial experience with our cutting-edge technology.' },
//   { src: pic2, description: ' A sophisticated tool  analyze sentiments across various forms of content such as text, audio, and video with Twitter and YouTube APIs to decode public sentiments in real-time, providing valuable insights for enhancing social media presence . ' },

  


// ];

// const Gallery = () => {
//   return (
//     <div style={galleryStyle} id="projects">
//       {imageData.slice(0, 5).map((image, index) => (
//         <div
//           style={{ ...cardStyle }}
//           key={index}
//           onMouseEnter={(e) => e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow}
//           onMouseLeave={(e) => e.currentTarget.style.boxShadow = cardStyle.boxShadow}
//         >
//           <img src={image.src} alt={`Image ${index + 1}`} style={cardImgStyle} />
//           <div style={descriptionStyle}>{image.description}</div>
//         </div>
//       ))}
//     </div>
//   );
// };


// // Inline Styles
// const galleryStyle = {
//   display: 'flex',
//   // overflowX: 'scroll', // Horizontal scrollbar for more cards
//   padding: '40px',
//   gap: '20px', // Gap between cards
//   whiteSpace: 'nowrap',
// };
// const cardStyle = {
//   width: '240px',
//   height: '335px', // Increase height to accommodate text and content
//   flexShrink: 0, // Prevents the card from shrinking
//   border: '1px solid #ddd',
//   borderRadius: '8px',
//   boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//   padding: '15px', // Adjust padding to fit more content
//   backgroundColor: '#fff',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'flex-start', // Align content to the top to ensure room for text
//   transition: 'box-shadow 0.3s ease', // Smooth transition for the shadow
// };
// // Add hover effect for shadow
// const cardHoverStyle = {
//   boxShadow: '0 12px 24px rgba(0, 0, 0, 0.8)', // Increase the shadow on hover
// };

// const cardImgStyle = {
//   width: '270px',
//   height: '150px',
//   objectFit: 'cover',
//   borderRadius: '8px',
//   marginTop:'-14px',
// };

// const descriptionStyle = {
//   fontSize: '15px',
//   color: 'black',
//   textAlign: 'center',
//   marginTop: '25px',
//   objectFit: 'cover',
//   overflow: 'hidden', // Prevent text overflow
//   wordWrap: 'break-word',
//   whiteSpace: 'normal', // Allow text to wrap to the next line
// };



// export default Gallery;


import React from 'react';

import pic1 from '../images/p1.jpg';
import pic2 from '../images/p2.jpg';
import pic3 from '../images/p3.jpg';
import pic4 from '../images/p4.jpg';
import pic5 from '../images/p5.jpg';

const imageData = [
  { src: pic5, description: 'Wastify, a smart bin monitoring system for waste segregation, which uses machine learning to classify waste and promote composting, fostering sustainability and environmental consciousness.' },
  { src: pic4, description: 'A medical marvel! A cutting-edge medical image analysis application. Upload medical images and receive instant analysis, detailed reports, prescription analysis, and potential treatment suggestions.' },
  { src: pic1, description: 'An AI solution leveraging Natural Language Processing (NLP) to emulate human-like understanding of text and speech, focusing on language translation, spoken command responses, and enhancing emotional recognition capabilities.' },
  { src: pic3, description: 'Espial is a user-friendly website to ensure real-time anomaly detection for effective credit card fraud prevention. Seamlessly navigate a secure financial experience with our cutting-edge technology.' },
  { src: pic2, description: 'A sophisticated tool to analyze sentiments across various forms of content such as text, audio, and video with Twitter and YouTube APIs to decode public sentiments in real-time, providing valuable insights for enhancing social media presence.' },
];

const Gallery = () => {
  return (
    <div style={galleryStyle} id="projects">
      {imageData.map((image, index) => (
        <div
          style={cardStyle}
          key={index}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = cardStyle.boxShadow}
        >
          <img src={image.src} alt={`Image ${index + 1}`} style={cardImgStyle} />
          <div style={descriptionStyle}>{image.description}</div>
        </div>
      ))}
    </div>
  );
};

// Inline Styles
const galleryStyle = {
  display: 'flex',
  flexWrap: 'wrap', // Allow wrapping of cards
  justifyContent: 'center', // Center content
  gap: '20px',
  padding: '40px',
};

const cardStyle = {
  width: '240px',
  height: '335px',
  flexShrink: 0,
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  padding: '15px',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  transition: 'box-shadow 0.3s ease',
};

const cardHoverStyle = {
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.8)', // Increase shadow on hover
};

const cardImgStyle = {
  width: '100%', // Make the image responsive to the card width
  height: '150px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginTop: '-14px',
};

const descriptionStyle = {
  fontSize: '15px',
  color: 'black',
  textAlign: 'center',
  marginTop: '25px',
  overflow: 'hidden',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
};

// Media query for responsiveness
const mediaQueryStyle = `
  @media (max-width: 768px) {
    .gallery {
      padding: 20px;
    }

    .card {
      width: 100%; // Full width on smaller screens
      height: auto; // Adjust height for content
    }

    .card img {
      height: 200px; // Increase image height on smaller screens
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 100%; // Full width on mobile
    }

    .card img {
      height: 150px;
    }
  }
`;

// Apply media query as inline style
const styleElement = document.createElement('style');
styleElement.innerHTML = mediaQueryStyle;
document.head.appendChild(styleElement);

export default Gallery;
