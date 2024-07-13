import React, { useEffect, useState } from "react";
import Clothlist from "../components/Clothlist";
import Filteritem from "../components/Filteritem";
import Footer from "../components/Footer";
import Freshseason from "../components/Freshseason";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

function Menpage() {
  const apiKey = "05d173cf1b8b4a70b34717fa183b507a20240712183844704787";
  const appId = "FLYUDJK5AM5LMB4";
  const organizationId = "76ddfacf4d084edfab372f26ae44eb89";

  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch(
        `/api/products?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      //  console.log(data.items);
      setProducts(data.items.filter((item) => item.description === "male"));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  return (
    <section>
      <Nav />
      <Mensection
        products={sortedProducts}
        setSortedProducts={setSortedProducts}
      />
      <Logo />
      <Freshseason />
      <Footer />
    </section>
  );
}

// ("05d173cf1b8b4a70b34717fa183b507a20240712183844704787")
function Mensection({ products, setSortedProducts }) {
  return (
    <section>
      <Filteritem products={products} setSortedProducts={setSortedProducts} />
      <section className="bg-custom-wheat p-2 md:p-10 mt-14">
        <h2 className="font-[900] md:text-2xl text-custom-deep-browm text-xl ms-4">
          Top Selling For Men
        </h2>
        <Clothlist products={products} />
      </section>
    </section>
  );
}

export default Menpage;
