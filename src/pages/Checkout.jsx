import Nav from "../components/Nav"
import Logo from "../components/Logo"
import Freshseason from "../components/Freshseason"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
function Checkout() {
    return(
        <>
        <Nav />
        <Addeditem />
        <Logo />
        <Freshseason />
        <Footer />
        </>
    )
}

function Addeditem() {
    return (
      <section className="h-fit md:h-[600px] flex justify-between w-full">
        <div className=" w-full lg:w-[70%] bg-custom-wheat h-full rounded-xl p-5 md:p-12">
          <div className="flex justify-between md:flex-row flex-col w-full">
            <div className="bg-white border-custom-brown border-2 rounded-xl p-2 ">
              <img
                src="img/white-men.png"
                alt="white-shirt"
                className=" h-full object-contain"
              />
            </div>
            <div>
              <h4 className="md:font-[900] font-[450] text-2xl md:text-4xl text-custom-deep-browm mt-7 md:mt-0">
                Lacoste white plain shirt
              </h4>
              <div className="flex md:flex-row flex-col justify-between md:items-center my-6 md:mt-2">
                <p className="font-[450] text-sm text-custom-deep-browm mb-4 md:mb-0">
                  Available in <span className="font-[900]">M L XL</span>
                </p>
                <div className="flex gap-2">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
              </div>

              <div className="flex justify-between items-center my-5">
                <h2 className="font-[900] text-3xl md:text-4xl text-custom-deep-browm">
                  ₦35,000
                </h2>
                <p className="text-xl line-through text-custom-deep-browm font-[450]">
                  ₦40,000
                </p>
              </div>
              <p className="text-sm text-custom-deep-browm">In stock</p>
              <p className="text-sm text-custom-deep-browm">
                + shipping from ₦ 250 to ISOLO
              </p>
              <button className="w-full bg-custom-deep-browm p-4 font-[450] text-custom-wheat text-xl rounded-md my-4 hidden md:block">
                Buy now
              </button>
              <Link to={'/cart'}>
                <button className="w-full p-2 md:p-4 font-[450] text-custom-wheat md:text-custom-deep-browm border-custom-deep-browm md:bg-custom-wheat border bg-custom-deep-browm text-xl rounded-md mt-7 md:mt-0">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white w-full mt-7 p-6">
            <p className="font-[450] text-sm text-custom-deep-browm">
              Elevate your wardrobe with our Premium Lacoste Gold Yellow Round
              Neck Shirt. Crafted from the finest materials, it offers
              unparalleled comfort and a sleek, modern fit. Perfect for any
              occasion, this shirt blends timeless style with contemporary
              flair, ensuring you look and feel your best all day long.
              Available in a variety of sophisticated colors to suit every
              preference.
            </p>
          </div>
        </div>
        <div className="w-[28%] hidden lg:block">
          <img
            src="img/cart-lmage.png"
            alt="cart image"
            className="w-full h-full"
          />{" "}
        </div>
      </section>
    );
}
export default Checkout