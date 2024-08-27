import React from 'react'
import Image from 'next/image'
const Section6 = () => {  
    const person = [
        {
            img: "/images/gold-bar3.jpg",
            tittle: "Co Founder",
            header: "Stephen Smith",
            content: "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”",

        },
        {
            img: "/images/gold-bar3.jpg",
            tittle: "Co Founder",
            header: "Stephen Smith",
            content: "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”",

        },
        {
            img: "/images/gold-bar3.jpg",
            tittle: "Co Founder",
            header: "Stephen Smith",
            content: "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”",

        },
    
    ]
    const items = person.map((n, index)=>(
        <div key={index} className='border-[1px] flex flex-col items-center justify-center rounded-lg  bg-[#D3D3D3] '>
            <div className='w-[100px] h-[100px] overflow-hidden justify-center items-center rounded-[100%] relative top-[-50px] center-[-20px] border-[10px] border-white' >
            <Image className='h-[100%] w-[100%]' src="/images/gold-bar3.jpg" width={300} height={500}/>
            </div>
            <p>{n.tittle}</p>
            <h1>{n.header}</h1>
            <p className='w-[20vw]'>{n.content}</p>
        </div>
    ))
    
  return (
    <>
        <div className='flex flex-col items-center text-center'>
            <div className='w-[40vw]'>
                <h1>Great Words From People</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
            </div>
            <div className='flex gap-[30px] py-[50px] '>
                {
                    person.map((n,index)=>(
                        <div key={index} className='border-[1px] flex flex-col items-center justify-center rounded-lg  bg-[#D3D3D3] '>
                            <div className='w-[100px] h-[100px] overflow-hidden justify-center items-center rounded-[100%] relative top-[-50px] center-[-20px] border-[10px] border-white' >
                               <Image className='h-[100%] w-[100%]' src={n.img} width={300} height={500}/>
                            </div>
                            <p>{n.tittle}</p>
                            <h1>{n.header}</h1>
                            <p className='w-[20vw]'>{n.content}</p>
                        </div>
                    ))
                }
            </div>
            
        </div>
    </>
  )
}

export default Section6