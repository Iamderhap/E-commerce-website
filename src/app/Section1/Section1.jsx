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
        <div className='bg-[black]'>
          <div className=''>
                {
                    golds.map((g,index)=>(
                        <div className='border-2 text-white' key={index}>
                            <h3>{g.headers}</h3>
                            <p>{g.content}</p>
                        </div>
                    ))
                }
          </div>
            <div>
               <Image src='/bangless.png' width={500} height={300}/> 
            </div>
            <div></div>
        </div>
    </>
  )
}

export default Section1