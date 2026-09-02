import React from 'react';

const Stats = () => {
  return (
    <div className=" bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="container mx-auto flex items-center justify-between p-10">
        <div className="left">
          <h1 className="text-5xl font-bold text-white">50K+</h1>
          <p className="text-white font-semibold text-xl my-2">Active Users</p>
        </div>
        <div className="border-l border-gray-400 h-[60px]"></div>
        <div className="middle">
          <h1 className="text-5xl font-bold text-white">200+</h1>
          <p className="text-white font-semibold text-xl my-2">Premium Users</p>
        </div>
        <div className="border-l border-gray-400 h-[60px]"></div>
        <div className="right">
          <h1 className="text-5xl font-bold text-white">4.9</h1>
          <p className="text-white font-semibold text-xl my-2">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;