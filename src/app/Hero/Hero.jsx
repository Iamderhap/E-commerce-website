"use client"
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const hero = [
    {
      name: "chrismi",
      description: "hello world",
      
    },
    {
      name: "happiness",
      description: "Bf needed urgently",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  function handleslide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % hero.length);
  }

  useEffect(() => {
    const slideInterval = setInterval(handleslide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='w-[100%] h-[70vh] bg-blue-500 flex items-center justify-center'>
      <div>
        <h1>{hero[currentSlide].name}</h1>
        <p>{hero[currentSlide].description}</p>
      </div>
    </div>
  );
};

export default Hero;
