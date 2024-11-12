import YWave from "../assets/waveyellow.png";
import Slider from "react-slick";
import Client1 from '../assets/client1.png'
import Client2 from '../assets/client2.png'
import Client3 from '../assets/client3.png'
import Client4 from '../assets/client4.png'
import Client5 from '../assets/client5.png'

function Partners() {


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
      <div className="w-[80%] my-20 mx-auto">
        <div className="flex px-44 py-16 mt-10">
          <div>
            <h1 className="heading text-[50px] -mt-4 pr-5">Trusted Partners</h1>
            <img className="w-[80px] float-end mt-3 pr-6" src={YWave} alt="" />
          </div>
          <div className="border-r-4 border-r-[#246396]"></div>
          <p className="w-[50%] pl-5 text-gray-500">
            Aliquaut enim mini veniam quis trud exercitation ullamco exa
            consequat. Duis aute rue dolor prehendrit lorem ipsum sit amet
            consectetur adipisicing sed.
          </p>
        </div>

        <div className="slider-container mt-10">
      <Slider ref={slider => (slider)} {...settings}>
        <div>
          <img className="transition-transform duration-300 ease-in-out hover:filter hover:grayscale hover:cursor-pointer" src={Client1} alt="" />
        </div>
        <div>
        <img className="transition-transform duration-300 ease-in-out hover:filter hover:grayscale hover:cursor-pointer" src={Client2} alt="" />
        </div>
        <div>
        <img className="transition-transform duration-300 ease-in-out hover:filter hover:grayscale hover:cursor-pointer" src={Client3} alt="" />
        </div>
        <div>
        <img className="transition-transform duration-300 ease-in-out hover:filter hover:grayscale hover:cursor-pointer" src={Client4} alt="" />
        </div>
        <div>
        <img className="transition-transform duration-300 ease-in-out hover:filter hover:grayscale hover:cursor-pointer" src={Client5} alt="" />
        </div>
      </Slider>

    </div>

      </div>
    </>
  );
}

export default Partners;
