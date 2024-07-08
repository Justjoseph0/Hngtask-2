import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Homepages from "./pages/Homepages";
import Menpage from "./pages/Menpage";
import Unisex from "./pages/Newarrival";
import Womenpage from "./pages/Womenpage";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto font-montserrat px-4">
        <Routes>
          <Route path="/" index element={<Homepages />} />
          <Route path="men" element={<Menpage />} />
          <Route path="women" element={<Womenpage />} />
          <Route path="newarrival" element={<Unisex />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
