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
                        <div className='border-2 text-white bg-[#D3D3D3] h-[10vh] flex flex-col text-center' key={index}>
                            <h3>{g.headers}</h3>
                            <p>{g.content}</p>
                        </div>
                    ))
                }
          </div>
            <div>
               <Image className='h-[60vh] w-[25vw]' src='/images/gold-bar2.jpg' width={500} height={300}/> 
            </div>
            <div>
               <Image className='h-[60vh] w-[25vw]' src='/images/gold-bar2.jpg' width={500} height={300}/> 
            </div>
        </div>
    </>
  )
}

export default Section1