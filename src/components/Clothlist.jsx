import Clothcard from "../components/Clothcard";
import React from "react";



function Clothlist({products}) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 mt-10 gap-x-5">
      {products.map((products) => (
        <Clothcard key={products.unique_id} cloth={products} />
      ))}
    </div>
  );
}
export default Clothlist;
