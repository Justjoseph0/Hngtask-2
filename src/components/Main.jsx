import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Clothcard from "./Clothcard";
import Freshseason from "./Freshseason";
import Footer from "./Footer";
import Logo from "./Logo";

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const apiKey = "05d173cf1b8b4a70b34717fa183b507a20240712183844704787";
  const appId = "FLYUDJK5AM5LMB4";
  const organizationId = "76ddfacf4d084edfab372f26ae44eb89";

  const getProduct = async () => {
    try {
      const response = await fetch(
        `/api/products?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <main>
      <Logo />
      <section className="mt-10">
        <div className="relative">
          <div
            className="bg-custom-wheat w-44 p-3 text-center shadow font-normal cursor-pointer text-custom-deep-browm"
            onClick={handleIsOpen}
          >
            Category <i className="fa-solid fa-chevron-down ps-3"></i>
          </div>
          {isOpen && (
            <ul className="w-48 bg-custom-wheat flex flex-col items-center gap-y-5 p-3 font-medium absolute top-8 left-36 text-custom-deep-browm">
              <Link to="/men">
                <li className="hover:underline cursor-pointer">Men</li>
              </Link>
              <Link to="/women">
                <li className="hover:underline cursor-pointer">Women</li>
              </Link>
              <Link to="/newarrival">
                <li className="hover:underline cursor-pointer">New Arrivals</li>
              </Link>
            </ul>
          )}
        </div>

        <ProductSection title="New Arrivals" products={products.slice(0, 3)} />
        <ProductSection
          title="Top selling for Women"
          products={products
            .filter((item) => item.description === "female")
            .slice(0, 3)}
        />
        <ProductSection
          title="Top selling for Men"
          products={products
            .filter((item) => item.description === "male")
            .slice(0, 3)}
        />
      </section>
      <Freshseason />
      <Footer />
    </main>
  );
}

function ProductSection({ title, products }) {
  return (
    <section className="py-8 bg-custom-wheat mt-8 flex justify-center">
      <div>
        <div className="flex justify-between px-3 items-center">
          <h2 className="md:text-2xl text-[12px] font-[900] text-custom-deep-browm">
            {title}
          </h2>
          <Link
            to={
              title === "New Arrivals"
                ? "/newarrival"
                : `/${title.toLowerCase().split(" ").join("")}`
            }
          >
            <span className="text-[8px] md:text-sm font-bold flex items-center gap-3">
              See All <img src="Icon.svg" alt="icon" className="w-[6px]" />
            </span>
          </Link>
        </div>
        <div className="mt-7 h-fit grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-20">
          {products.map((cloth, index) => (
            <Clothcard key={index} cloth={cloth} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
