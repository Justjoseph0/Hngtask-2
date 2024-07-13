import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Cartcontext";
import Toast from "./ToastMessage";

function Clothcard({ cloth }) {
  const { addToCart } = useContext(CartContext);
  const [toastMessage, setToastMessage] = useState("");

  function getFullImage(url) {
    const baseUrl = "https://api.timbu.cloud/images/";
    return `${baseUrl}${url}`;
  }

  const handleAddToCart = () => {
    addToCart(cloth);
    setToastMessage("Product added to cart!");

    
    setTimeout(() => {
      setToastMessage("");
    }, 2000);
  };

  const imageUrl =
    cloth.photos.length > 0 ? getFullImage(cloth.photos[0].url) : "";
  const priceValue =
    cloth.current_price &&
    cloth.current_price.length > 0 &&
    cloth.current_price[0].NGN
      ? cloth.current_price[0].NGN[0]
      : 5000;

  const discountedPriceValue =
    cloth.current_price &&
    cloth.current_price.length > 0 &&
    cloth.current_price[0].NGN
      ? cloth.current_price[0].NGN[1]
      : 5000;

  return (
    <div
      className="bg-white rounded-md p-2 sm:w-[238px] w-[90%] mx-auto"
      aria-label="card"
    >
      <Link to="/checkout" state={{ cloth }}>
        <div className="border-custom-brown border rounded-lg p-2 h-[285px] sm:h-[224px]">
          <img
            src={imageUrl}
            alt={cloth.name}
            className="h-full w-full object-contain"
          />
        </div>
      </Link>
      <p className="sm:text-[15px] text-[20px] font-[450] text-custom-deep-browm mt-2">
        {cloth.name}
      </p>
      <div className="flex items-end justify-between text-custom-deep-browm my-3">
        <p className="font-[900] text-[26px] sm:text-xl">
          ₦{discountedPriceValue.toLocaleString()}
        </p>
        <p className="font-normal text-[20px] line-through sm:text-lg">
          ₦{priceValue.toLocaleString()}
        </p>
      </div>
      <button
        className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
      {toastMessage && (
        <Toast message={toastMessage}  />
      )}
    </div>
  );
}

export default Clothcard;
