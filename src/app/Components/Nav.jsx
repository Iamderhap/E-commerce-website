import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
        <nav className='bg-black'>
            <div className=''>
                <Image src='/images/krisppy.jpg' width={50} height={30}/>
            </div>
            <div>
                <form>
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <button></button>
                </form>
            </div>
            <div></div>

        </nav>
  )
}

export default Nav