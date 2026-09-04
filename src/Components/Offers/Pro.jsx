import React from "react";
import { TiTick } from "react-icons/ti";
const Pro = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  shadow-xl rounded-xl p-4 text-white">
        <h1 className="font-bold text-xl my-2">Pro</h1>
        <p>Perfect for getting started</p>

        <h1 className="my-5">
          <span className="font-bold text-3xl">$29</span>
          <span className="text-gray-300">/Month</span>
        </h1>
        <div>
          <div className="flex items-center gap-3 text-lg">
            <TiTick className="text-gray-200" />
            <p>Access to all premium tools</p>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <TiTick className="text-gray-200" />
            <p>Unlimited templastes</p>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <TiTick className="text-gray-200" />
            <p>Priority Support</p>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <TiTick className="text-gray-200" />
            <p>Cloud sync</p>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <TiTick className="text-gray-200" />
            <p>Advanced Analytics</p>
          </div>
        </div>

        <div className="bg-white text-center py-3 rounded-3xl my-10">
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            Get Started Free
          </button>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 best-seller">Most Popular</div>
      </div>
    </>
  );
};

export default Pro;
