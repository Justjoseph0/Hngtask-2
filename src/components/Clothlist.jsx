import Clothcard from "../components/Clothcard";

function Clothlist({ sortedItem }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 mt-10 gap-x-5">
      {sortedItem.map((cloth, index) => (
        <Clothcard key={index} cloth={cloth} />
      ))}
    </div>
  );
}
export default Clothlist;
