import React from 'react';
import gif1 from '../images/gif1.gif';
import gif2 from '../images/gif2.gif';
import gif3 from '../images/gif3.gif';
import gif4 from '../images/gif4.gif';
import gif5 from '../images/gif5.gif';
import '../components/passion.css'; // Import the separate CSS file

const CardWithImageAndDescription = () => {
  return (
    <div className="card1">
      <div className="description1">
        <ul>
          <div className="eight">
            <li>
              <img src={gif1} alt="Developing Full-stack Applications GIF" className="gif-image" />
              Developing Full-stack Applications
            </li>
            <li>
              <img src={gif2} alt="Participating in Hackathons GIF" className="gif-image" />
              Participating in Hackathons
            </li>
            <li>
              <img src={gif3} alt="Working on innovative Solutions GIF" className="gif-image" />
              Working on innovative Solutions
            </li>
            <li>
              <img src={gif4} alt="Professional Classical Dancer GIF" className="gif-image" />
              Professional Classical Dancer
            </li>
            <li>
              <img src={gif5} alt="Encouraging team to build creative ideas GIF" className="gif-image" />
              Encouraging team to build creative ideas
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CardWithImageAndDescription;
