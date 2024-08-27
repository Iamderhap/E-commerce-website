"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Countdown from 'react-countdown';

const Section4 = () => {
    const date = <Countdown date={Date.now () + 100000000} />
    useEffect(() => {
        date
    }, )
    

  return (
    <>
        <div className='bg-[#FFD700] flex justify-around h-[80vh] items-center'>
            <div className='border-2 flex flex-col w-[33%] h-[40vh] py-[20px] justify-center bg-[#f5ecbcf6] px-[20px] gap-[3px] rounded-[10px]'>
                <p>35% OFF</p>
                <h3 className='font-bold text-[25px]'>Great deal on organic food.</h3> 
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis</p>
               <div className='flex flex-col gap-[15px]'>
               {
                    date &&
                    <p className='font-bold text-[25px]'>{date}</p>
                }
                <p>Days : Hrs: Min: sec:</p>
               </div>
            </div>
            <div className='rotate-[90] '>
                <Image className='w-[50vw] rounded-[10px]' src="/images/handd-gold.jpeg" width={300} height={500} />
            </div>
        </div>
    </>
  )
}

export default Section4