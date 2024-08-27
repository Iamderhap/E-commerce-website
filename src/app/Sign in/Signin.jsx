import React from 'react'
import Image from 'next/image'

const Signin = () => {
  return (
    <>
        <div className='items-center justify-center flex flex-col h-[20vh] pt-[80px]'>
            
          <div className='w-[30%]  bg-[#D3D3D3] flex flex-col items-center gap-[10px] py-[20px]'>
          <Image className='w-[10vw] flex justify-center' src="/images/krisppy-logo.jpg" height={300} width={500}/>
            
            <form className='flex flex-col gap-[10px]'>
                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="">Email Address*</label>
                        <input className='w-[20vw]' type="text" name="" id="" placeholder='Enter Your Email'/>
                    <label htmlFor="">Password*</label>
                        <input className='w-[20vw]' type="text" name="" id="" placeholder='Enter Your password'/>
                </div>
                <div className='flex justify-around'>
                    <p >Remember Me</p>
                    <p>Forgot Password?</p>
                </div>
                <div className='flex justify-around'>
                    <button>Login</button>
                    <p>Sign up?</p>
                </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Signin