// import React from 'react'
import logo from "../assets/frontend_assets/logo.png"
const Footer = ({ login }) => {
  return (
    <>
        
        {login && (<div className="contact  flex flex-col items-center gap-5 pt-24">
          <h1 className='text-black text-3xl'>Subscribe now & get 20% off</h1>
          <p className='text-gray-600  '> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <form className='block flex flex-row max-w-96'>
           <label htmlFor="" className='block flex justify-center items-center w-96 sm:w-30 md:w-90 lg:w-90 '> <input type="email" className='p-2 border max-w-96 border-gray-400 h-10 w-96 placeholder:text-black' placeholder="Enter Your Email" />
           <button type="submit" className='border h-10 px-10 max-w-50 bg-black text-white'>Subscribe</button></label>
          </form>
        </div>)}


        <div className=" flex flex-col my-10 gap-5 justify-center items-center md:flex-row lg:flex-row">
            <div className="mx-10 basis-1/3 max-w-[900px]">
                <img src={logo} className='w-18 h-10' alt="" />
                <p className='text-slate-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="basis-1/3 mx-10 ">
                <h1 className='text-xl text-black'>Company</h1>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy                    </li>
                </ul>

            </div>
            <div className="basis-1/3">
                <h1>GET IN TOUCH</h1>
                <ul className='text-cyan-700'>
                    <li>+1-000-000-0000
                    </li>
                    <li>abc@gmail.com
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

        <hr />

        <h1 className='my-5 text-center'></h1>
    
    </>
  )
}

export default Footer
