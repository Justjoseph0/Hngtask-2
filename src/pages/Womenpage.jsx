import React from "react";
import Filteritem from "../components/Filteritem";
import Footer from "../components/Footer";
import Freshseason from "../components/Freshseason";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Clothlist from "../components/Clothlist";
import { useState } from "react";
import { useEffect } from "react";

function Womenpage() {
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
       setProducts(data.items.filter((item) => item.description === "female"));
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
      <Womensection
        products={sortedProducts}
        setSortedProducts={setSortedProducts}
      />
      <Logo />
      <Freshseason />
      <Footer />
    </section>
  );
}

function Womensection({ products, setSortedProducts }) {
  return (
    <section>
      <Filteritem products={products} setSortedProducts={setSortedProducts} />

      <section className="bg-custom-wheat p-4 md:p-10 mt-14">
        <h2 className="font-[900] md:text-2xl text-custom-deep-browm text-xl ms-4">
          Top Selling For Women
        </h2>
        <Clothlist products={products} />
      </section>
    </section>
  );
}



export default Womenpage;
