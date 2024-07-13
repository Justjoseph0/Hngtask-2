import React, { useState } from "react";
import { Link } from "react-router-dom";

function Filteritem({ products, setSortedProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(""); 

  function handleSort(criteria) {
    let sortedItems;

    switch (criteria) {
      case "New Arrival":
        sortedItems = products
          .slice()
          .sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
        break;
      case "Price: Low to High":
        sortedItems = products
          .slice()
          .sort(
            (a, b) => a.current_price[0].NGN[0] - b.current_price[0].NGN[0]
          ); 
        break;
      case "Price: High to Low":
        sortedItems = products
          .slice()
          .sort(
            (a, b) => b.current_price[0].NGN[0] - a.current_price[0].NGN[0]
          ); 
        break;
      default:
        sortedItems = products;
    }
    setSortedProducts(sortedItems);
    setSelectedSort(criteria);
    setIsOpen(false);
  }




  function toggleSortBy() {
    setIsOpen(!isOpen);
    setBrandOpen(false);
    setSizeOpen(false);
  }

  function toggleBrand() {
    setBrandOpen(!brandOpen);
    setIsOpen(false);
    setSizeOpen(false);
  }
  function toggleSize() {
    setSizeOpen(!sizeOpen);
    setIsOpen(false);
    setBrandOpen(false);
  }
  return (
    <div className="flex md:justify-between justify-end items-center mt-8">
      <div className="md:block hidden">
        <Link to="/">
          <img src="Back.svg" alt="back" className="w-9" />
        </Link>
      </div>
      <section className="flex md:gap-12 gap-6">
        <div className="relative">
          <div
            className="bg-custom-wheat py-3 px-2 flex items-center gap-x-4 text-center text-[10px] md:text-sm shadow font-normal cursor-pointer text-custom-deep-browm"
            onClick={toggleSortBy}
          >
            Sort By: {selectedSort} <i className="fa-solid fa-chevron-down"></i>
          </div>
          {isOpen && (
            <ul className="md:w-[173px] w-32 bg-custom-wheat flex flex-col items-center gap-y-5 p-3 font-medium absolute md:top-full left-12 text-custom-deep-browm text-[10px] md:text-[14px] shadow-md">
            
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleSort("New Arrival")}
              >
                New Arrival
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleSort("Price: Low to High")}
              >
                Price: Low to High
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleSort("Price: High to Low")}
              >
                Price: High to Low
              </li>
            </ul>
          )}
        </div>

        <div className="relative">
          <div
            className="bg-custom-wheat py-3 px-2 flex items-center gap-x-4 text-[10px] md:text-sm text-center shadow font-normal cursor-pointer text-custom-deep-browm"
            onClick={toggleBrand}
          >
            Brand <i className="fa-solid fa-chevron-down"></i>
          </div>
          {brandOpen && (
            <ul className="md:w-[173px] w-32 bg-custom-wheat flex flex-col items-center gap-y-5 p-3 font-medium absolute md:top-full right-0 text-custom-deep-browm text-[10px] md:text-[14px] shadow-md">
              <li className="hover:underline cursor-pointer">Nike</li>
              <li className="hover:underline cursor-pointer">Adidas</li>
              <li className="hover:underline cursor-pointer">Reebok</li>
              <li className="hover:underline cursor-pointer">Zara</li>
              <li className="hover:underline cursor-pointer">Gucci</li>
              <li className="hover:underline cursor-pointer">Lacoste</li>
            </ul>
          )}
        </div>

        <div className="relative">
          <div
            className="bg-custom-wheat py-3 px-2 flex items-center gap-x-4 text-[10px] md:text-sm text-center shadow font-normal cursor-pointer text-custom-deep-browm"
            onClick={toggleSize}
          >
            Size <i className="fa-solid fa-chevron-down"></i>
          </div>
          {sizeOpen && (
            <ul className="md:w-[173px] w-32 bg-custom-wheat flex flex-col items-center gap-y-5 p-3 font-medium absolute md:top-full right-0 text-custom-deep-browm text-[10px] md:text-[14px] shadow-md">
              <li className="hover:underline cursor-pointer">Small</li>
              <li className="hover:underline cursor-pointer">Medium</li>
              <li className="hover:underline cursor-pointer">Large</li>
              <li className="hover:underline cursor-pointer">XLarge</li>
              <li className="hover:underline cursor-pointer">XXLarge</li>
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
export default Filteritem;
