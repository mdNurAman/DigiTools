import React, { use, useState } from "react";
import Product from "./Product";
import Cart from "../Cart/Cart";
  import { ToastContainer, toast } from "react-toastify";
const Products = ({ dataPromise, cart, setCart, proCart }) => {
  const products = use(dataPromise);
  const [price, setPrice] = useState(0);
  function handleCheckout() {
    toast("All items checkedout succesfully");
    setCart([]);
    setPrice(0);
  }
  return (
    <>
      {proCart === "Products" ? (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Product key={product.id} product={product} cart={cart} setCart={setCart} setPrice={setPrice}></Product>
          ))}
        </div>
      ) : (
        <div className="container mx-auto p-10 rounded-xl border border-gray-100 shadow-md">
          <h1 className="font-bold text-2xl">Your Cart</h1>
          {cart.map((cartItem, index) => (
            <Cart key={cartItem.id} cartItem={cartItem} setPrice={setPrice} cart={cart} setCart={setCart}></Cart>
          ))}
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-xl py-2">Total:</h1>
            <h1 className="font-semibold text-xl py-2">$ {price}</h1>
          </div>
          <button className="btn w-full my-2 font-semibold text-xl" onClick={() => handleCheckout()}>
            Proceed To Checkout
          </button>
          <ToastContainer></ToastContainer>
        </div>
      )}
    </>
  );
};

export default Products;
