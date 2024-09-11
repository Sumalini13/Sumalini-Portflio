import React from 'react';
import Slider from 'react-slick';
import pic2 from '../images/pic2.jpg';
import pic5 from '../images/pic15.jpg';
import pic10 from '../images/pic10.jpg';
import pic12 from '../images/pic12.jpg';
import './Slideshow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    src: pic2,
    alt: "Slide 1",
    title: " Women Hackathon 24'",
    description: " A proud achievement by my team ,a force of all-star women in tech, just conquered the Women Hackathon-24 conducted by Tamilnadu Advance Manufacturing Centre of Excellence, KIT-Kalaignarkarunanidhi Institute of Technology, and Dassault Systèmes, bagging a Special Prize with cash prize of 10k. A medical marvel!⚕️ A cutting-edge medical image analysis application built with Python, Streamlit, and Google's Generative AI (Gen AI) model. "
  },
  {
    src: pic5,
    alt: "Slide 2",
    title: "Smart India Hackathon 23'",
    description: "Participated in India's Prestigious Smart India Hackathon 2023 Finals and built a significant project Sentiment Analysis Tool for Social Media Presence (TrendTrove). Here, I built both the backend and frontend components. The backend system, developed in Flask, integrates machine learning models to analyze comments, images, videos, and text messages for potential threats or abuse. The frontend, built with React, provides users with intuitive visualizations and real-time insights into social media sentiment."
  },
  {
    src: pic12,
    alt: "Slide 3",
    title: "Karthvya Hackathon",
    description: "The work of Debug Entity  has been recognized as team of excellence and ranked Top 10 among 70 teams in Karthavya-48 hour hackathon on the theme of Solid Waste Management held at Jyothi Engineering College ,Thirssur. The problem statement approached is to help sanitation workers and create a stress and hazzle free app for collecting waste.I developed EcoSmart Waste Management that automates waste segregation using AI, ML and sensors, reducing health risks."}, 
  {
    src: pic10,
    alt: "Slide 4",
    title: " Quant-A-Maze",
    description: " I have participated in India's first Quantum Hackathon( QUANT-A-MAZE) conducted by NITTE in Bangalore. The team I contributed my work have shortlisted among 120+ teams for the final round . I worked on Credit Card Transaction Fraud Detection system and implemented the frontend interface to ensure a smooth user experience, enabling real-time monitoring and analysis."
  }
];


const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="side" id="achievements">
      <div className="slideshow-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="seven"><h1>{slide.title}</h1></div> {/* Add title here */}
              <div className="slide-description">{slide.description}</div>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slideshow;


