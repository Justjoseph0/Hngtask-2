import { Link } from "react-router-dom";
function Freshseason() {
  return (
    <section className="bg-[url('/img/freshSeason.png')] bg-no-repeat bg-cover h-[200px] items-center  md:h-[411px] rounded-lg flex justify-between  my-10 md:my-20 md:py-0 ">
      <div className="md:ms-10 ms-5">
        <div className="w-40 text-[12px] md:w-96 bg-orange h-[50px] py-8 md:h-36 border-[3px] flex justify-center items-center">
          <h2>
            <span className="md:text-3xl text-brown">
              Fresh for the Season:
            </span>
            <br />
            <span className="md:text-3xl font-bold text-brown">
              New Arrivals Just In!
            </span>
          </h2>
        </div>
        <p className="text-white font-normal text-lg mt-6 md:block hidden">
          Discover our premium plain shirts, from classic whites to bold colors.
        </p>
        <p className="text-white font-normal text-lg mt-2 md:block hidden">
          Find your new favorite today.
        </p>
        <Link to="/newarrival">
          <button className="w-28 md:w-44 bg-white font-[900] text-[10px] md:text-sm py-2 mt-3 md:mt-9 text-custom-brown rounded-sm">
            Shop New Arrivals
          </button>
        </Link>
      </div>
      <div className="w-[40%] h-full">
        <img
          src="img/season-shirt.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Freshseason