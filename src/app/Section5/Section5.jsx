import React from 'react'
import Image from 'next/image'
const Section5 = () => {
    const images = [
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
        <div className='flex justify-center gap-[20px] py-[50px]'>
             <div className='flex gap-[20px]'>
                {
                    images.map((n,index)=>(
                        <div key={index} className='border-2 w-[17vw] flex flex-col items-center text-center gap-[10px] py-[10px] bg-[#D3D3D3] rounded-lg'>
                               <Image className='w-[15vw] h-[25vh] border-2 rounded-lg' src={n.img} width={500} height={500}/>
                                <p>{n.header}</p>
                                <h3 className='w-[90%] font-semibold'>{n.content}</h3>
                                <p className='font-bold flex gap-[10px]'>{n.number}<del>{n.del}</del></p>
                        </div>
                    ))
                }
             </div>
             <div>
                <Image className='w-[35vw] h-[50vh] rounded-lg' src="/images/gold-bar3.jpg" width={300} height={500}/>
            </div> 
        </div>
    </>
  )
}

export default Section5