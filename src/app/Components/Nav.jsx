import React from 'react'
import { FiSearch } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import Image from 'next/image'

const Nav = () => {
  return (
        <div className='px-[70px] bg-black py-[10px] gap-[10px]'>
          <nav className=' flex justify-around items-center py-[10px] border-b-2 border-b-[grey]'>
                <div className=''>
                    <Image className='h-[7vh]' src='/images/krisppy-logo.jpg' width={200} height={5}/>
                </div>
                <div>
                    <form className='flex items-center'>
                        <input className='border-[#FFD700] cursor-pointer border-[1px] py-[10px] w-[30vw] px-[10px] rounded-tl-lg rounded-bl-lg focus:outline-none' type="text" name="items" id="" placeholder='Search For items...'/>
                        <select className='cursor-pointer border-[#FFD700] border-[1px] py-[11px] px-[7px] focus:outline-none'  name="" id="">
                          <option value="">jewelries</option>
                          <option value="">jewelries</option>
                          <option value="">jewelries</option>
                          <option value="">jewelries</option>
                          <option value="">jewelries</option>

                        </select>
                        <button className='bg-[#FFD700] px-[12px] py-[15px] rounded-br-lg rounded-tr-lg '><FiSearch /></button>
                    </form>
                </div>
                <ul className='flex gap-[15px] text-white items-center'>
                    <li className='flex items-center gap-[7px] hover:text-[#FFD700] hover:cursor-pointer'><VscAccount />Account</li>
                    <li className='flex items-center gap-[7px] hover:text-[#FFD700] hover:cursor-pointer'><FaRegHeart />Wishlist</li>
                    <li className='flex items-center gap-[7px] hover:text-[#FFD700] hover:cursor-pointer'><LuShoppingCart />Cart</li>
                </ul>
          </nav>
          <div className='flex justify-around py-[20px]'>
            <div className='text-white border-white border-2 px-[5px] py-[3px]'>
                <HiMenuAlt1 />
            </div>
            <ul className='flex gap-[20px] text-white'>
                <li className='flex items-center gap-[5px] font-semibold hover:text-[#FFD700] hover:cursor-pointer'>Home<MdOutlineKeyboardArrowDown /></li>
                <li className='flex items-center gap-[5px] font-semibold hover:text-[#FFD700] hover:cursor-pointer'>Category<MdOutlineKeyboardArrowDown /></li>
                <li className='flex items-center gap-[5px] font-semibold hover:text-[#FFD700] hover:cursor-pointer'>Products<MdOutlineKeyboardArrowDown /></li>
                <li className='flex items-center gap-[5px] font-semibold hover:text-[#FFD700] hover:cursor-pointer'>Pages<MdOutlineKeyboardArrowDown /></li>
                <li className='flex items-center gap-[5px] font-semibold hover:text-[#FFD700] hover:cursor-pointer'>Blog<MdOutlineKeyboardArrowDown /></li>
                <li className='flex items-center gap-[5px] font-semibold hover:text-[#FFD700] hover:cursor-pointer'>Elements<MdOutlineKeyboardArrowDown /></li>
            </ul>
              <a className='flex text-white items-center gap-[10px] hover:text-[#FFD700]' href="mailto:happiness9979@gmail.com">Email Us <MdOutlineMail /></a>
          </div>
        </div>
  )
}

export default Nav