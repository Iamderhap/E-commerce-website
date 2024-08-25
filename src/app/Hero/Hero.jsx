"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const hero = [
    {
      name: "BUY YOU REAL GOLD HERE",
      description: "PURCHASE YOUR TOPNOTCH QUALITY GOLD AT KRISPPY TODAY! ",
      img: "/images/gold-bar2.jpg",
      btn: "Shop Now",
    },
    {
      name: "TESTED AND TRUSTED",
      description: "WELCOME TO HOME OF QUALITY. WE ARE HAPPY TO MAKE YOU GLITTER",
      img: "/images/gold-bar3.jpg",
      btn: "Shop Now",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  function handleslide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % hero.length);
  }

  useEffect(() => {
    const slideInterval = setInterval(handleslide, 5000); 
    return () => clearInterval(slideInterval); 
  }, []);

  return (
    <div className=' h-[70vh] bg-black flex items-center justify-around'>
        <div className='flex justify-center w-[70%] items-center'>
          <div className='flex flex-col gap-[20px] text-white'>
            <h1 className='w-[100%] font-bold text-[25px]'>{hero[currentSlide].name}</h1>
            <p className='w-[70%]'>{hero[currentSlide].description}</p>
            <div className='bg-[#FFD700] w-[30%] text-center text-white py-[10px] font-bold rounded-[5px]'>
              <button>{hero[currentSlide].btn}</button>
            </div>
          </div>
          <div className='w-[50%]'>
            <Image src={hero[currentSlide].img} 
              alt={hero[currentSlide].name} 
              width={500} 
              height={300} />
          </div>
        </div>
    </div>
  );
};

export default Hero;
