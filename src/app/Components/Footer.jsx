import React from 'react'
import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
// import { LuSend } from "react-icons/lu";



const Footer = () => {
  return (
    <>
        <footer className='flex items-center justify-center w-[100%] gap-[50px] bg-[#D3D3D3]'>
            <div className='flex flex-col gap-[10px]'>
                <Image className='10vw' src="/images/krisppy-logo.jpg" width={300} height={500}/>
                <p className='w-[27vw]'>Carrot is the biggest market of grocery products. Get your daily needs from our store</p>
                <p className='w-[20vw] flex'><CiLocationOn />51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</p>
                <p className='flex items-center'><FaRegEnvelope /><a href="mailto:happiness9979@gmail.com">Email</a></p>
                <p className='flex items-center'><IoCallOutline /> 08164221806</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <h1>Company</h1>
                <p>About Us</p>
                <p>Delivery Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>contact Us</p>
                <p>Support Center</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <h1>Category</h1>
                <p>Dairy & Bakery</p>
                <p>Fruits & Vegetable</p>
                <p>Snack & Spice</p>
                <p>Juice & Drinks</p>
                <p>Chicken & Meat</p>
                <p>Fast Food</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex flex-col gap-[10px]'>
                    <form>
                        <h1>Subscribe Our Newsletter</h1>
                        <input className='w-[20vw]' type="text" name="" id="" placeholder='Search here... '/>
                    </form>
                </div>
                <div className='flex gap-[10px]'>
                    <p><RiTwitterXLine/></p>
                    <p><FaInstagram/></p>
                </div>
                <div className='w-[5vw] flex gap-[10px]'>
                    <Image src="/images/gold-bar2.jpg" width={300} height={500}/>
                    <Image src="/images/gold-bar2.jpg" width={300} height={500}/>
                    <Image src="/images/gold-bar2.jpg" width={300} height={500}/>
                    <Image src="/images/gold-bar2.jpg" width={300} height={500}/>
                </div>
            </div>
        </footer>
        <div>
             <p>© 2024 Krisppy GOLD, All rights reserved</p>
         </div>
    </>
  )
}

export default Footer