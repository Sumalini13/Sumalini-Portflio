// VideoWithDescription.js
import React from 'react';
import './VideoWithDescription.css';

const VideoWithDescription = ({ videoId, title, description }) => {
  return (
    <div className="video-container">
      <div className="video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      </div>
      <div className="description12">
      <div className='two1 alt-two1'> <h1><span>{title}</span></h1></div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoWithDescription;
