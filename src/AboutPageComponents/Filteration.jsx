import YWave from "../assets/waveyellow.png";
import { FaRecycle } from "react-icons/fa";
import { PiDropFill } from "react-icons/pi";
import { TbDropCircle } from "react-icons/tb";
import Arrow from "../assets/filterArrow.png";

function Filteration() {
  return (
    <div className="filterBg">
      <div className="bg-blue-800 bg-opacity-50">
        <div className="text-white w-[80%] mx-auto">
          <div className="flex px-24 pt-16 justify-between">
            <div>
              <h1 className="heading text-[50px] -mt-4 pr-5">
                Filteration Process
              </h1>
              <img
                className="w-[80px] float-end mt-3 pr-6"
                src={YWave}
                alt=""
              />
            </div>
            <div className="border-r-4 border-r-[#fff]"></div>
            <p className="w-[50%] pl-5">
              Aliquaut enim mini veniam quis trud exercitation ullamco exa
              consequat. Duis aute rue dolor prehendrit lorem ipsum sit amet
              consectetur adipisicing sed.
            </p>
          </div>
        </div>
        <div className="flex w-[80%] pb-20 mx-auto gap-x-2 justify-between mt-20 cursor-pointer text-center">
          <div className="px-5">
            <div
              className="relative flip py-16"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23F5A93F%22%20d%3D%22M51.8%2C-2C51.8%2C18.2%2C25.9%2C36.4%2C-1.4%2C36.4C-28.8%2C36.4%2C-57.5%2C18.2%2C-57.5%2C-2C-57.5%2C-22.2%2C-28.8%2C-44.3%2C-1.4%2C-44.3C25.9%2C-44.3%2C51.8%2C-22.2%2C51.8%2C-2Z%22%20transform%3D%22translate(100%20100)%22%20/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <PiDropFill className="text-[80px] text-white mx-auto" />
            </div>
            <h1 className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto text-white">
              Deep Cleanse & Chemical Removal
            </h1>
            <img className="h-2 mx-auto mt-5" src={YWave} alt="" />
            <p
              className="text-center mt-5 text-white"
            >
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
          </div>
          <img className="h-[50px] my-auto" src={Arrow} alt="" />
          <div className="px-5">
            <div
              className="relative flip py-16"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23F5A93F%22%20d%3D%22M51.8%2C-2C51.8%2C18.2%2C25.9%2C36.4%2C-1.4%2C36.4C-28.8%2C36.4%2C-57.5%2C18.2%2C-57.5%2C-2C-57.5%2C-22.2%2C-28.8%2C-44.3%2C-1.4%2C-44.3C25.9%2C-44.3%2C51.8%2C-22.2%2C51.8%2C-2Z%22%20transform%3D%22translate(100%20100)%22%20/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <TbDropCircle className="text-[80px] text-white mx-auto" />
            </div>
            <h1
              className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto text-white"
            >
              Micro Extraction & Sterlisation
            </h1>
            <img className="h-2 mx-auto mt-5" src={YWave} alt="" />
            <p
              className="text-center mt-5 text-white"
            >
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
          </div>
          <img className="h-[50px] my-auto" src={Arrow} alt="" />
          <div className="px-5">
            <div
              className="relative flip py-16"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23F5A93F%22%20d%3D%22M51.8%2C-2C51.8%2C18.2%2C25.9%2C36.4%2C-1.4%2C36.4C-28.8%2C36.4%2C-57.5%2C18.2%2C-57.5%2C-2C-57.5%2C-22.2%2C-28.8%2C-44.3%2C-1.4%2C-44.3C25.9%2C-44.3%2C51.8%2C-22.2%2C51.8%2C-2Z%22%20transform%3D%22translate(100%20100)%22%20/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <FaRecycle className="text-[80px] text-white mx-auto" />
            </div>
            <h1
              className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-all duration-500 ease-in-out mx-auto text-white"
            >
              Chlorine Disinfection For Mineral Water
            </h1>
            <img className="h-2 mx-auto mt-5" src={YWave} alt="" />
            <p
              className="text-center mt-5 text-white"
            >
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filteration;
