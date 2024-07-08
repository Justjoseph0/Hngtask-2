
import Nav from "../components/Nav"
import clotheData from "../data/clothData.json"
import Logo from "../components/Logo";
import Freshseason from "../components/Freshseason";
import Footer from "../components/Footer";
import Clothlist from "../components/Clothlist";
import Filteritem from "../components/Filteritem";


function Menpage() {
  
    return (
      <section>
        <Nav />
        <Mensection clotheData={clotheData.clothes} />
        <Logo />
        <Freshseason />
        <Footer />
      </section>
    );

}

function Mensection({ clotheData }) {

    let sortedItem = clotheData.filter((item) => item.category === "Men");


  return (
    <section>
      <Filteritem />
      <section className="bg-custom-wheat p-2 md:p-10 mt-14">
        <h2 className="font-[900] md:text-2xl text-custom-deep-browm text-xl ms-4">
          Top Selling For Men
        </h2>
        <Clothlist sortedItem={sortedItem} />
      </section>
    </section>
  );
}


export default Menpage