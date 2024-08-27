import { Content } from 'next/font/google'
import { headers } from 'next/headers'
import React from 'react'
import Image from 'next/image'

const Section1 = () => {
    const golds = [
        {
            headers: "Gold Bars",
            content: "(1oz gold bars - 400 oz)",
        },
        {
            headers: "Gold Bars",
            content: "(1oz gold bars - 400 oz)",
        },
        {
            headers: "Gold Bars",
            content: "(1oz gold bars - 400 oz)",
        },
        {
            headers: "Gold Bars",
            content: "(1oz gold bars - 400 oz)",
        },
        {
            headers: "Gold Bars",
            content: "(1oz gold bars - 400 oz)",
        },
        {
            headers: "Gold Bars",
            content: "(1oz gold bars - 400 oz)",
        },
    ]
  return (
    <>
        <div className='bg-white flex justify-center gap-[20px] py-[10px]'>
          <div className='flex flex-col text-center w-[30vw]'>
                {
                    golds.map((g,index)=>(
                        <div className='border-2 bg-[#D3D3D3] h-[15vh] flex flex-col justify-center' key={index}>
                            <h3 className='text-black text-[17px]'>{g.headers}</h3>
                            <p className='text-[#696969]'>{g.content}</p>
                        </div>
                    ))
                }
          </div>
            <div className='flex gap-[20px] '>
            <div>
               <Image className='h-[90vh] w-[25vw] rounded-lg object-cover' src='/images/gold-bar2.jpg' width={500} height={300}/> 
            </div>
            <div>
               <Image className='h-[90vh] w-[25vw] object-cover rounded-lg' src='/images/gold-bar2.jpg' width={500} height={300}/> 
            </div>
            </div>
        </div>
    </>
  )
}

export default Section1