import YWave from "../assets/waveyellow.png";
import PriceRange from "./PriceRange";

function FilterSection() {
  return (
    <>
      <div>
        <h1 className="heading text-[22px] mt-20 mx-5 font-bold">
          Filter Price
        </h1>
        <img className="w-8 mx-5 mt-3" src={YWave} alt="" />
        <PriceRange />
        <div className="w-full flex mt-5">
          <button className="mx-auto px-10 py-3 uppercase text-white rounded-full bg-sky-400 hover:bg-[#f5a934] transition:hover duration-500 ease-in-out font-semibold text-[18px]">
            Filter
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
