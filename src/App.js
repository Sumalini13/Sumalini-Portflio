import React from 'react';

import Gallery from './components/Card'; 
import Timeline from './components/Header';
import Slideshow from './components/Slideshow';
import CardWithDescription from './components/profile';
import Navbar from './components/navbar';
import ImageWithDescription from './components/passion';
import Contact from './components/Contact';
import VideoWithDescription from './components/VideoWithDescription';
import './App.css';
import cv from './images/cv.jpg';
function App() {
  return (
    <div className="App">
    <div className="App2">
    <Navbar/>
    <br></br> <br></br> <br></br> <br></br> 
   <center> <CardWithDescription/></center>
    <br></br> <br></br> <br></br> <br></br> <br></br>
    </div>
    <div className='two1 alt-two1'> <h1><span>Technical Skills</span></h1></div>
    <Timeline/>
 
    <br></br> <br></br> <br></br>

    <div className="App1">
    
    <div class="two alt-two">
  <h1>
    <span>Achievements</span>
  </h1>
</div>
    <Slideshow/>


  
</div>
<div class="nine">
<div className='two1 alt-two1'> <h1><span>Projects</span></h1></div>

  <Gallery/>
  </div>
  <div>
 
  <VideoWithDescription
        videoId="RSqBSs8o0lI"// Replace with actual YouTube video ID
        title="Debug Entity"
        description="I am happy and super proud to say that I have 
        contributed and encouraged my team to develop innovative approach for real-time problems and We have achieved prizes and rewards for our phenomenol works,
        It is  proud and happy to say that We emerged as team and developed together as best innovators as individual ."
      />
      </div>
        <div className="App3">
          <br></br>
          <div class="two alt-two">
  <h1>
    <span>I am Passionate on</span>
  </h1>
</div>
<ImageWithDescription/>
</div>
<div>
<Contact/>
</div>
</div>
    
  );
}
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

export default App;
