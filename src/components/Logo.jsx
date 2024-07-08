function Logo() {
  return (
    <section className="mt-5 md:px-24 py-6 bg-custom-white rounded-lg">
      <div className="flex justify-center items-center gap-7">
        <p className="text-[7px] font-[450] md:text-xl">
          All time trusted seller
        </p>
        <div className="flex gap-2 text-[10px] md:text-xl">
          <i className="fa-solid fa-star text-custom-brown"></i>
          <i className="fa-solid fa-star text-custom-brown"></i>
          <i className="fa-solid fa-star text-custom-brown"></i>
          <i className="fa-solid fa-star text-custom-brown"></i>
          <i className="fa-solid fa-star text-custom-brown"></i>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 w-full">
        <img src="img/Nike.png" alt="nike logo" className="md:w-16 w-6" />
        <img src="img/Adidas.png" alt="adidas logo" className="md:w-16 w-6" />
        <img src="img/Reebok.png" alt="reebok logo" className="md:w-16 w-6" />
        <img src="img/Zara.png" alt="zara logo" className="md:w-16 w-6" />
        <img src="img/Gucci.png" alt="gucci logo" className="md:w-16 w-6" />
        <img src="img/Lacoste.png" alt="lacoste logo" className="md:w-16 w-6" />
      </div>
    </section>
  );
}

export default Logo;
