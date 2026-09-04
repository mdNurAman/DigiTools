import React from 'react';
import '../../App.css';
const Tools = ({proCart,setProCart,cart}) => {
  return (
    <div className="container mx-auto text-center my-14">
      <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
      <p className="max-w-[500px] mx-auto my-4">
        Choose from our curated collection of premium digital products designed to boost your productivity and
        creativity.
      </p>
      <div className="flex justify-center items-center gap-10">
        {/* Products Button */}
        <button className={`${proCart === "Products" ? "btn" : ""}`} onClick={() => setProCart("Products")}>
          Products
        </button>
        <button className={`${proCart === "Cart" ? "btn" : ""}`} onClick={() => setProCart("Cart")}>
          Cart <span>({cart.length})</span>
        </button>
      </div>
    </div>
  );
};

export default Tools;