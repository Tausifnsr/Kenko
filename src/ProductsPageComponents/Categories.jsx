import { IoMdArrowDropright } from "react-icons/io";
import YWave from '../assets/waveyellow.png'

function Categories() {
  return (
    <>
        <div>
        <h1 className="heading text-[22px] mx-5 mt-14 font-bold mb-3">Categories</h1>
              <img className="w-8 mb-8 mx-5" src={YWave} alt="" />
              <ul className="categoriesList mb-12">
                <a
                  className="flex items-center mx-2 mb-3 text-[18px] text-gray-500 transition duration-500 ease-in-out hover:text-sky-500 group"
                  href="#"
                >
                  <IoMdArrowDropright className="text-gray-500 transition duration-500 ease-in-out group-hover:text-[#f5a934]" />
                  <li className="ml-1">Bottled Water</li>
                </a>
                <a
                  className="flex items-center mx-2 mb-3 text-[18px] text-gray-500 transition duration-500 ease-in-out hover:text-sky-500 group"
                  href="#"
                >
                  <IoMdArrowDropright className="text-gray-500 transition duration-500 ease-in-out group-hover:text-[#f5a934]" />
                  <li className="ml-1">Healthy Drinking</li>
                </a>
                <a
                  className="flex items-center mx-2 mb-3 text-[18px] text-gray-500 transition duration-500 ease-in-out hover:text-sky-500 group"
                  href="#"
                >
                  <IoMdArrowDropright className="text-gray-500 transition duration-500 ease-in-out group-hover:text-[#f5a934]" />
                  <li className="ml-1">Water Filteration</li>
                </a>
                <a
                  className="flex items-center mx-2 mb-3 text-[18px] text-gray-500 transition duration-500 ease-in-out hover:text-sky-500 group"
                  href="#"
                >
                  <IoMdArrowDropright className="text-gray-500 transition duration-500 ease-in-out group-hover:text-[#f5a934]" />
                  <li className="ml-1">Mineral Water Process</li>
                </a>
                <a
                  className="flex items-center mx-2 mb-3 text-[18px] text-gray-500 transition duration-500 ease-in-out hover:text-sky-500 group"
                  href="#"
                >
                  <IoMdArrowDropright className="text-gray-500 transition duration-500 ease-in-out group-hover:text-[#f5a934]" />
                  <li className="ml-1">Testing & Producing</li>
                </a>
                <a
                  className="flex items-center mx-2 mb-3 text-[18px] text-gray-500 transition duration-500 ease-in-out hover:text-sky-500 group"
                  href="#"
                >
                  <IoMdArrowDropright className="text-gray-500 transition duration-500 ease-in-out group-hover:text-[#f5a934]" />
                  <li className="ml-1">Baby Water Filters</li>
                </a>
              </ul>
        </div>
    </>
  )
}

export default Categories