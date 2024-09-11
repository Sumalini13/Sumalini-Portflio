// Gallery.js
import React from 'react';

import pic1 from '../images/pic15.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic9.jpg';
import pic4 from '../images/pic7.jpg';
import pic5 from '../images/pic5.jpg';

const imageData = [
  { src: pic1, columnSpan: 2, rowSpan: 1 }, // Wider image
  { src: pic2, columnSpan: 1, rowSpan: 1 }, // Small square
  { src: pic3, columnSpan: 1, rowSpan: 2 }, // Tall image
  { src: pic4, columnSpan: 1, rowSpan: 1 }, // Small square
  { src: pic5, columnSpan: 2, rowSpan: 1 }, // Wider image

];

const Gallery1 = () => {
  return (
    <div style={galleryStyle}>
      {imageData.map((image, index) => (
        <div
          style={{
            ...cardStyle,
            gridColumn: `span ${image.columnSpan}`,
            gridRow: `span ${image.rowSpan}`,
          }}
          key={index}
        >
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            style={imgStyle}
          />
        </div>
      ))}
    </div>
  );
};

// Inline Styles
const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 150px)', // 4 columns
  gridTemplateRows: 'repeat(3, 150px)', // 3 rows
  gap: '5px',
  padding: '10px',
  overflowY: 'auto',
};

const cardStyle = {
  borderRadius: '6px',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
  position: 'relative',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export default Gallery1;
