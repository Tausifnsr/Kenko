import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png"; // Your logo path
import { GoSearch } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

function Navbar() {
  const [dropdownPages, setDropdownPages] = useState(false);
  const [dropdownShop, setDropdownShop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // New state for search bar visibility
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);

      // Hide search bar when scrolled more than 100px
      if (isScrolled) {
        setShowSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path; // Exact match for home
    }
    return location.pathname.startsWith(path); // Match for other paths
  };

  return (
    <nav
      className={`w-full h-20 flex justify-center items-center fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav scrolled" : "nav initial"
      }`}
    >
      <div className="w-full">
        <div className="lg:w-4/5 w-11/12 mx-auto h-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-x-2 mt-0">
            <Link to="/">
              <img className="h-14" src={Logo} alt="Logo" />
            </Link>
            {/* Contact Information */}
            
              <div className="flex mt-2">
                <h2 className="text-[#F5A93F] text-[28px] ml-5 mt-1 pr-5 py-4 border-r-2">
                  <FiPhone />
                </h2>
                <p className="navNumber text-gray-600 bg-transparent mx-2 mt-2">
                  Get Free Delivery <br />
                  <span className="text-[18px] font-bold text-black hover:text-[#F5A93F] hover:cursor-pointer transition-hover duration-500 ease-in-out">
                    +91-90256 33829
                  </span>
                </p>
              </div>
          </div>

          <div className="flex items-center">
            {/* Navigation Menu */}
            <ul className="flex footerFont items-center text-[16px] font-bold max-lg:hidden">
              <Link
                to="/"
                className={`menu-item ${isActive("/") ? "active" : ""} ${
                  scrolled ? "py-7" : "py-2"
                }`}
              >
                Home
              </Link>

              {/* Pages Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setDropdownPages(true)}
                onMouseLeave={() => setDropdownPages(false)}
              >
                <Link
                  to="#"
                  className={`menu-item ${isActive("/about") ? "active" : ""} ${
                    scrolled ? "py-7" : "my-4"
                  }`}
                >
                  About
                </Link>
                {dropdownPages && (
                  <ul className="absolute footerFont top-full w-52 border-t-[3px] border-t-[#f5a93f] left-0 bg-white shadow-md">
                    <li>
                      <Link
                        to="/about/aboutus"
                        className={`dropdown-item ${
                          isActive("/about/aboutus") ? "active" : "border-b-[1px]"
                        }`}
                      >
                        Who We Are
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about/services"
                        className={`dropdown-item ${
                          isActive("about/services") ? "active" : ""
                        }`}
                      >
                        Our Services
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Shop Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setDropdownShop(true)}
                onMouseLeave={() => setDropdownShop(false)}
              >
                <Link
                  to="#"
                  className={`menu-item ${isActive("/shop") ? "active" : ""} ${
                    scrolled ? "py-7" : "my-4"
                  }`}
                >
                  Shop
                </Link>
                {dropdownShop && (
                  <ul className="absolute footerFont top-full w-52 border-t-[3px] border-t-[#f5a93f] left-0 bg-white shadow-md">
                    <li>
                      <Link
                        to="/shop/productList"
                        className={`dropdown-item ${
                          isActive("/shop/productList")
                            ? "active"
                            : "border-b-[1px]"
                        }`}
                      >
                        Our Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/productDetails"
                        className={`dropdown-item ${
                          isActive("/shop/details") ? "active" : ""
                        }`}
                      >
                        Product Details
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <Link
                to="/contact"
                className={`menu-item ${isActive("/contact") ? "active" : ""} ${
                  scrolled ? "py-7" : "py-2"
                }`}
              >
                Contact
              </Link>
            </ul>

            {/* Search and Cart Icons */}
            <div className="flex items-center">
              <button
                className="text-[22px] p-4 bg-white rounded-full hover:text-white hover:bg-[#fbbf41] transition-hover duration-200 ease-in"
                onClick={() => setShowSearch(!showSearch)}
              >
                <GoSearch />
              </button>
              <button className="text-[22px] p-4 ml-2 text-white bg-[#246396] rounded-full hover:bg-[#fbbf41] transition-hover duration-200 ease-in">
                <BsCart2 />
              </button>
            </div>
          </div>
        </div>

        {showSearch && (
          <div className="fixed footerFont top-0 right-16 w-64 bg-white border border-gray-200 shadow-lg z-20 mt-20 border-t-2 border-t-[#f5a93f]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none p-2 border border-gray-300 rounded"
            />
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
