import { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"; 

function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState("Select Your Bottle Options");

  const dropdownRef = useRef(null);

  const options = [
    "Select Your Bottle Options",
    "Commercial Water Services",
    "Water Filtration",
    "Mineral Water Services",
  ];


  // Close dropdown after selecting an option
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false); 
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-[500px] mt-7" ref={dropdownRef}>
      <div
        className="flex items-center justify-between bg-[#f5f5f5] rounded-full px-4 py-3 shadow-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`${
            selectedOption === "Select Your Bottle Options" ? "text-gray-700" : "text-gray-700"
          } ${selectedOption !== "Select Your Bottle Options"} w-full text-center`}
        >
          {selectedOption}
        </span>
        <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
      </div>
      <ul
        className={`absolute bg-white w-full rounded-lg shadow-lg mt-2 z-10 overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleSelectOption(option)}
            className={`px-4 py-3 text-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#00b2f0] hover:text-white ${
              selectedOption === option ? "bg-[#00b2f0] text-white" : "text-gray-700"
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomDropdown;
