// import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Pages/Home.jsx";
import Collection from "./Pages/Collection.jsx";
import About from "./Pages/About.jsx";
import Cart from "./Pages/Cart.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./Pages/Login.jsx";
import Product from "./Pages/Product.jsx";
import PlaceOrder from "./Pages/PlaceOrder.jsx";
import Order from "./Pages/Order.jsx";

const App = () => {
  return (
    <>
      <div className="px-5 py-3  sm:px-[5vw] md:px-[7vw] lg:px-[10vw]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/place-order" element={<PlaceOrder />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
