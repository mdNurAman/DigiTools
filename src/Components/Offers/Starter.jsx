import React from 'react';
import { TiTick } from "react-icons/ti";
const Starter = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 shadow-xl rounded-xl p-4">
      <h1 className='font-bold text-xl my-2'>Starter</h1>
      <p>Perfect for getting started</p>

      <h1 className='my-5'>
       <span className='font-bold text-3xl'>$0</span><span className='text-gray-500'>/Month</span>
      </h1>
      <div>
        <div className="flex items-center gap-3 text-lg">
          <TiTick className="text-green-600" />
          <p>Access to 10 free tools</p>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <TiTick className="text-green-600" />
          <p>Basic templastes</p>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <TiTick className="text-green-600" />
          <p>Commiunity support</p>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <TiTick className="text-green-600" />
          <p>1 project per month</p>
        </div>
      </div>

      <button className='btn w-full my-10'>Get Started Free</button>
    </div>
  );
};

export default Starter;