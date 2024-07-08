
import Filteritem from "../components/Filteritem";
import Footer from "../components/Footer";
import Freshseason from "../components/Freshseason";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import clotheData from "../data/clothData.json";
import Clothlist from "../components/Clothlist";

function Womenpage() {
  return (
    <section>
      <Nav />
      <Womensection clotheData={clotheData.clothes} />
      <Logo />
      <Freshseason />
      <Footer />
    </section>
  );
}

function Womensection({ clotheData }) {
  let sortedItem = clotheData.filter((item) => item.category === "Female");
  return (
    <section>
      <Filteritem />

      <section className="bg-custom-wheat p-4 md:p-10 mt-14">
        <h2 className="font-[900] md:text-2xl text-custom-deep-browm text-xl ms-4">
          Top Selling For Women
        </h2>
        <Clothlist sortedItem={sortedItem} />
      </section>
    </section>
  );
}



export default Womenpage;
