import { Suspense, useState } from "react";
import Banner from "./Components/Hero Section/Banner";
import Stats from "./Components/Hero Section/Stats";
import Navbar from "./Components/Navbar/Navbar";
import Tools from "./Components/Tools/Tools";
import Products from "./Components/Tools/Products";
import GetStarted from "./Components/GetStarted/GetStarted";
import Offers from "./Components/Offers/Offers";
import Ready from "./Components/Ready/Ready";
import Footer from "./Components/Footer/Footer";

async function getData() {
  const dataPromise = await fetch("/products.json");
  return dataPromise.json();
}
const dataPromise = getData();
function App() {
  const [proCart, setProCart] = useState("Products");
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Tools proCart={proCart} setProCart={setProCart} cart={cart}></Tools>
      <Suspense fallback={<h1>Loading........</h1>}>
        <Products dataPromise={dataPromise} cart={cart} setCart={setCart} proCart={proCart}></Products>
      </Suspense>
      <GetStarted></GetStarted>
      <Offers></Offers>
      <Ready></Ready>
      <Footer></Footer>
    </>
  );
}

export default App;
