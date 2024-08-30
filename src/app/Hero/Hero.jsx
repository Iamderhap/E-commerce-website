import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='w-[100%] bg-slate-100 py-[50px] flex-col flex justify-center items-center'>
        <div className='w-[80%] flex justify-between '>
          <div className='w-[70%]'>
            <h1 className='text-[60px] font-sans font-bold'>Elevate Style or Secure Future with Gold.</h1>
          </div>
          <div className='w-[28%]'>
            <p className='text-[17px] font-semibold'>Discover a world of luxury at Krisppy Gold, where only real gold are sold.</p>
            <div className='flex gap-[10px]  items-center'>
              <Image className='rounded-[100%] w-[40px] h-[40px]' width={50} height={50} src="/images/man1.jpg" alt="" />
              <Image className='rounded-[100%] w-[40px] h-[40px]' width={50} height={50} src="/images/man2.jpg" alt="" />
              <Image className='rounded-[100%] w-[40px] h-[40px]' width={50} height={50} src="/images/man3.jpg" alt="" />
              <div>
                <p className='font-bold text-[17px] '>100k+</p>
                <p className=' text-[15px] '>Satisfied Users</p>
              </div>
            </div>

          </div>
        </div>
        <div className='w-[80%] h-[60vh] flex justify-between items-center'>
            <div className='w-[48%] flex flex-col justify-between items-center h-full'>
                <div className='w-[100%] h-[28vh] rounded-[20px] overflow-hidden'>
                  <div className='w-[38%] h-[28vh] absolute rounded-[20px] '>
                    <Image className='object-cover w-full rounded-[20px] h-full ' src='/images/goldbarhjk.jpg' width={100} height={100}></Image>
                  </div>
                  <div className='absolute w-[38%] h-[28vh] rounded-[15px]  bg-black opacity-60'></div>
                  <div className='absolute z-0 pl-[40px] pt-[30px]'>
                    <p className='text-white text-[14px] font-bold'>Special Offers</p>
                    <p className='text-white text-[17px] font-bold'>Get Real Gold Bar</p>
                    <p className='text-white underline text-[15px] hover:text-yellow-500 cursor-pointer'>Show Now</p>
                  </div>
                </div>
                <div className='w-[100%] gap-[20px] justify-between h-[28vh] flex'>
                  <div className='rounded-[15px] w-[47%] overflow-hidden'>
                    <div className='w-[18%] absolute h-[28vh]'>
                      <Image className='h-[100%] rounded-[15px] object-cover w-[100%]' src='/images/holdgold.jpg' width={100} height={100}></Image>
                    </div>
                    <div className='absolute w-[18%] h-[28vh] rounded-[15px]  bg-black opacity-30'></div>
                    <div className='absolute z-0 pl-[10px] pt-[50px]'>
                      <p className='text-white text-[13px] font-bold'>Special Offers</p>
                      <p className='text-white text-[15px] font-bold'>Get Real Gold Jewelries</p>
                      <p className='text-white underline text-[15px] hover:text-yellow-500 cursor-pointer'>Show Now</p>
                    </div>
                  </div>
                  <div className='rounded-[15px] w-[47%] overflow-hidden'>
                    <div className='w-[18%] absolute h-[28vh]'>
                      <Image className='h-[100%] rounded-[15px] object-cover w-[100%]' src='/images/mangold1.jpg' width={100} height={100}></Image>
                    </div>
                    <div className='absolute w-[18%] h-[28vh] rounded-[15px]  bg-black opacity-30'></div>
                    <div className='absolute z-0 pl-[10px] pt-[50px]'>
                      <p className='text-white text-[13px] font-bold'>Special Offers</p>
                      <p className='text-white text-[15px] w-[70%] font-bold'>Get Real Gold Necklace and Rings</p>
                      <p className='text-white underline text-[15px] hover:text-yellow-500 cursor-pointer'>Show Now</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className='w-[50%] rounded-[15px] bg-red-400 overflow-hidden  h-full'>
              {/* <Image className='h-[100%] w-[100%]' src='/images/goldrte.png' width={100} height={100}></Image> */}
              <video autoPlay loop muted playsInline className=" h-[60vh] rounded-[15px] absolute object-cover w-[40%]">
                <source src='/images/goldvid2.webm' type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='absolute w-[40%] h-[60vh] rounded-[15px]  bg-black opacity-60'></div>
              <div className='absolute w-[30%] pl-[40px] pt-[80px]'>
                <h1 className='text-white font-sans text-[27px]'>Purchase Genuine Gold Through Our Esteemed Dealer.</h1>
                <p className='text-white font-sans text-[16px]'>Offers still available...</p>
                <button className='text-white mt-[20px] hover:rounded-full rounded-[10px] font-semibold text-[15px] py-[10px] px-[20px] transition-all duration-300 bg-yellow-600 hover:bg-yellow-700'>Buy Now</button>
              </div>
            </div>
        </div>
       
    </div>
  )
}

export default Hero
