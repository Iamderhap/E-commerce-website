"use client"
import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Section3b = () => {
    const shop = [
        {
            headers: "Strong & healthy organic fruits",
            Content: "35% off on first order",
            btn: "Shop Now",
        },
        {
            headers: "Strong & healthy organic fruits",
            Content: "35% off on first order",
            btn: "Shop Now",
        },
        {
            headers: "Strong & healthy organic fruits",
            Content: "35% off on first order",
            btn: "Shop Now",
        },
        {
            headers: "Strong & healthy organic fruits",
            Content: "35% off on first order",
            btn: "Shop Now",
        },
       
    ]
    
    const item =  shop.map((s,index)=>(
        <div key={index} className="bg-[url('/images/fresh.jpg')] bg-cover bg-center px-[20px] rounded h-50 w-[90%] flex flex-col gap-[10px] py-[50px]">
               <p className='w-[13vw] font-semibold text-[20px] text-black'>{s.headers}</p>
               <p className='text-white'>{s.Content}</p>
               <button className='bg-[#FFD700] py-[10px] px-[10px] font-bold w-[10vw] text-white'>{s.btn}</button>
         </div>
           ))

           const responsive = {
            0: {
              items: 3,
            },
            512: {
              items: 5,
            },
            1024: {
              items: 7,
            },
          };
  return (
    <>
            <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={item}
            autoPlay
            animationDuration={1000}
            />
    </>
  )
}

export default Section3b