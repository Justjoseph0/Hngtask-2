import Nav from "../components/Nav"
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/Cartcontext";
import Freshseason from "../components/Freshseason";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";


function Payment() {
    return (
      <>
      <Toaster />
        <Nav />
        <Check />
        <Freshseason />
        <Footer />
      </>
    );
}

const Check = () => {
  const { cart, clearCart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.current_price[0].NGN[1];
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  const handleCheckout = (e) => {
    e.preventDefault();
    clearCart();
    toast.success("Bought successful!");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <form
        onSubmit={handleCheckout}
        className="flex flex-col gap-4 text-custom-deep-browm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full border border-custom-brown outline-none rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full border  border-custom-brown outline-none rounded px-3 py-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="address" className="block font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              required
              className="w-full border  border-custom-brown outline-none rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="city" className="block font-medium mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              required
              className="w-full border  border-custom-brown outline-none rounded px-3 py-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="state" className="block font-medium mb-1">
              State
            </label>
            <input
              type="text"
              id="state"
              required
              className="w-full border  border-custom-brown outline-none rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="zip" className="block font-medium mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              required
              className="w-full border  border-custom-brown outline-none rounded px-3 py-2"
            />
          </div>
        </div>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          <ul className="divide-y divide-gray-200 mb-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between py-2">
                <span>{item.name}</span>
                <span>₦{item.current_price[0].NGN[1].toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold text-xl">
            <span>Total:</span>
            <span>₦{totalPrice.toLocaleString()}</span>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-custom-deep-browm text-custom-wheat py-3 rounded-md w-full"
        >
          Place Order
        </button>
        <Link
          to="/cart"
          className="mt-2 text-center text-custom-deep-browm underline"
        >
          Back to Cart
        </Link>
      </form>
    </div>
  );
};

export default Payment
