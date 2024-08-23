import React from 'react'
import { FiSearch } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image'

const Nav = () => {
  return (
        <div className='px-[70px] bg-black py-[10px] gap-[10px]'>
          <nav className=' flex justify-around items-center py-[10px] border-b-2 border-b-[grey]'>
                <div className=''>
                    <Image className='h-[7vh]' src='/images/krisppy-logo.jpg' width={100} height={5}/>
                </div>
                <div>
                    <form className='flex items-center '>
                        <input className='border-[#FFD700] border-2 py-[10px] px-[7px] focus:outline-none' type="text" name="items" id="" placeholder='Search For items...'/>
                        {/* <input className='border-[yellow] border-2 py-[10px] px-[7px] focus:outline-none' type="text" name="categories" id="" placeholder='All Categories'/> */}
                        <select className='cursor-pointer'  name="" id="">
                          <option value="">jewelries</option>
                          <option value="">jewelries</option>
                          <option value="">jewelries</option>
                          <option value="">jewelries</option>
                          <option value="">jewelries</option>

                        </select>
                        <button className='bg-[#FFD700] px-[12px] py-[15px]'><FiSearch /></button>
                    </form>
                </div>
                <ul className='flex gap-[15px] text-white'>
                    <li className='flex items-center gap-[7px]'><VscAccount />Account</li>
                    <li className='flex items-center gap-[7px]'><FaRegHeart />Wishlist</li>
                    <li className='flex items-center gap-[7px]'><LuShoppingCart />Cart</li>
                </ul>
          </nav>
          <div className='flex justify-around py-[20px] gap-[20%]'>
            <div className='text-white border-white border-2 px-[5px] py-[3px]'>
                <HiMenuAlt1 />
            </div>
            <ul className='flex gap-[20px] text-white'>
                <li className='flex items-center gap-[5px] font-semibold'>Home<MdOutlineKeyboardArrowDown /></li>
                <li className='flex items-center gap-[5px] font-semibold'>Category<MdOutlineKeyboardArrowDown /></li>
                <li className='flex items-center gap-[5px] font-semibold'>Products<MdOutlineKeyboardArrowDown /></li>
                <li className='flex items-center gap-[5px] font-semibold'>Pages<MdOutlineKeyboardArrowDown /></li>
                <li className='flex items-center gap-[5px] font-semibold'>Blog<MdOutlineKeyboardArrowDown /></li>
                <li className='flex items-center gap-[5px] font-semibold'>Elements<MdOutlineKeyboardArrowDown /></li>
            </ul>
          </div>
        </div>
  )
}

export default Nav