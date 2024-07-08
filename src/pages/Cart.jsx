import Footer from "../components/Footer";
import Freshseason from "../components/Freshseason";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

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
  return (
    <section className="h-fit mt-10 md:mt-16 flex justify-between">
      <div className="bg-custom-wheat p-3 lg:p-10 lg:w-[68%] rounded-lg w-full">
        <h3 className="font-[900] text-2xl text-custom-deep-browm">Cart</h3>

        {/* Cart item will be here */}
        <section className="flex flex-col gap-y-3">
          {/* nike blue shirt here */}
          <div className="flex pt-6 lg:pt-10 lg:gap-x-7 gap-x-5">
            <div className="bg-white border border-custom-deep-browm rounded-xl h-[145px] md:h-full lg:w-[250px]">
              <img
                src="img/blue-shirts .png"
                alt="T-Shirt"
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-y-5 lg:gap-y-8 w-full">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
                <h3 className="font-[450] lg:text-2xl text-sm">
                  Nike blue plain shirt
                </h3>
                <p className="font-[900] text-xl lg:block hidden">₦80,000</p>
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Nike</p>
                <div className="flex gap-1 text-[10px] lg:hidden">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                <p className="line-through lg:block hidden">₦88,000</p>
              </div>
              <div className="flex justify-between ">
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
                    ₦80,000
                  </p>
                  <p className="text-[12px] font-[450] text-custom-deep-browm">
                    ₦78,000
                  </p>
                </div>
                {/*End of Mobile */}
                <div className="flex lg:gap-5 gap-3">
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    +
                  </button>
                  <span>2</span>
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    -
                  </button>
                </div>
              </div>

              {/* Mobile */}
              <div className="text-[10px] font-[450] text-custom-deep-browm lg:hidden">
                <p>in stock</p>
                <p>+ shipping from ₦ 250 to ISOLO</p>
              </div>
              {/*End of Mobile */}

              <div className="flex justify-between">
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4 text-[14px]">
                  <img src="delete.svg" alt="delete icon" className="w-3" />
                  Remove
                </button>
                <button className="w-[48%] bg-custom-deep-browm text-custom-wheat rounded-sm text-[14px]">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          {/* border */}
          <hr className="border-b-1 border-custom-deep-browm my-5" />

          {/* lacoste gold shirt */}
          <div className="flex pt-6 lg:pt-10 lg:gap-x-7 gap-x-5">
            <div className="bg-white border border-custom-deep-browm rounded-xl h-[145px] md:h-full lg:w-[250px]">
              <img
                src="img/black-shirt.png"
                alt="T-Shirt"
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-y-5 lg:gap-y-8 w-full">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
                <h3 className="font-[450] lg:text-2xl text-sm">
                  Lacoste black plain shirt
                </h3>
                <p className="font-[900] text-xl lg:block hidden">₦58,000</p>
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Lacoste</p>
                <div className="flex gap-1 text-[10px] lg:hidden">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                <p className="line-through lg:block hidden">₦88,000</p>
              </div>
              <div className="flex justify-between ">
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
                    ₦58,000
                  </p>
                  <p className="text-[12px] font-[450] text-custom-deep-browm">
                    ₦88,000
                  </p>
                </div>
                {/*End of Mobile */}
                <div className="flex lg:gap-5 gap-3">
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    +
                  </button>
                  <span>2</span>
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    -
                  </button>
                </div>
              </div>

              {/* Mobile */}
              <div className="text-[10px] font-[450] text-custom-deep-browm lg:hidden">
                <p>in stock</p>
                <p>+ shipping from ₦ 250 to ISOLO</p>
              </div>
              {/*End of Mobile */}

              <div className="flex justify-between">
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4 text-[14px]">
                  <img src="delete.svg" alt="delete icon" className="w-3" />
                  Remove
                </button>
                <button className="w-[48%] bg-custom-deep-browm text-custom-wheat rounded-sm text-[14px]">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          {/* border */}
          <hr className="border-b-1 border-custom-deep-browm my-5" />

          {/* nike white shirt */}
          <div className="flex pt-6 lg:pt-10 lg:gap-x-7 gap-x-5">
            <div className="bg-white border border-custom-deep-browm rounded-xl h-[145px] md:h-full lg:w-[250px]">
              <img
                src="img/white-men.png"
                alt="white-shirt"
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-y-5 lg:gap-y-8 w-full">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
                <h3 className="font-[450] lg:text-2xl text-sm">
                  Nike white plain shirt
                </h3>
                <p className="font-[900] text-xl lg:block hidden">₦78,000</p>
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Nike</p>
                <div className="flex gap-1 text-[10px] lg:hidden">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                <p className="line-through lg:block hidden">₦88,000</p>
              </div>
              <div className="flex justify-between ">
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
                    ₦78,000
                  </p>
                  <p className="text-[12px] font-[450] text-custom-deep-browm">
                    ₦88,000
                  </p>
                </div>
                {/*End of Mobile */}
                <div className="flex lg:gap-5 gap-3">
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    +
                  </button>
                  <span>2</span>
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    -
                  </button>
                </div>
              </div>

              {/* Mobile */}
              <div className="text-[10px] font-[450] text-custom-deep-browm lg:hidden">
                <p>in stock</p>
                <p>+ shipping from ₦ 250 to ISOLO</p>
              </div>
              {/*End of Mobile */}

              <div className="flex justify-between">
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4 text-[14px]">
                  <img src="delete.svg" alt="delete icon" className="w-3" />
                  Remove
                </button>
                <button className="w-[48%] bg-custom-deep-browm text-custom-wheat rounded-sm text-[14px]">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          {/* border */}
          <hr className="border-b-1 border-custom-deep-browm my-5 hidden lg:block" />

          <div className="lg:flex pt-4 gap-x-7 hidden">
            <div className="bg-white border border-custom-deep-browm rounded-xl w-[250px]">
              <img
                src="img/black-shirt.png"
                alt="nike shirt"
                className="h-full object-contain"
              />
            </div>

            <div className="lg:flex flex-col gap-y-8 w-full hidden">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
                <h3 className="font-[450] text-2xl">Reebok black plain shirt</h3>
                <p className="font-[900] text-xl">₦48,000</p>
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Reebok</p>
                <p className="line-through ">₦58,000</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                <div className="flex gap-5">
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    +
                  </button>
                  <span>1</span>
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    -
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4">
                  <img src="delete.svg" alt="delete icon" />
                  Remove
                </button>
                <button className="w-[48%] bg-custom-deep-browm text-custom-wheat rounded-sm">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          <button className="font-[450] text-xl text-custom-wheat bg-custom-deep-browm py-3 rounded-md text-center mt-5 ">
            Checkout (<span className="font-[700]">₦</span>264,000)
          </button>
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
