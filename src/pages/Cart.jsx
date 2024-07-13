import React, { useContext } from "react";
import Footer from "../components/Footer";
import Freshseason from "../components/Freshseason";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import { CartContext } from "../components/Cartcontext";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Nav />
      <Cartitem />
      <Logo />
      <Freshseason />
      <Footer />
    </>
  );
}

function Cartitem() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(cart.map((item) => 1)); 

  function getFullImage(url) {
    const baseUrl = "https://api.timbu.cloud/images/";
    return `${baseUrl}${url}`;
  }

  function calculateTotalPrice() {
    return cart.reduce((total, item, index) => {
      return total + item.current_price[0].NGN[1] * quantities[index];
    }, 0);
  }

  function handleIncrement(index) {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  }

  function handleDecrement(index) {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  }

  const totalPrice = calculateTotalPrice();

  return (
    <section className="h-fit mt-10 md:mt-16 flex justify-between">
      <div className="bg-custom-wheat p-3 lg:p-10 lg:w-[68%] rounded-lg w-full">
        <h3 className="font-[900] text-2xl text-custom-deep-browm">Cart</h3>

        <section className="flex flex-col gap-y-3">
          {cart.length === 0 ? (
            <div className="text-center text-custom-deep-browm font-[900] text-xl mt-10">
              Your cart is empty
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex pt-6 lg:pt-10 lg:gap-x-7 gap-x-5 w-[100%]"
              >
                <div className="bg-white border border-custom-deep-browm rounded-xl h-[145px] md:h-full lg:w-[250px]">
                  <img
                    src={getFullImage(item.photos[0].url)}
                    alt={item.name}
                    className="h-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-y-5 lg:gap-y-8 w-full">
                  <div className="text-custom-deep-browm flex justify-between items-center w-full">
                    <h3 className="font-[450] lg:text-2xl text-sm">
                      {item.name}
                    </h3>
                    <p className="font-[900] text-xl lg:block hidden">
                      ₦{item.current_price[0].NGN[1].toLocaleString()}
                    </p>
                  </div>

                  <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                    <p>Manufacturer: {}</p>
                    <div className="flex gap-1 text-[10px] lg:hidden">
                      <i className="fa-solid fa-star text-custom-brown"></i>
                      <i className="fa-solid fa-star text-custom-brown"></i>
                      <i className="fa-solid fa-star text-custom-brown"></i>
                      <i className="fa-solid fa-star text-custom-brown"></i>
                      <i className="fa-solid fa-star text-custom-brown"></i>
                    </div>
                    <p className="line-through lg:block hidden">
                      ₦{item.current_price[0].NGN[0].toLocaleString()}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <div className="lg:flex gap-2 hidden">
                      <i className="fa-solid fa-star text-custom-brown"></i>
                      <i className="fa-solid fa-star text-custom-brown"></i>
                      <i className="fa-solid fa-star text-custom-brown"></i>
                      <i className="fa-solid fa-star text-custom-brown"></i>
                      <i className="fa-solid fa-star text-custom-brown"></i>
                    </div>
                    {/* Mobile */}
                    <div className="lg:hidden">
                      <p className="text-[17px] font-[900] text-custom-deep-browm ">
                        ₦{item.current_price[0].NGN[1].toLocaleString()}
                      </p>
                      <p className="text-[12px] font-[450] text-custom-deep-browm line-through">
                        ₦{item.current_price[0].NGN[0].toLocaleString()}
                      </p>
                    </div>
                    {/*End of Mobile */}
                    <div className="flex lg:gap-5 gap-3">
                      <button
                        className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat"
                        onClick={() => handleIncrement(index)}
                      >
                        +
                      </button>
                      <span>{quantities[index]}</span>
                      <button
                        className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat"
                        onClick={() => handleDecrement(index)}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="text-[10px] font-[450] text-custom-deep-browm lg:hidden">
                    <p>in stock</p>
                    <p>+ shipping from ₦ 250 to ISOLO</p>
                  </div>
                  {/*End of Mobile */}

                  <div className="flex justify-between">
                    <button
                      className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4 text-[14px]"
                      onClick={() => removeFromCart(index)}
                    >
                      <img src="delete.svg" alt="delete icon" className="w-3" />
                      Remove
                    </button>
                    <button className="w-[48%] bg-custom-deep-browm text-custom-wheat rounded-sm text-[14px]">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          <hr className="border-b-1 border-custom-deep-browm my-5" />
          {cart.length > 0 && (
            <>
              <Link to={'/payment'}>
                <button className="font-[450] text-xl text-custom-wheat bg-custom-deep-browm py-3 rounded-md text-center mt-5 w-full">
                  Checkout (<span className="font-[700]">₦</span>
                  {totalPrice.toLocaleString()})
                </button>
              </Link>

              <button
                className="font-[450] text-xl text-custom-wheat bg-red-600 py-3 rounded-md text-center mt-2 w-full"
                onClick={() => clearCart()}
              >
                Clear cart
              </button>
            </>
          )}
        </section>
      </div>

      <div className="w-[30%] hidden lg:flex flex-col gap-y-4 h-fit">
        <img
          src="img/cart-lmage.png"
          alt="cart image"
          className="w-full object-contain"
        />
        <img
          src="img/cartimg-2.png"
          alt="cart image"
          className="w-full object-contain mt-14"
        />
      </div>
    </section>
  );
}

export default Cart;
