import React from "react";
import Starter from "./Starter";
import Pro from "./Pro";
import Enterprise from "./Enterprise";

const Offers = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center my-10">
        <h1 className="font-bold text-4xl my-5">Simple, Transparent Pricing</h1>
        <p>Choose the plan that fits your needs.Upgrade or downgrade anytime</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Starter></Starter>
        <Pro></Pro>
        <Enterprise></Enterprise>
      </div>
    </div>
  );
};

export default Offers;
