function Footer() {
    return (
      <footer className="md:py-14 py-6 px-4">
        <section className="flex justify-between items-start">
          <div>
            <img src="/img/nav-logo.png" alt="logo" />
          </div>
          <ul>
            <h4 className="font-bold text-custom-deep-browm text-[8px] md:text-sm mb-4 uppercase">
              Need Help?
            </h4>
            <li className="text-custom-deep-browm  text-[8px] md:text-sm font-normal">
              <a href="#">Chat with us</a>
            </li>
            <li className="text-custom-deep-browm text-[8px] md:text-sm font-normal">
              <a href="#">Help center</a>
            </li>
            <li className="text-custom-deep-browm text-[8px] md:text-sm font-normal">
              <a href="#">Contact us</a>
            </li>
          </ul>
          <ul>
            <h4 className="font-bold text-custom-deep-browm text-[8px] md:text-sm mb-4 uppercase">
              About timbu
            </h4>
            <li className="text-custom-deep-browm text-[8px] md:text-sm font-normal">
              <a href="#">About us</a>
            </li>
            <li className="text-custom-deep-browm text-[8px] md:text-sm font-normal">
              <a href="#">Timbu express</a>
            </li>
            <li className="text-custom-deep-browm text-[8px] md:text-sm font-normal">
              <a href="#">Contact us</a>
            </li>
          </ul>
          <form className="md:block hidden">
            <h4 className="font-bold text-custom-deep-browm text-sm uppercase">
              new to timbu
            </h4>
            <p className="text-xs text-custom-deep-browm font-normal">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>

            <div className="relative w-full my-4">
              <input
                type="text"
                className="w-full bg-custom-wheat text-black border-custom-deep-browm border p-2 pl-8 outline-none font-[450] rounded-[4px]"
                placeholder="Iamonowu@gmail.com"
              />
              <i className="fa-solid fa-envelope absolute right-5 top-1/2 transform -translate-y-1/2 text-custom-deep-browm"></i>
            </div>

            <button className="w-full bg-custom-deep-browm p-2 rounded-[4px] text-custom-wheat">
              Submit
            </button>
          </form>
        </section>
        <section className="flex justify-between items-start mt-10">
          <div>
            <div>
              <p className="md:text-sm text-custom-deep-browm font-[450]  text-[8px]">
                All rights reserved Timbu Cloud shop
              </p>
            </div>
            <div
              className="flex md:flex-row flex-col gap-y-8 md:gap-0
           justify-between mt-8 font-[450] text-[8px] md:text-sm text-custom-deep-browm"
            >
              <p>Designed by @Olawale | Developed by @console.log(Wurld)</p>
              <p className="text-[8px] md:text-sm">HNG 11 | 2024</p>
            </div>
          </div>
          <form className="block md:hidden">
            <h4 className="font-bold text-custom-deep-browm text-[6px] uppercase">
              new to timbu
            </h4>
            <p className="md:text-xs text-custom-deep-browm font-normal text-[6px]">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>

            <div className="relative w-full my-4">
              <input
                type="text"
                className="w-full bg-custom-wheat text-custom-deep-browm border-custom-deep-browm border p-2 pl-8 text-[8px] font-[450] rounded-[4px]"
                placeholder="Iamonowu@gmail.com"
              />
              <i className="fa-solid fa-envelope absolute right-5 top-1/2 transform -translate-y-1/2 text-custom-deep-browm"></i>
            </div>

            <button className="w-full bg-custom-deep-browm p-2 rounded-[4px] text-custom-wheat text-[8px]">
              Submit
            </button>
          </form>
        </section>
      </footer>
    );
}
export default Footer