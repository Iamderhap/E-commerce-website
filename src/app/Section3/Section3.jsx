import { Content } from 'next/font/google'
import { headers } from 'next/headers'
import { BiSupport } from "react-icons/bi";
import React from 'react'

const Section3 = () => {
    
    const content2 = [
        {
            // icon: ""
            header: "2X7 Support",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
            // icon: ""
            header: "2X7 Support",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
            // icon: ""
            header: "2X7 Support",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
            // icon: ""
            header: "2X7 Support",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
    ]
  return (
    <>
        <div className='flex flex-col gap-[100px] py-[40px]'>
            
            <div className='flex justify-center gap-[20px]'>
                {
                    content2.map((n,index)=>(
                        <div key={index} className='border-2 w-[20%] items-center flex text-center flex-col py-[20px] gap-[10px]'>
                        <p><BiSupport /></p>
                        <p>2X7 Support</p>
                        <p className='w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Section3