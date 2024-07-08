
function Clothcard({ cloth }) {
//   console.log(cloth.img);

const formattedPrice = cloth.price.toLocaleString();
const formattedDiscountedPrice = cloth.discountedPrice.toLocaleString();
  return (
    <div
      className=" bg-white rounded-md p-2 sm:w-[238px]  w-[90%] mx-auto"
      aria-label="card"
    >
      <div className="border-custom-brown border rounded-lg p-2 h-[285px] sm:h-[224px]">
        <img
          src={cloth.img || "img/white-men.png"}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <p className="sm:text-[15px] text-[20px] font-[450] text-custom-deep-browm mt-2">
        {cloth.name}
      </p>
      <div className="flex items-end justify-between text-custom-deep-browm my-3">
        <p className="font-[900] text-[26px] sm:text-xl">₦{formattedPrice}</p>
        <p className="font-normal text-[20px] line-through sm:text-lg">
          ₦{formattedDiscountedPrice}
        </p>
      </div>
      <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
        Add to cart
      </button>
    </div>
  );
}
export default Clothcard
