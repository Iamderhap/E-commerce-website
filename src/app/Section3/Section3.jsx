import { Content } from 'next/font/google'
import { headers } from 'next/headers'
import { BiSupport } from "react-icons/bi";
import React from 'react'

const Section3 = () => {
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
    ]
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
        <div className='flex flex-col gap-[100px]'>
            <div className='flex justify-center gap-[20px] w-[100%]'>
                {
                   shop.map((s,index)=>(
                 <div key={index} className="bg-[url('/images/fresh.jpg')] bg-cover bg-center px-[20px] rounded h-50 w-[30%] text-[red] flex flex-col gap-[10px] py-[50px]">
                        <p className='w-[13vw] font-semibold text-[20px]'>{s.headers}</p>
                        <p>{s.Content}</p>
                        <button className='bg-[#FFD700] py-[10px] px-[15px] font-bold w-[30%]'>{s.btn}</button>
                  </div>
                    ))
                }
            </div>
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