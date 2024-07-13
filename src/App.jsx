import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Homepages from "./pages/Homepages";
import Menpage from "./pages/Menpage";
import Unisex from "./pages/Newarrival";
import Womenpage from "./pages/Womenpage";
import { CartProvider } from "./components/Cartcontext";
import Payment from "./pages/Payment";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="max-w-7xl mx-auto font-montserrat px-4">
          <Routes>
            <Route path="/" index element={<Homepages />} />
            <Route path="men" element={<Menpage />} />
            <Route path="women" element={<Womenpage />} />
            <Route path="newarrival" element={<Unisex />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
