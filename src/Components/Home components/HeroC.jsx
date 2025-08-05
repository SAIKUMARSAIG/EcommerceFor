import React from "react";
import { assets } from "../../assets/frontend_assets/assets.js";

const HeroC = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-col  md:flex-row lg:flex-row my-16  p-1 m-10 border border-gray-950">
        <div className="sm:w-1/2 sm basis-[50%] my-5 flex  justify-center items-center text-center">
          <div className="flex-col gap-10 justify-center items-center text-center">
            <div className="flex gap-3 items-center">
              <p className="w-16 h-[3px] bg-slate-800 "></p>
              <p>OUR BESTSELLERS</p>
            </div>
            <div className="text-xl text-center">
              <h1 className="text-5xl font-serif">Latest Arrivals</h1>
            </div>
            <div className="flex gap-5 items-center">
              <p>SHOP NOW</p>
              <p className="w-16 h-[3px] bg-slate-800 "></p>
            </div>
          </div>
        </div>
        <div className="sm:1/2 basis-[50%]">
          <img src={assets.hero_img} className="" alt="" />
          {/* <img src={assets.contact_img} className="" alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default HeroC;
