import YWave from "../assets/waveyellow.png";
import { BsDropletHalf } from "react-icons/bs";
import { TbFilterCheck } from "react-icons/tb";

import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import BWave from '../assets/waveBlack.png'

function Quality() {
  return (
    <div className="qualityBg py-10">
      <div className="w-[80%] bg-white bg-opacity-70 rounded-xl p-10 mx-auto">
        <div>
          <h1 className="heading text-[50px] text-center mt-16">
            A Trusted Name In
            <br />
            Bottled Water Industry
          </h1>
          <img className="h-[7px] mx-auto my-4" src={YWave} alt="" />
        </div>

        <div className="flex gap-x-2 justify-between mt-20 cursor-pointer text-center">
          <div className="px-5">
            <div data-aos="fade-down-right"><BsDropletHalf className="text-[80px] text-sky-500 hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto mb-10" /></div>
            <h1 data-aos="fade-right" data-aos-delay="100" className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              Naturally Alkaline
            </h1>
            <p data-aos="fade-right" data-aos-delay="100" className="text-center mt-5 text-gray-900">
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
            <button data-aos="fade-right" data-aos-delay="100" className="text-[#F5A93F] underline mt-5">Read More...</button>
          </div>
          <img className="h-[50px] my-auto" src={BWave} alt="" />
          <div className="px-5">
            <div data-aos="fade-down-right" data-aos-delay="150"><TbFilterCheck  className="text-[80px] text-sky-500 hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto mb-10" /></div>
            <h1 data-aos="fade-right" data-aos-delay="150" className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              5 Steps Filteration
            </h1>
            <p data-aos="fade-right" data-aos-delay="150" className="text-center mt-5 text-gray-900">
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
            <button data-aos="fade-right" data-aos-delay="100" className="text-[#F5A93F] underline mt-5">Read More...</button>
          </div>
          <img className="h-[50px] my-auto" src={BWave} alt="" />
          <div className="px-5">
            <div data-aos="fade-down-right" data-aos-delay="200"><FaGlassWaterDroplet  className="text-[80px] text-sky-500 hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto mb-10" /></div>
            <h1 data-aos="fade-right" data-aos-delay="200" className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              Silica Rich
            </h1>
            <p data-aos="fade-right" data-aos-delay="200" className="text-center mt-5 text-gray-900">
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
            <button data-aos="fade-right" data-aos-delay="100" className="text-[#F5A93F] underline mt-5">Read More...</button>
          </div>
          <img className="h-[50px] my-auto" src={BWave} alt="" />
          <div className="px-5">
            <div data-aos="fade-down-right" data-aos-delay="250"><IoShieldCheckmarkOutline  className="text-[80px] text-sky-500 hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto mb-10" /></div>
            <h1 data-aos="fade-right" data-aos-delay="250" className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              Quality Certified
            </h1>
            <p data-aos="fade-right" data-aos-delay="250" className="text-center mt-5 text-gray-900">
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
            <button data-aos="fade-right" data-aos-delay="100" className="text-[#F5A93F] underline mt-5">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
