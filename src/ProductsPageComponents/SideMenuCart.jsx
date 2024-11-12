import YWave from "../assets/waveyellow.png";
import { FaBottleWater } from "react-icons/fa6";
import { FaBottleDroplet } from "react-icons/fa6";

function SideMenuCart() {
  return (
    <>
      <div className="mt-20">
        <h1 className="heading text-[22px]  mx-5 font-bold">
          Shopping Cart
        </h1>
        <img className="w-8 mx-5 mt-3" src={YWave} alt="" />
      </div>

      <div className="w-[80%] m-5 py-8 border-b-2">
        <div className="flex mb-2">
          <div className="relative">
            <FaBottleWater className="text-[#246396] text-[85px] bg-[#f3f9ff] px-7 py-7" />
            <button className="absolute top-0 right-2 text-[#ff0000]">X</button>
          </div>
          <div>
            <h1 className="heading text-[17px] mx-5">Classic Pure Water</h1>
            <p className="mx-5 text-[17px] mt-1">
              3 x <span className="text-[#246396]">  &#x20B9;2499.99</span>
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="relative">
            <FaBottleDroplet className="text-[#246396] text-[85px] bg-[#f3f9ff] px-7 py-7" />
            <button className="absolute top-0 right-2 text-[#ff0000]">X</button>
          </div>
          <div>
            <h1 className="heading text-[17px] mx-5">Diamond Mineral Water</h1>
            <p className="mx-5 text-[17px] mt-1">
              1 x <span className="text-[#246396]">&#x20B9;1,666.66</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-5 text-right pb-5 border-b-2">
        <h1 className="text-[18px]">Subtotal: <span className="text-[#246395] font-bold">&#x20B9;4,166.65</span></h1>
      </div>

      <div className="flex flex-col ml-5 mr-14 mt-8">
        <button className="py-3 bg-sky-400 hover:bg-[#f5a934] transition:hover duration-500 ease-in-out uppercase font-semibold text-[18px] text-white mb-1 rounded-full">View Cart</button>
        <button className="py-3 bg-[#f5a934] hover:bg-[#246396] transition:hover duration-500 ease-in-out uppercase font-semibold text-[18px] text-white mb-1 rounded-full">Checkout</button>
      </div>
    </>
  );
}

export default SideMenuCart;
