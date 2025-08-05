import React, { useState } from "react";
import Footer from "../Components/Footer";

const Login = () => {
  const [login, setLogin] = useState(false);
  const handleClick = () => {
    const state = login;
    setLogin(!state);
  };
  return (
    <>
      <div className=" flex justify-center items-center pt-32">
        {login == true && (
          <div className="w-96 mx-1">
            <h1 className="text-center flex items-center justify-center gap-2 text-4xl my-3 text-center">
              Login <span className="inline-block w-16 h-[2px] bg-slate-800"></span>
            </h1>
            <form className="flex flex-col gap-2 outline-slate-600">
              <input type="text" className="border-2 border-slate-700 h-12 p-2" placeholder="Email" />
              <input type="password" className="border-2 border-slate-700 h-12 p-2" placeholder="Password" />
              <div className="flex justify-between gap-3">
                <p>Forgot your password?</p>
                <p onClick={handleClick} className="cursor-pointer underline">Create Account</p>
              </div>
            </form>
            <div className="flex justify-center items-center my-6 ">
            <button className="bg-black text-white h-10 w-32 cursor-pointer">Login</button>
            </div>
          </div>
        )}
        {login == false && (
          <div className="w-96 mx-1">
            <h1 className="text-center flex items-center justify-center gap-2 text-4xl my-3 text-center">
              Sign Up <span className="inline-block w-16 h-[2px] bg-slate-800"></span>
            </h1>
            <form className="flex flex-col gap-2 outline-slate-600">
              <input type="email" className="border-2 border-slate-700 h-12 p-2" placeholder="Email" />
              <input type="text" className="border-2 border-slate-700 h-12 p-2" name="" id="" placeholder="UserName" />
              <input type="password" className="border-2 border-slate-700 h-12 p-2" placeholder="Password" />
              <div className="flex gap-3 justify-between">
                <p>Already Have a Account?</p>
                <p onClick={handleClick} className="underline cursor-pointer">Login</p>
              </div>
            </form>
            <div className="flex justify-center items-center my-6 ">
            <button className="bg-black text-white h-10 w-32 cursor-pointer">Sign Up</button>
            </div>
          </div>
        )}
      </div>
      <Footer pro={login} />
    </>
  );
};

export default Login;
