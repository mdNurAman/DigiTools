import React from "react";
import { TiTick } from "react-icons/ti";
const Enterprise = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 shadow-xl rounded-xl p-4">
      <h1 className="font-bold text-xl my-2">Enterpirse</h1>
      <p>For teams and business</p>

      <h1 className="my-5">
        <span className="font-bold text-3xl">$99</span>
        <span className="text-gray-500">/Month</span>
      </h1>
      <div>
        <div className="flex items-center gap-3 text-lg">
          <TiTick className="text-green-600" />
          <p>Everything in pro</p>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <TiTick className="text-green-600" />
          <p>Team collaboration</p>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <TiTick className="text-green-600" />
          <p>Custom integrations</p>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <TiTick className="text-green-600" />
          <p>Dedicated support</p>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <TiTick className="text-green-600" />
          <p>SLA guranteee</p>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <TiTick className="text-green-600" />
          <p>Custom Branding</p>
        </div>
      </div>

      <button className="btn w-full my-10">Get Started Free</button>
    </div>
  );
};

export default Enterprise;
