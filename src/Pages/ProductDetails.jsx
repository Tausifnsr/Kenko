import { useState } from "react";
import Footer from "../CommonComponents/Footer";
import Navbar from "../CommonComponents/Navbar";
import CustomDropdown from "../ProductDetailsComponents/CustomDropdown";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import Tabs from "../ProductDetailsComponents/Tabs";
import SimilarProducts from "../ProductDetailsComponents/SimilarProducts";

function ProductDetails() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="mt-52"></div>
        <div className="w-4/5 mx-auto">
          <div className="flex ">
            <div className="w-1/2">
              <img
                className="px-10 py-4"
                src="https://tiimg.tistatic.com/fp/1/007/698/100-pure-and-natural-healthy-good-surface-membrane-filter-pure-packaged-drinking-water--886.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <h1 className="heading text-[30px] font-bold">
                Naturally Spark Water
              </h1>
              <div className="bg-gray-300 text-[#666] w-28 rounded-full my-4 footerFont text-center">
                2 x 5L bottles
              </div>
              <p className="text-[#666] mt-6 w-[600px]">
                Exercitation lamco laboris aliquip duis aute irure dolor in
                reprehenderid voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa.
              </p>
              <div>
                <p className="heading font-bold text-[30px] mt-8 text-[#f5a93f]">
                &#x20B9;4499.00 <span className="line-through text-[#ccc]"> &#x20B9;7495.99</span>
                </p>
              </div>
              <CustomDropdown />
              <div className="flex">
                <div className="flex footerFont justify-between mt-4 px-4 py-2 w-28 rounded-full bg-[#f5f5f5]">
                  <div className="my-auto">
                    <h1>{count}</h1>
                  </div>
                  <div className="flex text-xl text-[#666] flex-col gap-y-1">
                    <button onClick={increment}>
                      <MdOutlineKeyboardArrowUp />
                    </button>
                    <button onClick={decrement}>
                      <MdOutlineKeyboardArrowDown />
                    </button>
                  </div>
                </div>
                <button className="flex mt-5 mx-3 py-4 px-16 my-auto uppercase footerFont font-semibold border-2 border-sky-400 rounded-full hover:bg-[#f5a93f] hover:text-[#fff] hover:border-[#f5a93f] transition-all duration-300 ease-in-out">
                  <BsCart2 className="-ml-2 mx-2 text-[18px]" />
                  Buy Now
                </button>
              </div>
              <div className="flex flex-col gap-y-1 footerFont mt-8 ">
                <p>
                  Categories:{" "}
                  <a
                    className="text-[#666] hover:text-[#f5a93f] transition-all duration-200 ease-in-out"
                    href="#"
                  >
                    Natural Water
                  </a>
                  ,{" "}
                  <a
                    className="text-[#666] hover:text-[#f5a93f] transition-all duration-200 ease-in-out"
                    href="#"
                  >
                    Bottle
                  </a>
                </p>
                <p>
                  Tags:{" "}
                  <a
                    className="text-[#666] hover:text-[#f5a93f] transition-all duration-200 ease-in-out"
                    href="#"
                  >
                    Natural Water
                  </a>
                  ,{" "}
                  <a
                    className="text-[#666] hover:text-[#f5a93f] transition-all duration-200 ease-in-out"
                    href="#"
                  >
                    Bottle
                  </a>
                </p>
                <p>
                  Product ID: <span className="text-[#666]">3638</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Tabs />
          <SimilarProducts/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
