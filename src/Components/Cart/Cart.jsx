import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Product from "../Tools/Product";
const Cart = ({ cartItem, cart, setCart, setPrice }) => {
  function handleRemove() {
    toast(cartItem.name + " removed from the cart");
    const newCart = cart.filter((item) => item.id != cartItem.id);
    setCart(newCart);
    setPrice((prev) => {
      prev = prev * 100;
      prev = prev - cartItem.price * 100;
      prev = prev / 100;
      prev = prev.toFixed(2);
      return Number(prev);
    });
  }
  return (
    <div className="p-4 bg-gray-200 rounded-xl mb-3 flex justify-between items-center">
      <div className="left flex gap-2 items-center">
        <div className=" p-2 rounded-full bg-white">
          <img src="../../../assets/products/writing_2327400 1.png" alt="" />
        </div>
        <div>
          <h1 className="font-bold text-xl">{cartItem.name}</h1>
          <p>${cartItem.price}</p>
        </div>
      </div>
      <div>
        <button
          className="cursor-pointer text-pink-600 border bg-white p-2 rounded-2xl "
          onClick={() => handleRemove()}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;
