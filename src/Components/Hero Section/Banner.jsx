import React from 'react';
import Stats from './Stats';

const Banner = () => {
  return (
    <div className="container mx-auto flex items-center justify-between gap-8 my-10">
      <div>
        <div className="flex gap-1 bg-[#E1E7FF] px-4 py-2 rounded-2xl items-center w-max my-2">
          <img
            className="w-4 h-4"
            src="../../../assets/circle.png
          "
            alt=""
          />
          <h1 className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </h1>
        </div>
        <div>
          <h1 className="text-6xl font-bold my-3">
            Supercharge Your <br /> Digital Workflow
          </h1>
        </div>
        <div className="max-w-[600px]">
          <p className="text-justify">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start
            creating faster today.
          </p>
        </div>
        <div className="flex items-center gap-5 my-5">
          <button className="rounded-4xl  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-3">
            Explore Products
          </button>

          <div className="rounded-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-[1px]">
            <div className="rounded-2xl flex items-center gap-2 bg-white px-4 py-3">
              <img src="../../../assets/Play.png" alt="" className="h-5 w-5 shrink-0" />

              <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent whitespace-nowrap">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="../../../assets/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;