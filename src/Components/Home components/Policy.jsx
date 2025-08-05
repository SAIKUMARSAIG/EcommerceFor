// import React from 'react'
// import { assets } from "../../assets/frontend_assets/assets"
import exchange from '../../assets/frontend_assets/exchange_icon.png'
import quality from '../../assets/frontend_assets/quality_icon.png'
import support from '../../assets/frontend_assets/support_img.png'
// import Footer from '../../assets/

const Policy = () => {
  return (
    <>
        <div className=" flex flex-col md:flex-row lg:flex-row justify-around gap-3 text-center">
          <div className="basis-1/3 flex flex-col items-center justify-center">
            <img src={exchange} className="block w-12 h-12" alt="" />
            <h2 className="text-slate-900 text-2xl">Easy Exchange Policy</h2>
            <p>We offer hassle free exchange policy</p>
          </div>
          <div className="basis-1/3 flex flex-col items-center justify-center">
            <img src={quality} className="block w-12 h-12" alt="" />
            <h2 className="text-slate-900 text-2xl">Easy Exchange Policy</h2>
            <p>We offer hassle free exchange policy</p>
          </div>
          <div className="basis-1/3 flex flex-col items-center justify-center">
            <img src={support} className="block w-12 h-12" alt="" />
            <h2 className="text-slate-900 text-2xl">Easy Exchange Policy</h2>
            <p>We offer hassle free exchange policy</p>
          </div>
        </div>

        
    </>
  )
}

export default Policy
