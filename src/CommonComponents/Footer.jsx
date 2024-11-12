import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <div className="w-full h-auto bg-[rgb(14,44,80)]">
        <div className="w-[80%] mx-auto flex justify-between border-b-2">
          <div className="w-2/3 mx-auto py-20 relative">
            <input
              className="ml-32 py-4 pl-10 pr-48 w-[600px] outline-[#f5a934] rounded-full placeholder-[#757575] placeholder:font-semibold"
              type="text"
              required
              placeholder="Email address to subscribe"
            />
            <button
              type="submit"
              className="absolute py-4 px-10 rounded-full bg-[#f5a934] text-white right-[45px] uppercase font-bold"
            >
              Subscribe
            </button>
          </div>
          <div className="flex px-28 py-[90px] text-white">
            <FaXTwitter className="text-[35px] mr-2 p-2 rounded-full bg-[#213D5E] hover:bg-sky-500 transition-hover duration-700 ease-in-out cursor-pointer" />
            <FaFacebookF className="text-[35px] mr-2 p-2 rounded-full bg-[#213D5E] hover:bg-sky-500 transition-hover duration-700 ease-in-out cursor-pointer" />
            <FaGooglePlusG className="text-[35px] mr-2 p-2 rounded-full bg-[#213D5E] hover:bg-sky-500 transition-hover duration-700 ease-in-out cursor-pointer" />
            <FaYoutube className="text-[35px] mr-2 p-2 rounded-full bg-[#213D5E] hover:bg-sky-500 transition-hover duration-700 ease-in-out cursor-pointer" />
            <FaPinterestP className="text-[35px] mr-2 p-2 rounded-full bg-[#213D5E] hover:bg-sky-500 transition-hover duration-700 ease-in-out cursor-pointer" />
          </div>
        </div>
        <div className="w-[80%] py-20 flex mx-auto justify-between text-white">
          <div data-aos="fade-up" data-aos-delay='800' className="w-1/4">
            <img className="w-[180px] my-6 mx-auto" src={Logo} alt="" />
            <p className="w-[350px] mx-auto">
              Aliquaut enim mini veniam quis trud exerc tation ullamco exa
              consequat. Duis aute rue dolor prehendrit lorem ipsum sit amet
              cons ctetur adipisicing sed.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1000" className=" relative inline-block">
            <h2 className="text-white heading text-[25px] font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[2px] after:bg-sky-500">
              About Us
            </h2>
            <ul className="mt-7 footerFont">
                <a href="/about"><li className="mt-3">Why Choose Us</li></a>
                <a href="/about"><li className="mt-3">Free Water Bottles</li></a>
                <a href="/about"><li className="mt-3">Water Dispensers</li></a>
                <a href="/about"><li className="mt-3">Bottled Water Coolers</li></a>
                <a href="/about"><li className="mt-3">Contact Us</li></a>
                <a href="/about"><li className="mt-3">Terms & Conditions</li></a>
                
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="1100" className="relative inline-block">
            <h2 className="text-white heading text-[25px] font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[2px] after:bg-sky-500">
              Shop
            </h2>
            <ul className="mt-7 footerFont">
                <a href="/shop"><li className="mt-3">Our Shop</li></a>
                <a href="/shop"><li className="mt-3">Our Products</li></a>
                <a href="/shop"><li className="mt-3">Categories</li></a>            
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="1200" className="relative inline-block">
            <h2 className="text-white heading text-[25px] font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[2px] after:bg-sky-500">
              Contact Us
            </h2> 
            <ul className="mt-7 footerFont">
                <li className="mt-3">1/37 E, Mount Poonmallee Rd,</li>
                <li className="mt-3">St Thomas Mount, Chennai - 600016</li>
                <li className="mt-3">Call Us <span className="hover:text-[#f5a934] transition-hover duration-500 ease-in-out cursor-pointer">+91-90256 33829</span></li>
                <a href=""><li className="mt-3">E-mail: <span className="hover:text-[#f5a934] transition-hover duration-500 ease-in-out cursor-pointer">info@helixotech.com</span></li></a>            
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
