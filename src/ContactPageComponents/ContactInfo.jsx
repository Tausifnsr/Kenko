import YWave from "../assets/waveyellow.png";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

function ContactInfo() {
  return (
    <div>
      <div className="text-[30px]">Contact Informaion</div>
      <img className="h-2 mt-2" src={YWave} alt="" />
      <div className="mt-10">
        <div className="flex">
          <IoCall className="text-[#5080BA] text-[45px] p-3 bg-[#F3F8FB] rounded-full hover:text-white hover:bg-[#f5a93f] transition-all duration-500 ease-in-out cursor-pointer" />
          <p className="footerFont text-[18px] my-auto px-5 font-semibold">
            Call Us{" "}
            <span className=" hover:text-[#f5a93f] cursor-pointer px-1 font-normal">
            +91-90256 33829
            </span>
          </p>
        </div>

        <div className="flex my-5">
          <FaLocationDot className="text-[#5080BA] text-[45px] p-3 bg-[#F3F8FB] rounded-full hover:text-white hover:bg-[#f5a93f] transition-all duration-500 ease-in-out cursor-pointer" />
          <p className="footerFont text-[18px] my-auto px-5">
          1/37 E, Mount Poonmallee Rd,
            <br />
            St Thomas Mount, Chennai - 600016
          </p>
        </div>

        <div className="flex my-5">
          <IoIosMail className="text-[#5080BA] text-[45px] p-3 bg-[#F3F8FB] rounded-full hover:text-white hover:bg-[#f5a93f] transition-all duration-500 ease-in-out cursor-pointer" />
          <p className="footerFont text-[18px] my-auto px-5 font-semibold">
            E-mail
            <span className=" hover:text-[#f5a93f] cursor-pointer px-2 font-normal">
            info@helixotech.com
            </span>
          </p>
        </div>

        <div className="flex my-5">
          <MdOutlineAccessTimeFilled className="text-[#5080BA] text-[45px] p-3 bg-[#F3F8FB] rounded-full hover:text-white hover:bg-[#f5a93f] transition-all duration-500 ease-in-out cursor-pointer" />
          <p className="footerFont text-[18px] my-auto px-5">
            Monday-Friday: 9am to 5pm
            <br />
            Saturday: 10am to 4pm
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
