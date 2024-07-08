import Nav from "../components/Nav";
import clotheData from "../data/clothData.json";
import Clothlist from "../components/Clothlist";
import Logo from "../components/Logo";
import Freshseason from "../components/Freshseason";
import Footer from "../components/Footer";
import Filteritem from "../components/Filteritem";

function Newarrival() {
  return (
    <section>
      <Nav />
      <UnisexSection clotheData={clotheData.clothes} />
      <Logo />
      <Freshseason />
      <Footer />
    </section>
  );
}

function UnisexSection({ clotheData }) {

  let sortedItem = clotheData
    .slice()
    .sort((a, b) => new Date(b.arrivalDate) - new Date(a.arrivalDate));

 
  return (
    <section>
      <Filteritem />

      <section className="bg-custom-wheat p-4 md:p-10 mt-14">
        <h2 className="font-[900] md:text-2xl text-custom-deep-browm text-xl ms-4">
          New Arrivals
        </h2>
        <Clothlist sortedItem={sortedItem} />
      </section>
    </section>
  );
}



export default Newarrival;
