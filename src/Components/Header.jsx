import  { useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <Link to='/'><img src={assets.logo} className="w-36" alt="" /></Link>
        <nav className="hidden md:flex gap-4">
          <NavLink to="/" className="flex flex-col gap-1 items-center">
            <p>HOME</p>
            <hr className="bg-slate-500 rounded-md w-6 h-[3px] hidden" />
          </NavLink>
          <NavLink to="/collection" className="flex flex-col gap-1 items-center">
            <p>COLLECTION</p>
            <hr className="bg-slate-500 rounded-md w-12 h-[3px] hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col gap-1 items-center">
            <p>ABOUT</p>
            <hr className="bg-slate-500 rounded-md w-6 h-[3px] hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col gap-1 items-center">
            <p>CONTACT</p>
            <hr className="bg-slate-500 rounded-md w-10 h-[3px] hidden" />
          </NavLink>
        </nav>

        <div className="flex items-center gap-5">
          <img
            src={assets.search_icon}
            alt=""
            className="w-5 h-5 cursor-pointer"
          />
          <div className="group relative">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-5 h-5 cursor-pointer"
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-[-60px] pt-4">
              <div className="flex flex-col gap-2 w-36 px-3 py-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <Link to="/orders">
                  <p className="cursor-pointer hover:text-black">Orders</p>
                </Link>
                <Link to="/login">
                  <p className="cursor-pointer hover:text-black">LogOut</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <Link to="/cart">
              <img
                src={assets.cart_icon}
                alt=""
                className="w-5 h-5 cursor-pointer"
              />
              <div className="inline-block bg-black px-[3px] absolute top-2 left-5 rounded-[50%]">
                <p className="bg-black text-white p-[0.5px 2px] rounded-md">0</p>
              </div>
            </Link>
          </div>
          <img
            onClick={() => setVisible(!visible)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer visible sm:hidden active:rotate-180"
            alt=""
          />
        </div>

        {/* Sidebar for small screens */}





        <div
          className={`absolute top-0 text-center right-0 bottom-0 bg-white transition-all duration-300 ${
            visible ? "w-full" : "w-0"
          } overflow-hidden`}
        >
          <div className="p-3">
            <div className="flex justify-between items-center mb-3 text-center">
              <p className="font-bold text-lg text-center">Menu</p>
              <button onClick={() => setVisible(false)} className="text-xl">
                <img src={assets.cross_icon} className="rotate-180" alt="" />
              </button>
            </div>
            <ul className="flex flex-col gap-2 w-full">
              <li className="border-1 border-cyan-400">
                <Link to="/" onClick={() => setVisible(false)}>
                  Home
                </Link>
                <hr />
              </li>
              <li>
                <Link to="/collection" className="border-1 border-cyan-400" onClick={() => setVisible(false)}>
                  Collection
                </Link>
                <hr />
              </li>
              <li>
                <Link to="/about" className="border-1 border-cyan-400" onClick={() => setVisible(false)}>
                  About
                </Link>
                <hr />
              </li>
              <li>
                <Link to="/contact" className="border-1 border-cyan-400" onClick={() => setVisible(false)}>
                  Contact
                </Link>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
