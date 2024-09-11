// Timeline.js
import React from 'react';

import pic1 from '../images/t1.jpg';
import pic2 from '../images/t2.jpg';
import pic3 from '../images/t3.jpg';
import pic4 from '../images/t4.jpg';
import pic5 from '../images/t5.jpg';
import pic6 from '../images/t6.jpg';


import './Timeline.css'; // Import the CSS file



const imageData = [
  { src: pic1, description: 'I have skilled in MySql with strong foundation on databases' },
  { src: pic2, description: 'I have developed frontend interface for my project with innovative styling' },
  { src: pic3, description: 'I am currently working on Machine Learning to deep dive into interesting algorithms' },
  { src: pic4, description: 'I have developed my foundational skills in problem solving using JAVA' },
  { src: pic5, description: 'I have skill in python and upgrading myself for new cutting edge algorithms' },
  { src: pic6, description: 'I have worked in SpringBoot for integrating my application in Backend' },

];

const Timeline = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        <div className="line"></div>
        {imageData.map((image, index) => (
          <div
            key={index}
            className={`image-container ${index % 2 === 0 ? 'up' : 'down'}`}
          >
            <div className="image-wrapper">
              <img src={image.src} alt={`Image ${index + 1}`} className="timeline-img" />
              <div className="dot">{/* Pinpointing dot */}
            </div>
            <div className="description">{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
