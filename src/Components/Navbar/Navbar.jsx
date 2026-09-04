import React from 'react';
import { CiLogin } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="border-b-2 border-gray-200 py-6 px-5 md:px-0">
      <div className="flex items-center justify-between container mx-auto">
        {/* Left nav section  */}
        <div className="left">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </h1>
        </div>
        <div className="hidden md:flex flex-col md:flex-row items-center md:gap-5 text-sm md:text-lg">
          <p>Products</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Testomonials</p>
          <p>FAQ</p>
        </div>
        <div className="right flex items-center gap-5 text-xl">
          <div className='hidden md:flex items-center gap-2'>
            <CiLogin />
            <button>Login</button>
          </div>
          <button className="rounded-4xl  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;