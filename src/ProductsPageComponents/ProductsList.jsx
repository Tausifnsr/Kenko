import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBottleDroplet, FaBottleWater } from "react-icons/fa6";
import { LiaWineBottleSolid } from "react-icons/lia";
import { BsCart2 } from "react-icons/bs";
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

function truncate(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
}

function ProductList() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleAfterChange = (current) => {
    console.log(`Slide changed to: ${current}`);
    setCurrentSlide(current);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 3,
    afterChange: handleAfterChange,
    appendDots: (dots) => (
      <div className="flex items-center gap-4">
        <button
          className=" absolute left-[255px] flex items-center justify-center w-12 h-12 bg-transparent border-2 rounded-full  hover:border-[#f5a934] hover:text-white hover:bg-[#f5a934] transition:hover duration-300 ease-in-out"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <GoArrowLeft className="w-5 h-5" />
        </button>
        <ul className="relative footerFont flex justify-center items-center gap-10">
          {dots}
        </ul>
        <button
          className="absolute right-[230px] top-0 flex items-center justify-center w-12 h-12 bg-transparent border-2 rounded-full  hover:border-[#f5a934] hover:text-white hover:bg-[#f5a934] transition:hover duration-300 ease-in-out"
          onClick={() => sliderRef.current.slickNext()}
        >
          <GoArrowRight className="w-5 h-5" />
        </button>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out  hover:border-[#f5a934] hover:text-white hover:bg-[#f5a934]
                    ${
                      i === currentSlide
                        ? "bg-[#f5a934] border-[#f5a934] text-white"
                        : "bg-white text-[#111]"
                    } 
                    border-2`}
      >
        {i + 1}
      </div>
    ),
  };
  
  const products = [
    {
      icon: <LiaWineBottleSolid className="icon mx-auto text-[200px]" />,
      label: "2 x 1L bottles",
      name: "Naturally Spark Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti blanditiis...",
      price: "1099.99",
      oldPrice: "1499.99",
    },
    {
      icon: <FaBottleDroplet className="icon mx-auto text-[150px] my-7" />,
      label: "3 x 2L bottles",
      name: "Classic Pure Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti blanditiis...",
      price: "2499.00",
      oldPrice: "3499.00",
    },
    {
      icon: <FaBottleWater className="icon mx-auto text-[150px] my-7" />,
      label: "6 x 3L bottles",
      name: "Diamond Mineral Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti blanditiis...",
      price: "4999.99",
      oldPrice: "6999.99",
    },
    {
      icon: <LiaWineBottleSolid className="icon mx-auto text-[200px]" />,
      label: "2 x 1L bottles",
      name: "Naturally Spark Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti blanditiis...",
      price: "1099.99",
      oldPrice: "1499.99",
    },
    {
      icon: <FaBottleDroplet className="icon mx-auto text-[150px] my-7" />,
      label: "3 x 2L bottles",
      name: "Classic Pure Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti blanditiis...",
      price: "2499.00",
      oldPrice: "3499.00",
    },
    {
      icon: <FaBottleWater className="icon mx-auto text-[150px] my-7" />,
      label: "6 x 3L bottles",
      name: "Diamond Mineral Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti blanditiis...",
      price: "4999.99",
      oldPrice: "6999.99",
    },
    {
      icon: <LiaWineBottleSolid className="icon mx-auto text-[200px]" />,
      label: "2 x 1L bottles",
      name: "Naturally Spark Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti blanditiis...",
      price: "1099.99",
      oldPrice: "1499.99",
    },
    {
      icon: <FaBottleDroplet className="icon mx-auto text-[150px] my-7" />,
      label: "3 x 2L bottles",
      name: "Classic Pure Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti blanditiis...",
      price: "2499.00",
      oldPrice: "3499.00",
    },
    {
      icon: <FaBottleWater className="icon mx-auto text-[150px] my-7" />,
      label: "6 x 3L bottles",
      name: "Diamond Mineral Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti blanditiis...",
      price: "4999.99",
      oldPrice: "6999.99",
    },
  ];

  return (
    <div className="slider-container mb-24">
      <Slider {...settings} ref={sliderRef}>
        {products.map((product, index) => (
          <div key={index} className="slider-item p-4">
            <div className="productCard mb-14">
              {product.icon}
              <div className="label">{product.label}</div>
              <h1 className="heading text-[25px] mt-3 font-semibold">
                {product.name}
              </h1>
              <p className="text-[#666] mt-3">
                {truncate(product.description, 65)}
              </p>
              <p className="heading text-[#f5a934] text-[25px] font-bold mt-8">
              &#8377;{product.price}{" "}
                <span className="line-through text-[#ccc]">
                &#8377;{product.oldPrice}
                </span>
              </p>

              <button className="flex uppercase font-semibold mx-auto border-2 border-[#13BBEA] px-12 py-2 mt-7 mb-5 rounded-full hover:text-white hover:bg-[#f5a934] hover:border-[#f5a934] transition-all duration-500 ease-in-out">
                <BsCart2 className="text-[18px] mt-[2px] mr-2" />
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default ProductList;
