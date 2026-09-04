import React from "react";
import "./Product.css";
import { FaDollarSign } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import writingImg from "../../assets/products/writing_2327400 1.png";
const Product = ({ product, cart, setCart, setPrice }) => {
  function handleBuyNow() {
    toast(product.name + " added to the cart");
    const newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
    setPrice((prev) => {
      prev = prev * 100;
      prev = prev + product.price * 100;
      prev = prev / 100;
      prev = prev.toFixed(2);
      return Number(prev);
    });
  }
  return (
    <div className="rounded-xl border border-gray-300 p-3">
      <div className="upper flex justify-between">
        <img src={writingImg} alt="" />
        <h1 className={`${product.tagType}`}>{product.tag}</h1>
      </div>
      {/* Titlt */}
      <h1 className="text-2xl font-semibold my-4">{product.name}</h1>
      <p>{product.description}</p>
      <div className="flex items-center my-4 font-semibold text-xl ">
        <FaDollarSign></FaDollarSign>
        <h1>
          {product.price}
          <span>/Mo</span>
        </h1>
      </div>
      {/* features */}
      {product.features.map((feature, index) => {
        return (
          <div key={index} className="flex items-center gap-3 text-lg">
            <TiTick className="text-green-600" />
            <p>{feature}</p>
          </div>
        );
      })}
      <button className="btn w-full my-5" onClick={() => handleBuyNow()}>
        Buy Now
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Product;
