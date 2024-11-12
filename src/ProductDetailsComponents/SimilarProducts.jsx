import YWave from "../assets/waveyellow.png";
import { FaBottleDroplet } from "react-icons/fa6";
import { FaBottleWater } from "react-icons/fa6";
import { LiaWineBottleSolid } from "react-icons/lia";
import { BsCart2 } from "react-icons/bs";

function truncate(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
}
function SimilarProducts() {
  return (
    <>
      <div className="mt-28">
        <div className="w-[70%] mx-auto">
          <div className="flex px-24 py-16 justify-between">
            <div>
              <h1 className="heading text-[50px] -mt-4 pr-5">
                Related Bottles
              </h1>
              <img
                className="w-[80px] float-end mt-3 pr-6"
                src={YWave}
                alt=""
              />
            </div>
            <div className="border-r-4 border-r-[#246396]"></div>
            <p className="w-[50%] pl-5 text-gray-500">
              Aliquaut enim mini veniam quis trud exercitation ullamco exa
              consequat. Duis aute rue dolor prehendrit lorem ipsum sit amet
              consectetur adipisicing sed.
            </p>
          </div>
          <div className="flex gap-x-9 justify-center text-center">
            <div className="productCard w-1/3 mb-14">
              <LiaWineBottleSolid className="icon mx-auto text-[200px]" />
              <div className="label">2 x 1L bottles</div>
              <h1 className="heading text-[25px] mt-3 font-semibold">
                Naturally Spark Water
              </h1>
              <p className="text-[#666] mt-3">
                {truncate(
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti blanditiis tempora impedit optio reprehenderit facilis saepe, fuga quod sit accusantium ab distinctio ex molestias, excepturi modi dolorum labore placeat.",
                  65
                )}
              </p>
              <p className="heading text-[#f5a934] text-[25px] font-bold mt-8">
              &#x20B9;1099.99 <span className="line-through text-[#ccc]"> &#x20B9;1499.99</span>
              </p>

              <button className="z-1 flex uppercase font-semibold mx-auto border-2 border-[#13BBEA] px-12 py-2 mt-7 mb-5 rounded-full hover:text-white hover:bg-[#f5a934] hover:border-[#f5a934] transition-all duration-500 ease-in-out">
                <BsCart2 className="text-[18px] mt-[2px] mr-2" />
                Add To Cart
              </button>
            </div>

            <div className="productCard w-1/3 mb-14">
              <FaBottleDroplet className="icon mx-auto text-[150px] mt-7" />
              <div className="label mt-5">3 x 2L bottles</div>
              <h1 className="heading text-[25px] mt-3 font-semibold">
                Classic Pure Water
              </h1>
              <p className="text-[#666] mt-3">
                {truncate(
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti blanditiis tempora impedit optio reprehenderit facilis saepe, fuga quod sit accusantium ab distinctio ex molestias, excepturi modi dolorum labore placeat.",
                  65
                )}
              </p>
              <p className="heading text-[#f5a934] text-[25px] font-bold mt-8">
              &#x20B9;2499.00 <span className="line-through text-[#ccc]"> &#x20B9;3499.00</span>
              </p>

              <button className="flex uppercase font-semibold mx-auto border-2 border-[#13BBEA] px-12 py-2 mt-7 mb-5 rounded-full hover:text-white hover:bg-[#f5a934] hover:border-[#f5a934] transition-hover duration-500 ease-in-out">
                <BsCart2 className="text-[18px] mt-[2px] mr-2" />
                Add To Cart
              </button>
            </div>
            <div className="productCard w-1/3 mb-14">
              <FaBottleWater className="icon mx-auto text-[150px] mt-7" />
              <div className="label mt-5">6 x 3L bottles</div>
              <h1 className="heading text-[25px] mt-3 font-semibold">
                Diamond Mineral Water
              </h1>
              <p className="text-[#666] mt-3">
                {truncate(
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti blanditiis tempora impedit optio reprehenderit facilis saepe, fuga quod sit accusantium ab distinctio ex molestias, excepturi modi dolorum labore placeat.",
                  65
                )}
              </p>
              <p className="heading text-[#f5a934] text-[25px] font-bold mt-8">
              &#x20B9;4999.99 <span className="line-through text-[#ccc]"> &#x20B9;6999.99</span>
              </p>

              <button className="flex uppercase font-semibold mx-auto border-2 border-[#13BBEA] px-12 py-2 mt-7 mb-5 rounded-full hover:text-white hover:bg-[#f5a934] hover:border-[#f5a934] transition-hover duration-500 ease-in-out">
                <BsCart2 className="text-[18px] mt-[2px] mr-2" />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SimilarProducts;
