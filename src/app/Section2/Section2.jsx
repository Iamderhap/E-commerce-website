import React from 'react'
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { headers } from 'next/headers';


const Section2 = () => {
    const content = [
        {
            header: "All",
        },
        {
            header: "All",
        },
        {
            header: "All",
        },
        {
            header: "All",
        },
    ]
    const image = [
        {
            img: "/images/gold-bar2-removebg-preview.png",
            header: "Vegetables",
            content: "Fresh organic villa farm lomon 500gm pack",
            number: "$120.25",
            del: "$123.25",
        },
        {
            img: "/images/gold-bar2-removebg-preview.png",
            header: "Vegetables",
            content: "Fresh organic villa farm lomon 500gm pack",
            number: "$120.25",
            del: "$123.25",
        },
        {
            img: "/images/gold-bar2-removebg-preview.png",
            header: "Vegetables",
            content: "Fresh organic villa farm lomon 500gm pack",
            number: "$120.25",
            del: "$123.25",
        },
        {
            img: "/images/gold-bar2-removebg-preview.png",
            header: "Vegetables",
            content: "Fresh organic villa farm lomon 500gm pack",
            number: "$120.25",
            del: "$123.25",
        },
        {
            img: "/images/gold-bar2-removebg-preview.png",
            header: "Vegetables",
            content: "Fresh organic villa farm lomon 500gm pack",
            number: "$120.25",
            del: "$123.25",
        },
        {
            img: "/images/gold-bar2-removebg-preview.png",
            header: "Vegetables",
            content: "Fresh organic villa farm lomon 500gm pack",
            number: "$120.25",
            del: "$123.25",
        },
        {
            img: "/images/gold-bar2-removebg-preview.png",
            header: "Vegetables",
            content: "Fresh organic villa farm lomon 500gm pack",
            number: "$120.25",
            del: "$123.25",
        },
        {
            img: "/images/gold-bar2-removebg-preview.png",
            header: "Vegetables",
            content: "Fresh organic villa farm lomon 500gm pack",
            number: "$120.25",
            del: "$123.25",
        },
    ]
  return (
    <>
        <div className='flex flex-col items-center text-center gap-[40px] py-[40px]'>
            <div className='w-[40vw] flex flex-col'>
                <h1 className='font-bold text-[25px]'>Popular Products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
            </div>
            <div className='bg-white justify-center flex h-[100vh] gap-[20px]'>
                <div className='flex flex-col gap-[10px]'>
                    {
                        content.map((n,index)=>(
                        <div className='flex items-center justify-between border-2 w-[20vw] py-[10px] px-[10px] rounded-lg' key={index}>
                            <p className='flex items-center'>{n.header}</p>
                            <p><FaArrowRight/></p>
                        </div>
                        ))
                    }

                    <div className='w-[20vw]'>
                        <Image className='h-[62vh] rounded-lg' src="/images/gold-bar2.jpg" width={500} height={300}/>
                    </div>
                </div>
                <div className='h-[50vh] grid grid-cols-4 gap-[20px]'>
                    {
                        image.map((n,index)=>(
                            <div key={index} className='border-2 w-[17vw] flex flex-col items-center text-center gap-[10px] py-[10px] bg-[#D3D3D3] rounded-lg'>
                                <Image className='w-[15vw] h-[25vh] border-2 rounded-lg' src={n.img} width={500} height={500}/>
                                <p>{n.header}</p>
                                <h3 className='w-[90%] font-semibold'>{n.content}</h3>
                                <p className='font-bold flex gap-[10px]'>{n.number}<del>{n.del}</del></p>
                           </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Section2